package com.hyun.cus.model.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import com.hyun.cus.model.vo.CusParamVo;
import com.hyun.cus.model.vo.User;

/**
 * 회원 Mapper
 * @author youngsoo
 *
 */

@Mapper
public interface UserMapper {
	
//	final String getByMbId= "select * from cus_mb where mb_id = #{cusParamVo.mbId}";
	
	/*  회원ID 채번 */
     final String maxMbId = "select concat('M', lpad(cast( cm.mcnt as char ),9, '0' ) ) as id"
					     		+ "  from ("
					     		+ "select count(1) + 1 as mCnt"
					     		+ "  from user t1"
					     		+ " where t1.id like 'M%' ) cm";
	
     /* 시큐리티 코딩의 이름을 e-mail로 쓰기위해서 alias 처리 */
//     final String getUserEmail = " select mb_email from cus_mb where mb_email = #{cusParamVo.mb.mbEmail}  ";
//     final String getByMbEmail = "select * from cus_mb where mb_email = #{cusParamVo.mbEmail}";
     
//	/* 
//	 * 회원정보조회
//	 */
//	@Select(getByMbId)
//	@Results( id = "cusMbMapper" , value = { 
//		@Result( property="mbId", column="mb_id" ),
//		@Result( property="mbEmail", column="mb_email" ),
//		@Result( property="mbNm", column="mb_nm" ),
//		@Result( property="brId", column="br_id" ),
//		@Result( property="brAdmYn", column="br_adm_yn" ),
//		@Result( property="valdStrdt", column="vald_strdt" ),
//		@Result( property="valdNddt", column="vald_nddt" ),
//		@Result( property="valdNddt", column="vald_nddt" ),
//		@Result( property="tlno1", column="tlno1" ),
//		@Result( property="tlno2", column="tlno2" ),
//		@Result( property="tlno3", column="tlno3" ),
//		@Result( property="password" , column="password" )
//		} )
//	User getByMbId( @Param("cusParamVo") CusParamVo cusParamVo );
	
//	/*
//	 * 회원정보등록
//	 */
//	@Insert(insert)
//	@ResultMap("cusMbMapper")
//	int insert(@Param("User") User User );
	
	/*
	 * 회원ID채번
	 */
	@Select( maxMbId )
   String getMakeMbId();

}
