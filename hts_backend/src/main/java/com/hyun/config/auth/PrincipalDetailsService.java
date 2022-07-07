package com.hyun.config.auth;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hyun.cus.model.mapper.UserRepository;
import com.hyun.cus.model.vo.User;
import com.hyun.cus.sv.SvCusA001;

@Service // Bean등록
public class PrincipalDetailsService implements UserDetailsService{

	 private static final Logger logger = LoggerFactory.getLogger(SvCusA001.class);
	
	
	// 스피링이 로그인 요청을 가로챌때 , username , password 변수를 가로챔
	// password부분 처리는 알아서 함
	// 해당 유저name이 db에 있는지만 확인해주면 됨.
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		logger.error(" 실제로그인하는  username =[{}] " , username );
		User userEntity = userRepository.findByEmail( username );
		
		logger.error(" 실제로그인하는  userEntity =[{}] " , userEntity );
		
		if( userEntity != null )
		{
			logger.error(" PrincipalDetailsService userEntity =[{}] " , userEntity );
			return new PrincipalDetails( userEntity );
		}
	
		return null;
	}

	
	

}
