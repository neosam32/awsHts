package com.hyun.cus.sv;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hyun.cus.model.mapper.UserMapper;
import com.hyun.cus.model.mapper.UserRepository;
import com.hyun.cus.model.vo.User;

/**
 * 고객관리
 * @author youngsoo
 *
 */
@Service("SvCusA001")
public class SvCusA001  {

	    private static final Logger logger = LoggerFactory.getLogger(SvCusA001.class);

	    @Autowired
		private UserRepository userRepository;
		
		
		@Autowired
		private UserMapper userMapper;
		
		
		@Autowired
		private BCryptPasswordEncoder encoder;
		
		/* 회원가입 */
		@Transactional
		public void insertUser( User user  )  throws Exception 
		{
		
		//	user.setRole("ROLE_USER");
			user.setRole("USER");
			String rawPassword = user.getPassword(); // 원문
			String encPassword = encoder.encode(rawPassword); //해쉬
			
			
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
		
		}
		
		
		
//		public List< User > getAll ()
//	    {
//	    	logger.info(" SvCusA001 START");
//	    	List< User > cuBrList = cusMapper.getAll();
//	    	// User rtn = new User();
//	    	return cuBrList;
//	    }
		
//		/* 지점 Id 로 지점 정보 조회 */
//		public User getCusBrInfo( CusParamVo cusParamVo ) 
//		{
//			logger.info(" getCusBrInfo START");
//			
//			User User = cusMapper.getCusBrInfo( cusParamVo );
//			if(  User == null )
//			{
//				throw new RuntimeException("해당 지점이 없습니다." );
//			}
//			return User;
//			
//		}
//		
//		public String getMakeMbId()
//		{
//			logger.info(" getCusBrInfo START");
//			return cusMbMapper.getMakeMbId();
//		}
	    
}
