package com.hyun.cus.model.mapper;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hyun.cus.model.vo.User;


//CRUD 함수를 들고 있음
//@Repository 가 없어도 Ioc가 됨 JpaRepository 상속

public interface UserRepository extends JpaRepository<User,Long> {

	// findBy규칙 --> Username 문법
	// select * from user where email 1?
	// jpa query method 보면 됨
	Optional<User> findByEmail(String email);
	
	boolean existsByEmail(String email);
}
