package com.hyun.config.dto;

import com.hyun.cus.model.vo.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberResponseDto {
	
    private String email;

    public static MemberResponseDto of(User user) {
        return new MemberResponseDto(user.getEmail());
    }
}

