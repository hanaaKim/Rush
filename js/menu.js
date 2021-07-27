

$(function(){
	let i; //for문 변수
	let no; //인덱스, 태그의 인덱스 몇번째인지 숫자 저장변수
	//1.처음에는 서브 메뉴 하위 컨텐츠 모두 안보이게 하기
	$(".subMenu").css("display","none");
	$(".subMenu_sub").css("display","none");
	
	//각 메뉴에 마우스 오버시,
	$(".menu_text>li").mouseover(function(){
		$(this).find(".subMenu").css("display","block");
		$(this).find(".subMenu>li").stop().slideDown(500);
		$(this).css("border-bottom","3px solid black");
	});
		
	$(".menu_text>li").mouseout(function(){
		$(this).find(".subMenu").css("display","none");
		$(this).find(".subMenu>li").stop().slideUp(500);
		$(this).css("border","none")
	});	
			
	//각 메뉴의 서브메뉴에 마우스 오버시,
	$(".menu_text>li>.subMenu>li").mouseover(function(){
		$(this).find("div").css("display","block");
		no=$(".menu_img").index($(this).find("div"))+1;
		for(i=0; i<6; i++){
			$(".menu_img").css("background","url(img/menu/img"+no+".jpg");
			$(".menu_img").css("backgroundSize","100% 100%");
		}
		
		$(this).css("background","rgba(0,0,0,0.2)");
		$(this).css("border-radius","15px");
	});	
	
	$(".menu_text>li>.subMenu>li").mouseout(function(){
		$(this).find("div").css("display","none");
		$(this).css("background","none");
		
	});	

	
	//러쉬서브, 제품 각 서브 연결
	$(".subMenu li").on("click",function(){
        no=$(".subMenu li").index(this); //모든 subMenu의 li 6개모두 인덱스 구하기
        
        if(no==0){
            $(location).attr("href","history.html");
        }else if(no==1){
            $(location).attr("href","believe.html");
        }else if(no==2){
            $(location).attr("href","story.html");
        }
		else if(no==3){
           $(location).attr("href","product.html");
           
        }
		else if(no==4){
            // $(location).attr("href","product.html");
            page_func(6);
            $('#main2').show().slideUp();
            
        }else{
            // $(location).attr("href","product.html");
            page_func(8);
            $('#main2').show().slideUp();
            
        }
	});
	
	
	//매장안내, 이벤트 연결
	$(".menu_text li").on("click",function(){
        no=$(".menu_text>li").index(this); 
        
        if(no==2){
            $(location).attr("href","store.html");
        }else if(no==3){
            $(location).attr("href","event.html");
        }else{
			
		}
	});

	//메뉴의 회원가입, 로그인 연결
	$(".btn_login li").on("click",function(){
        no=$(".btn_login li").index(this); //모든 subMenu의 li 6개모두 인덱스 구하기
        if(no==0){
            $(location).attr("href","login.html");
        }else {
            $(location).attr("href","join.html");
        }
    });
	
	
	//메뉴 닫기 아이콘 클릭
	$("#menu_icon_close").click(function(e){
		e.preventDefault();
		$('#main2').show().slideUp();
	});

	
	
});

function page_func(js){
    for(i=2; i<=8; i++){ this["at"+i].style.display="none"; }
    this["at"+js].style.display="block";

    //상단 메인 이미지 바꾸기
    let at1 = document.querySelector("#at1");
    
    //상단 텍스트 바꾸기
    let at1_title1 = document.querySelector("#at1_title1");
    let at1_title2 = document.querySelector("#at1_title2");
    at1.style.backgroundSize="100% 100%";
    if(js == 3){   
        at1.style.background="url(img/product/main/bath/Bath_main2.jpg)";
        at1.style.backgroundSize="100% 100%";
        at1_title1.innerHTML="배쓰밤";
        at1_title2.innerHTML="찬란히 빛나는 물결에 부드럽게 몸을 맡겨 보세요";
    }
    else if(js == 4){    
        at1.style.background="url(img/product/main/shower/soap_main.jpg)"; 
        at1.style.backgroundSize="100% 100%";
        at1_title1.innerHTML="솝";
        at1_title2.innerHTML="향기를 머금은 거품으로 구석구석 꼼꼼하게";
    }
    else if(js == 5){    
        at1.style.background="url(img/product/main/shower/ShowerGel_main2.jpg)";  
        at1.style.backgroundSize="100% 100%";
        at1_title1.innerHTML="샤워 젤 & 젤리";
        at1_title2.innerHTML="행복한 하루를 위해 향긋한 기운을 불어 넣어 줄 시간";
    }
    else if(js == 6){   
        at1.style.background="url(img/product/main/face/cleanser1.jpg)"; 
        at1.style.backgroundSize="100% 100%";
        at1_title1.innerHTML="클렌저";
        at1_title2.innerHTML="당신에게 꼭 맞는 향기와 깨끗함만 남겨 드릴게요";
    }
    else if(js == 7){   
        at1.style.background="url(img/product/main/face/facemask_main1.jpg)";  
        at1.style.backgroundSize="100% 100%";
        at1_title1.innerHTML="페이스 마스크";
        at1_title2.innerHTML="하루 10분, 신선함을 채워주세요";
    }
    else if(js == 8){   
        at1.style.background="url(img/product/main/hair/hair_main1.jpg)";  
        at1.style.backgroundSize="100% 100%";
        at1_title1.innerHTML="샴푸바";
        at1_title2.innerHTML="환경을 생각한 다정한 마음과 풍성한 거품을 담았어요";
    }else{    
		at1.style.background="url(img/product/main/TopMain4.jpg)";  
        at1.style.backgroundSize="100% 100%";
        at1_title1.innerHTML="신선한 핸드메이드 화장품";
        at1_title2.innerHTML="Fresh Handmade Cosmetics";
	}

}
