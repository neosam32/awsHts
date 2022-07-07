package com.hyun.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.hyun.config.auth.PrincipalDetailsService;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;


@Configuration        // 빈등록 스프링 컨테이너에서 객체를 관리 하게 할수 있는것
@EnableWebSecurity // 시큐리티 필터 추가 , 스프링 시큐리티가 활성화가 되어 있는데 어떤 설정을 해당파일에서 하겠다.
@EnableGlobalMethodSecurity( prePostEnabled = true )  // 특정 주소로 접근을하면 권한 및 인증을 미리 체크 함. 
@AllArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter  {
//
//	@Autowired
	private PrincipalDetailsService principalDetialService;
//	private final UserRepository userRepository;
//	private final CorsFilter corsFilter;
//	
    @Bean // Ioc가 됨.
    public BCryptPasswordEncoder encodePWD() {
    	
    	// 1234를 암호화 한다.
//    	String encPw = new BCryptPasswordEncoder().encode("12344");
        return new BCryptPasswordEncoder();
    }
//    
    // 시큐리티가 대신 로그인해주는데 뭘로 해쉬가 되어 회원가입이 되었는지 알아야 같은 해쉬로 
    // 암호화 해서 db에 있는 해쉬랑 비교할 수 있음.
    @Override
    protected void configure( AuthenticationManagerBuilder auth ) throws Exception{
    	System.out.println("시큐리티가 패스워드를 비교 하기 전");
    	auth.userDetailsService(principalDetialService).passwordEncoder(encodePWD());
    }
//    
 
    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	 
		//시큐리티 필터에 등록 할 경우 
//		http.addFilterAfter(  new MyFilter3() , BasicAuthenticationFilter.class );
//		http.addFilterBefore(  new MyFilter3() , BasicAuthenticationFilter.class );
    	/*
    	 * 		        .antMatchers("/api/user/**")
		        .access("hasRole('ROLE_USER') or hasRole('ROLE_MANAGER') or hasRole('ROLE_ADMIN')")
		        .antMatchers("/api/manager/**")
		        .access("hasRole('ROLE_MANAGER') or hasRole('ROLE_ADMIN')")
		        .antMatchers("/api/admin/**")
		        .access("hasRole('ADMIN')")
    	 */
    	
    	// XSS  게시판에 스크립트로 공격하는 방법
    	
    	
		http.csrf().disable()
//		http.sessionManagement().sessionCreationPolicy( SessionCreationPolicy.STATELESS  )  // 세션을 사용하지 않음.
//		.and()
//		       .addFilter(corsFilter) // @CrossOrigin( 인증 x ) , 시큐리티 필터에 등록 인증(0)
//		       .formLogin().disable() // 폼로긴 사용하지 않음
		        
//		        .httpBasic().disable()  //  Bearer 방식사용함 .
//		        .addFilter(new JwtAuthenticationFilter(  authenticationManager() ) ) // 
//		        .addFilter(new JwtAuthorizationFilter(  authenticationManager() , userRepository  ) ) // 
		        .authorizeRequests()  
		        .antMatchers("/","/js/**","/auth/**" ,"/images/**").permitAll()
		        .anyRequest().authenticated()
		        /* 비인정 요청은 모두 로그인 폼으로 */
		    .and()
	            .formLogin()
	            .loginPage("/auth/loginForm")
	            .usernameParameter("email")  // default username 을 다른 이릉으로 변경 할때 사용 
	            /*/auth/loginProc 로 들어온 요청을 시큐리티가 가로채게 설정 */
	            .loginProcessingUrl("/auth/loginProc")
	            .defaultSuccessUrl("/")
		        ;
 

    }
    
	
}
