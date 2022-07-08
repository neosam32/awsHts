package com.hyun.cus.ct.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hyun.config.dto.MemberRequestDto;
import com.hyun.config.dto.TokenDto;
import com.hyun.cus.model.vo.User;
import com.hyun.cus.sv.SvCusA001;

@RestController
public class CusUserRestController  {
    
	private static final Logger logger = LoggerFactory.getLogger(CusUserRestController.class);

//    @Autowired
//    private HttpSession session;
	
	@Autowired
	private SvCusA001 svCusA001;

	@CrossOrigin
	@PostMapping("/auth/joinProc")
	public ResponseEntity<?> insertUser(@RequestBody User user ) throws Exception
	{
		// 회원등록하는 메소드 
		logger.info(" insertUser START");
		logger.info("user=[{}]",user);
		
		user.setUsernm(user.getUsername()); // 유저명으로 변경
        user.setUsername(user.getEmail()); // 시큐리티 때문에 username에 명으로 치환함 		
		User userEntity = null;

		try {
			 userEntity =	 svCusA001.insertUser(user);
		}catch( DataIntegrityViolationException e )
		{
			throw new Exception("중복된 이메일 입니다.");
		}
		
		return new ResponseEntity<>( userEntity ,HttpStatus.OK) ; // Jackson이 json으로 파싱해서 던짐.
	}
	
	@CrossOrigin
	@PostMapping("/auth/loginProc")
	public ResponseEntity<?>  loginProc(@RequestBody MemberRequestDto memberRequestDto ) throws Exception
	{
		logger.info(" loginProc START");
		logger.info(" memberRequestDto="+ memberRequestDto);
		
		TokenDto tokenDto = svCusA001.login(memberRequestDto);
		
		// 지점 정보 전까지 brId 강제 셋팅 
		tokenDto.setEmail("neosam32@gamil.com");
		tokenDto.setBrId("M0000000001");
		
		return new ResponseEntity<>( tokenDto ,HttpStatus.OK) ; // Jackson이 json으로 파싱해서 던짐.
	}
	
}
