package com.hyun.cus.sv;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hyun.config.dto.MemberRequestDto;
import com.hyun.config.dto.TokenDto;
import com.hyun.config.dto.TokenRequestDto;
import com.hyun.config.jwt.TokenProvider;
import com.hyun.config.model.RefreshToken;
import com.hyun.config.model.RefreshTokenRepository;
import com.hyun.cus.model.mapper.UserMapper;
import com.hyun.cus.model.mapper.UserRepository;
import com.hyun.cus.model.vo.Authority;
import com.hyun.cus.model.vo.User;

import lombok.RequiredArgsConstructor;

/**
 * 고객관리
 * @author youngsoo
 *
 */
@RequiredArgsConstructor
@Service("SvCusA001")
public class SvCusA001  {

	    private static final Logger logger = LoggerFactory.getLogger(SvCusA001.class);

	    @Autowired
		private UserRepository userRepository;
		
		
		@Autowired
		private UserMapper userMapper;
		
	    private final AuthenticationManagerBuilder authenticationManagerBuilder;
	
	    private final PasswordEncoder passwordEncoder;
	    private final TokenProvider tokenProvider;
	    private final RefreshTokenRepository refreshTokenRepository;
		
			/* 회원가입 */
		@Transactional
		public User insertUser( User user  )  throws Exception 
		{
		
		//	user.setRole("ROLE_USER");
			user.setAuthority(Authority.ROLE_USER);
			String rawPassword = user.getPassword(); // 원문
			String encPassword = passwordEncoder.encode(rawPassword); //해쉬
			
			
			logger.debug("encPassword=" + encPassword );
			
			// Id를 채번한다.
			String id = userMapper.getMakeMbId();
			
			logger.error("채번한 유저ID = " + id );
			
			user.setId( id);
			user.setPassword(encPassword);
			user.setDelyn("0"); // 0 N , 1 Y
			
			
			try {
				userRepository.save( user  );	
				
			}catch( Exception e )
			{
				throw new Exception("중복된 이메일 입니다.");
			}
			
			return user;
		
		}
		
	    @Transactional
	    public TokenDto login(MemberRequestDto memberRequestDto) {
	    	
	    	logger.info("login START");
	        // 1. Login ID/PW 를 기반으로 AuthenticationToken 생성
	        UsernamePasswordAuthenticationToken authenticationToken = memberRequestDto.toAuthentication();

	        logger.info("authenticationToken="+ authenticationToken.toString());
	        
	        // 2. 실제로 검증 (사용자 비밀번호 체크) 이 이루어지는 부분
	        //    authenticate 메서드가 실행이 될 때 CustomUserDetailsService 에서 만들었던 loadUserByUsername 메서드가 실행됨
	        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

	        // 3. 인증 정보를 기반으로 JWT 토큰 생성
	        TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);
            
	        
	        logger.info("authentication.getName()="+ authentication.getName());
	        
	        // 4. RefreshToken 저장
	        RefreshToken refreshToken = RefreshToken.builder()
	                .key(authentication.getName())
	                .value(tokenDto.getAccessToken())
	                .build();

	        refreshTokenRepository.save(refreshToken);

	        // 5. 토큰 발급
	        return tokenDto;
	    }

	    @Transactional
	    public TokenDto reissue(TokenRequestDto tokenRequestDto) {
	        // 1. Refresh Token 검증
	        if (!tokenProvider.validateToken(tokenRequestDto.getRefreshToken())) {
	            throw new RuntimeException("Refresh Token 이 유효하지 않습니다.");
	        }

	        // 2. Access Token 에서 Member ID 가져오기
	        Authentication authentication = tokenProvider.getAuthentication(tokenRequestDto.getAccessToken());

	        // 3. 저장소에서 Member ID 를 기반으로 Refresh Token 값 가져옴
	        RefreshToken refreshToken = refreshTokenRepository.findByKey(authentication.getName())
	                .orElseThrow(() -> new RuntimeException("로그아웃 된 사용자입니다."));

	        // 4. Refresh Token 일치하는지 검사
	        if (!refreshToken.getValue().equals(tokenRequestDto.getRefreshToken())) {
	            throw new RuntimeException("토큰의 유저 정보가 일치하지 않습니다.");
	        }

	        // 5. 새로운 토큰 생성
	        TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);

	        // 6. 저장소 정보 업데이트
	        RefreshToken newRefreshToken = refreshToken.updateValue(tokenDto.getRefreshToken());
	        refreshTokenRepository.save(newRefreshToken);

	        // 토큰 발급
	        return tokenDto;
	    }
}
