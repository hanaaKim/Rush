//슬라이드 텍스트들
const at2_slide_nameA=["Mark Constanine","Mo Constantine","Roewna Bird","Helen Ambrosen","Liz Bennett"];
const at2_slide_textA=["CO-FOUNDER AND INVENTOR","CO-FOUNDER AND INVENTOR","CO-FOUNDER AND INVENTOR","CO-FOUNDER AND INVENTOR","CO-FOUNDER"];

let at2_cnt=0; //카운터 숫자
/*---------------------함수------------------*/
//at1 스크롤 애니메이션 주기
window.addEventListener("scroll",function(){

    //스크롤 하단의 위치 비율
    let scrollBottom = Math.round(($(window).height()+$(window).scrollTop()) /$("body").height()*100);
    
    
    if(scrollBottom<18){
       $(".at2_text1").css("opacity","0"); 
		
    }else if(scrollBottom>20 && scrollBottom<45){
		$(".at2_text1:eq(0)").css("opacity","1");
        $(".at2_text2 p").css("opacity","0");
		
	}else if(scrollBottom>48&& scrollBottom<55){
		$(".at2_text2 p:eq(0)").css("opacity","1");
        $(".at2_text2 p:eq(1)").css("opacity","1");
        $(".at2_text2 p:eq(2)").css("opacity","0");
		
    }else if(scrollBottom>55 && scrollBottom<60){
		$(".at2_text2>p:eq(2)").css("opacity","1");
		
	}else if(scrollBottom>69 &&scrollBottom<81){
		//숫자 자동 카운트 애니메이션
		countfunc();
		countfunc2();
		$(".at2_text1:eq(1)").css("opacity","0");
	}else {
		$(".at2_text1:eq(1)").css("opacity","1");
	}
	
	// console.log(scrollBottom); //세로 스크롤 바 위치 보기
    
});
/*--------jQuery---------------*/
$(function(){
    
    
    let i,no;
	//슬라이드 구현
	no = $(".at2_slide_img").length;
	//이미지 넣기
	for(i=0; i<no; i++){
        $(".at2_slide_img:eq("+i+")").css({"background":"url(img/history/img"+i+".jpg)"}).css({"backgroundSize":"100% 100%"});
        $(".at2_slide_name:eq("+i+")").html(at2_slide_nameA[i]);
		$(".at2_slide_text:eq("+i+")").html(at2_slide_textA[i]);
	}
    
    //슬라이드 오른쪽 화살표 버튼
    $(".right_btn").on("click",function(){
        $("#at2_slide").stop().animate({"left" : "-=100%"},700,function(){
			$("#at2_slide li:first").appendTo("#at2_slide");
			$("#at2_slide").css("left","+=100%");
			$(".at2_msg").css("display","none"); //클릭하면 클릭하라는 메세지 사라지게함
        });
    });
    
	
    /*===========================================*/
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
	
	
    //top버튼
    $(".topBtn i").click(function(){
        $("html, body").stop().animate({"scrollTop":0},400);
    });
    
});
/*===================함수======================*/
//숫자 카운트 함수
function countfunc(){
	let result = setInterval(count_0_func, 50);
	function count_0_func(){
		at2_cnt++;
		if(at2_cnt>25){
			clearInterval(result);
		}else{
			$(".number1").text(at2_cnt);
		}
	}
}

function countfunc2(){
	let result = setInterval(count_0_func, 50);
	function count_0_func(){
		at2_cnt++;
		if(at2_cnt>67){
			clearInterval(result);
		}else{
			$(".number2").text(at2_cnt+"%");
		}
	}
}