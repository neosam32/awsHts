select * from hts.User;

select * from com_csf;
select * from com_dt;

/*  코드 등록 */
insert into com_csf 
( csfcd , cscnm , vald_strdt , vald_nddt)
values( 'C0001' , 'bsns_csfcd' , now() , DATE_FORMAT('99991231','%Y%m%d') );

/* 세부코드 등록 */
insert into com_dt 
( csfcd , dtcd , ppr_dtcd , dtcnm , cdvl , dtcd_lvl , scr_idc_ordr ,vald_strdt , vald_nddt)
values(
'C0001' , '00001' , NULL , '부동산중개', '0', 0 , 1 ,now() , DATE_FORMAT('99991231','%Y%m%d')  
);






