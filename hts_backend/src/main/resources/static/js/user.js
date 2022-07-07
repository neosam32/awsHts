/**
 * 사용자 관리 
*/
 
 let index = {

	init: function(){
		$("#btn-join").on("click",()=>{
			this.userJoin();
		});
	
	},
	
	/* 회원가입 */
	userJoin : function(){
		
		
		let data = {
			
			usernm : $("#username").val(),
			username : $("#email").val(),
			email : $("#email").val(),
			password : $("#password").val(),
			tlno1 : $("#tlno1").val(),
			tlno2 : $("#tlno2").val(),
			tlno3 : $("#tlno3").val()
		};
		
		// alert( data.username + ":" + data.email  );
		// return;
		
		if( data.password != $("#password1").val() )
		{
			alert("비밀번호가 다릅니다.");
			$("#password").val("");
			$("#password1").val("");
			return false;
		}
		
		// return false;
		
		//alert(data.);
	    // ajax 요청시 기본이 비동기 호출
	    $.ajax( {
		   // 회원조회 수행 요청 실행 성공 done / 실패 fail
		   type : "POST",
		   url: "/auth/joinProc",
		   data: JSON.stringify(data ),  // http body data
		   contentType : "application/json; charset=utf-8" , // body 데이터가 어떤 타입인지 (MIME)
		   dataType : "json" // 요청을 서버로 해서 응답이 왔을때 기보넞긍로 모든것이 문자열 ( 생긴게 json ) ==> javascript object 
		    
	    } ).done( function( resp ){
		
		   alert("회원가입이 완료되었습니다.");
		   console.log( resp );
		   location.href = "/auth/loginForm"
		
	    } ).fail( function(error){
         
		    alert(JSON.stringify(error.responseText));
		
	    } ); // ajax 통신을 이용해서 파라미터를 데이틀 json으로 변경하여 회원조회 요청
	},
	 /* 로그인 */
  
}


index.init();


function goPopup(){
    // 주소검색을 수행할 팝업 페이지를 호출합니다.
    // 호출된 페이지(jusopopup.jsp)에서 실제 주소검색URL(https://www.juso.go.kr/addrlink/addrLinkUrl.do)를 호출하게 됩니다.
    var pop = window.open("/tools/jusoPopup","pop","width=570,height=420, scrollbars=yes, resizable=yes"); 
    
    // 모바일 웹인 경우, 호출된 페이지(jusopopup.jsp)에서 실제 주소검색URL(https://www.juso.go.kr/addrlink/addrMobileLinkUrl.do)를 호출하게 됩니다.
    //var pop = window.open("/popup/jusoPopup.jsp","pop","scrollbars=yes, resizable=yes"); 
}


function jusoCallBack(roadFullAddr,roadAddrPart1,addrDetail,roadAddrPart2,engAddr, jibunAddr, zipNo, admCd, rnMgtSn, bdMgtSn,detBdNmList,bdNm,bdKdcd,siNm,sggNm,emdNm,liNm,rn,udrtYn,buldMnnm,buldSlno,mtYn,lnbrMnnm,lnbrSlno,emdNo){
        // 팝업페이지에서 주소입력한 정보를 받아서, 현 페이지에 정보를 등록합니다.
        
          $("#addr").val( roadFullAddr  );
        /*
        document.form.roadFullAddr.value = roadFullAddr;
        document.form.roadAddrPart1.value = roadAddrPart1;
        document.form.roadAddrPart2.value = roadAddrPart2;
        document.form.addrDetail.value = addrDetail;
        document.form.engAddr.value = engAddr;
        document.form.jibunAddr.value = jibunAddr;
        document.form.zipNo.value = zipNo;
        document.form.admCd.value = admCd;
        document.form.rnMgtSn.value = rnMgtSn;
        document.form.bdMgtSn.value = bdMgtSn;
        document.form.detBdNmList.value = detBdNmList;
        /** 2017년 2월 추가제공 
        document.form.bdNm.value = bdNm;
        document.form.bdKdcd.value = bdKdcd;
        document.form.siNm.value = siNm;
        document.form.sggNm.value = sggNm;
        document.form.emdNm.value = emdNm;
        document.form.liNm.value = liNm;
        document.form.rn.value = rn;
        document.form.udrtYn.value = udrtYn;
        document.form.buldMnnm.value = buldMnnm;
        document.form.buldSlno.value = buldSlno;
        document.form.mtYn.value = mtYn;
        document.form.lnbrMnnm.value = lnbrMnnm;
        document.form.lnbrSlno.value = lnbrSlno;
        /** 2017년 3월 추가제공
        document.form.emdNo.value = emdNo;  
        
        
          loginProc : function(){
        
        
        let data = {
            username : $("#email").val(),
            password : $("#password").val()
        };
        
       alert( data.username + ":" + data.password  );
        // ajax 요청시 기본이 비동기 호출
        $.ajax( {
           // 회원조회 수행 요청 실행 성공 done / 실패 fail
           type : "POST",
           url: "/login",
           data: JSON.stringify(data ),  // http body data
           contentType :  'application/json;charset=utf-8', // body 데이터가 어떤 타입인지 (MIME)
          //  dataType : "json" // 요청을 서버로 해서 응답이 왔을때 기보넞긍로 모든것이 문자열 ( 생긴게 json ) ==> javascript object 
            
        } ).done( function( resp ){
        
            alert("로그인이 완료되었습니다.");
           console.log( JSON.stringify(resp)  );
           location.href = "/"
        
        } ).fail( function(error){
            //  alert("에러가 났음.."+resp.status);
           //  alert("로그인이 완료되었습니다.2222" +JSON.stringify(error) );
             console.log( JSON.stringify(error) );
         
 
            alert("로그인이 실패했습니다. " );
            $("#email").val( ""  );
            $("#password").val( "" );
      
        } ); // ajax 통신을 이용해서 파라미터를 데이틀 json으로 변경하여 회원조회 요청
    }
        **/
        
}
