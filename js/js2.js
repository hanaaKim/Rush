$(function(){

	//menu 연결
	$("#menu_icon").click(function(e){
		e.preventDefault();
		$('#main2').load('menu.html', function(){
			$(this).css("z-index","100");
			$(this).hide().slideDown();
		})
	});
    //footer 연결
	$(".footer").load('footer.html');
	

	//로그인화면
	$(".joinBtn").click(function(){
		$(location).attr("href","join.html"); 
	});
	
	//아이디 찾기, 비밀번호 찾기
	$(".at1Btn").click(function(){
		alert("죄송합니다. 이 사이트에서는 불가합니다.");
	});
	
	$(".loginBtn").click(function(){
		return checkValue();
	})


	//아이디 저장 
	let check = 0;
	$(".idBox").click(function(){
		if(check==0){
			$(".box").css("background","black");
			check=1;
		}else{
			$(".box").css("background","white");
			check=0;
		}
	})

	//회원가입화면
	//약관동의 탭메뉴 구현
	var joinTabBtn = $(".joinTabBtn"); 
	var joinCont = $("section>article");
	joinCont.hide().eq(0).show();
	joinTabBtn.eq(0).css("background","#e8e8e8");


	//약관 동의 전체선택
	var agree = $('input[name=agree]');
	$("#agreeAll").click(function(e){
		for(let i=0; i<agree.length; i++){
			agree[i].checked = e.target.checked;
		}
		
	});
	
	// 개별 체크
	agree.click(function(e){
		var is_checked = true;
		agree.each(function(){
			is_checked = is_checked && $(this).is(":checked");
		});
		$("#agreeAll").prop("checked", is_checked);
	});


	//약관동의 = 다음 단계 버튼
	$(".at1_nextBtn").click(function(e){
		e.preventDefault();
		if($("#agreeAll").is(":checked") == true){
			joinTabBtn.css("background","none");
			joinTabBtn.eq(1).css("background","#e8e8e8"); //클릭한 버튼 배경 생기게
			$(".at").hide().eq(1).show();
		}else{
			alert("약관에 모두 동의해주세요.")
		}
		// console.log($("#agreeAll").is(":checked")); //전체동의 값 확인
	});

	// 회원가입 완료 버튼
	$(".join_SuccessBtn").click(function(){
		return checkValue2();
	})



});
/*===========================함수===========================*/
//로그인 버튼 클릭시, 아이디와 비밀번호 유효성 체크 함수
function checkValue(){
	var id = $("#userId").val();
	var pw = $("#userPw").val();
    var id_length = id.length;
    var id_email = id.indexOf("@");
    
	if(!id){
		alert("아이디를 입력하세요.");
        $("#userId").focus();
		return false;
	}
    
    if(id_email<0){
        alert("아이디는 이메일 형식으로 입력해주세요");
        $("#userId").focus();
        return false;
    }
    for(i=0; i<id_length; i++){
        let code= id.charCodeAt(i);
        if(code>128){
            alert("아이디는 영문으로 입력해주세요.")
            $("#userPw").focus();
            return false;
        }
    }
    
	if(!pw){
		alert("비밀번호를 입력하세요.");
		return false;
	}
    
	alert(id+"님 로그인되었습니다.");
	$(location).attr("href","index.html");
}

//회원가입완료 버튼 클릭시, 유효성 체크 함수
function checkValue2(){
	var name1 = $("#name1").val();
	var name2 = $("#name2").val();
	var email1 = $("#email1").val();
	var email2 = $("#email2").val();
	var pass1 = $("#pass1").val();
	var pass2 = $("#pass2").val();
	var email_check =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

	if(!name1){		alert("이름을 입력하세요."); $("#name1").focus();	return false;	}
	if(!name2){		alert("성을 입력하세요."); $("#name2").focus();   return false; 	}
	if(!email1){	alert("이메일을 입력하세요.");	$("#email1").focus();  return false;	}
	if(!email2){	alert("이메일확인을 입력하세요.");  $("#email2").focus();	return false;	}
	if(!pass1){		alert("비밀번호를 입력하세요.");	$("#pass1").focus();  return false;	}
	if(!pass2){		alert("비밀번호 확인을 입력하세요."); $("#pass2").focus();	return false;}


	if(!email_check.test(email1)){  
		alert("이메일을 형식에 맞게 입력해주세요.");    
        return false;
	}else{  
		if(email1 != email2){	alert("이메일을 동일하게 입력하세요.");	return false;}
	}
	
	if(pass1 != pass2){		alert("비밀번호를 동일하게 입력하세요.");return false;}

	alert(name1+name2+"님 회원가입이 완료 되었습니다.");
	$(location).attr("href","login.html");
}