package com.hyun.config.sv;

import java.util.Collections;

import javax.transaction.Transactional;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hyun.cus.model.mapper.UserRepository;
import com.hyun.cus.model.vo.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository memberRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    	
    
        return memberRepository.findByEmail(username)
                .map(this::createUserDetails)
                .orElseThrow(() -> new UsernameNotFoundException(username + " -> 데이터베이스에서 찾을 수 없습니다."));
    }

    // DB 에 User 값이 존재한다면 UserDetails 객체로 만들어서 리턴
    private UserDetails createUserDetails(User findUser) {
        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(findUser.getAuthority().toString());
        org.springframework.security.core.userdetails.User RtnUse = new org.springframework.security.core.userdetails.User( String.valueOf( findUser.getId() ),
                findUser.getPassword(),
                Collections.singleton(grantedAuthority) );
        return RtnUse;
    }
}
