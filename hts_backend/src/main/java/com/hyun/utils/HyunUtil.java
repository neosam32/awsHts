package com.hyun.utils;

import java.util.Enumeration;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class HyunUtil {
	@Autowired
	private HttpSession session;
	
	public void printSession(  String loc ) {
		Enumeration enumSession = session.getAttributeNames();
	    while( enumSession.hasMoreElements()) {
	    	String st = enumSession.nextElement() + "";
	    	System.out.println("           " + loc + " ===> session : " + st + " : " + session.getAttribute( st ).toString() );
	    }
	}
}
