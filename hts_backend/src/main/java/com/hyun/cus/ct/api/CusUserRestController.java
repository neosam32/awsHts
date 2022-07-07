package com.hyun.cus.ct.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hyun.cus.model.vo.User;
import com.hyun.cus.sv.SvCusA001;
import com.hyun.framework.dto.ResponseDto;

@RestController
public class CusUserRestController  {
    
	private static final Logger logger = LoggerFactory.getLogger(CusUserRestController.class);

//    @Autowired
//    private HttpSession session;
	
	@Autowired
	private SvCusA001 svCusA001;

	
	@PostMapping("/auth/joinProc")
	public ResponseDto<Integer> insertUser(@RequestBody User user ) throws Exception
	{
		// 회원등록하는 메소드 
		logger.error(" insertUser START");
		logger.error("user=[{}]",user);
		
		int rtnInt = 0;
		try {
			 svCusA001.insertUser(user);
		}catch( DataIntegrityViolationException e )
		{
			throw new Exception("중복된 이메일 입니다.");
		}
		
		return new ResponseDto<Integer>( HttpStatus.OK.value() ,rtnInt) ; // Jackson이 json으로 파싱해서 던짐.
	}
	
	
//	@PostMapping("api/login")
//	public ResponseDto<Integer> loginProc(@RequestBody User user ) throws Exception
//	{
///    User principal = user.로그인( user );
//	   if( principal != null ) session.setAttribute("principal",principal)
		   //		logger.error("api/login user=[{}]",user);
//		return new ResponseDto<Integer>( HttpStatus.OK.value() ,0) ; // Jackson이 json으로 파싱해서 던짐.
//	}
	
}
