package com.hyun.cus.ct;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.hyun.config.auth.PrincipalDetails;
import com.hyun.utils.HyunUtil;

// 인증이 안된 사용자들이 출입할 수 있는 경로 /auth 로 설정
// 주소가 / 허용 
// static 이하에 있는 

@Controller
public class CusUserController {
	
	
	private static final Logger logger = LoggerFactory.getLogger(CusUserController.class);
	
	@Autowired
	private HttpSession session ;
	
    @Autowired
	private  HyunUtil hUtil;
	
	//public String index( @AuthenticationPrincipal PrincipalDetails principal ) {
	@GetMapping({"","/"})
	public String index( @AuthenticationPrincipal PrincipalDetails principal ) {
		// 시큐리티 리턴후 세션은 어떻게 찾지?
		logger.error("index START" );
		
		if( principal != null )
		{
			logger.error("principal = " + principal.getUser().toString() );
			
			session.setAttribute("role", principal.getUser().getRole());
		}
	    
		hUtil.printSession("index" );
	    
		// /WEB-INF/views/index.jsp
		return "index";
	}
	
	
	@GetMapping({"auth/loginForm"})
	public String loginForm() {
		
		logger.error("loginForm START" );
		hUtil.printSession("loginForm" );
		return "/auth/loginForm"; 
		
	}
	
	@GetMapping({"auth/joinForm"})
	public String joinForm() {
		
		logger.error("joinForm START" );
		
		return "auth/joinForm";
		
	}
	
	
	

}
