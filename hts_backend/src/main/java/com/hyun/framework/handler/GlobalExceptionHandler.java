package com.hyun.framework.handler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.hyun.framework.dto.ResponseDto;

import lombok.extern.slf4j.Slf4j;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler 
{
//	@ExceptionHandler( value= IllegalAccessException.class )
//     public String handleArgumentException( IllegalAccessException  e ) {
//    	 
//    	 return "<h1> " + e.getMessage() + "</h1>";
//     }
	
	private final static Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);
	
	
	@ExceptionHandler
	 public ResponseDto<String> handleArgumentException( Exception  e ) {
   	 
	 logger.error("handleException START "  );
		
   	 return new ResponseDto<String>( HttpStatus.INTERNAL_SERVER_ERROR.value() , e.getMessage() ) ;
    }
}
