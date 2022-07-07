package com.hyun.cus.model.vo;


import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@ToString
@NoArgsConstructor
@Table( indexes= @Index( name="Idx_user_01" , columnList ="email" , unique = true)  )
public class User {
	
	@Builder
    public User(String email, String username, String password, String role, String delyn, String provider,
			String providerId, Timestamp createDate ,String tlno1 , String tlno2 , String tlno3   ) {
		this.email = email;
		this.username = username;
		this.password = password;
		this.role = role;
		this.delyn = delyn;
		this.provider = provider;
		this.providerId = providerId;
		this.createDate = createDate;
		this.tlno1 = tlno1;
		this.tlno2 = tlno2;
		this.tlno3 = tlno3;
	}
	@Id // primary key
//    @GeneratedValue( strategy = GenerationType.IDENTITY )
     private String id;
	
    private String email;
    private String username; /* 시큐리 때문에 e-mail 들어감 */
    private String usernm;   /* 실제 사용자 이름 */
    private String password;
    private String role; // USER.,ADMIN
    private String delyn;
    
    private String provider;    // 
    private String providerId; // 구글 로그인시 
    private String tlno1;
    private String tlno2;
    private String tlno3;
//    public List<String> getRoleList  (){
//    	if( this.roles.length() > 0) {
//    		
//    		return Arrays.asList( this.roles.split(","));
//    	}
//    	return new ArrayList<>();
//    }
    
    @CreationTimestamp
    private Timestamp createDate;
    
}
