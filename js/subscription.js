const at2_slide_titleA=["비건이 먹고 사는 즐거움!","플라스틱 용기는 없지만, 용기 넘치는 모발은 있죠","지구도 나도 예뻐지는 '블랙팟의 환생'?!"];
const at2_slide_textA=[
    "코로나 19가 장기화되면서 환경과 공존에 대한 가치가 높아지고 있습니다. 특히 MZ 세대를 중심으로 신념과 가치관에 따라 소비하는 윤리 소비, 미닝아웃이 소비 트렌드로 자리잡으면서, 비거니즘의 열풍도 계속되고 있습니다. 나의 한 끼가 더 나은 세상을 만드는데 도움을 줄 수 있다면, 오늘 한 끼 정도는 기꺼이 비건식이나 채식 지향으로 바꿔보는 건 어떨까요?",
    "작지만 완벽한 러쉬 샴푸 바는 플라스틱 쓰레기를 줄이기 위해 탄생한 네이키드 제품으로 2019년 한해에만 660만 개에 달하는 샴푸 바가 판매되며, 약1,900만 개 이상의 플라스틱 샴푸병을 줄였답니다. 특히 러쉬 스테디셀러인 '뉴' 샴푸바 제품이 새겨진 #BeCrueltyFree 슬로건은 동물실험을 하지않고, 반대하는 이념을 고스란히 담고있기도 합니다.",
    "블랙 팟(Black Pot)이란 재활용된 플라스틱 PP로 만들어진 검은색 용기를 말해요. '블랙 팟의 환생'은 사용한 블랙 팟 5개를 러쉬베스트 제품인 프레쉬 마스크로 교환해주고, 다시 재활용하는 선순환을 만드는 캠페인입니다. 집에서 사용한 블랙팟이 모두 모였다고요? 그렇다면 신선한 과일과 채소, 에센셜 오일이 듬뿍 담긴 프레쉬 마스크를 고를 일만 남았네요!"];
$(function(){
    let i, size;
    
	size = $(".at2_img>li").length;
	//이미지, 텍스트 넣기
	for(i=0; i<size; i++){
        $(".at2_img li:eq("+i+")").css({"background":"url(img/subscription/img"+i+".jpg)"})
                                    .css({"backgroundSize":"100% 100%"});
        $(".at2_title li:eq("+i+")").html(at2_slide_titleA[i]);
        $(".at2_text li:eq("+i+")").html(at2_slide_textA[i]);
	}
    
    let at2_position;
	let at2_count=0;
	let no = 0;

	//슬라이드 구현
	$(".at2_btn3 li:eq(0)").css("background","black").css("color","white");
    //숫자버튼 누르면 이미지 슬라이드
	$(".at2_btn3 li").on("click",function(){
		at2_position=600;
		no=$(this).index();
		at2_count=no;
		at2_position = at2_position*no;

		$(".at2_img").stop().animate({"left":-at2_position+"px"},500);
        $(".at2_title").stop().animate({"left":-at2_position+"px"},500);
        $(".at2_text").stop().animate({"left":-at2_position+"px"},500);
		//클릭한 거 색깔 바꾸기
		$(".at2_btn3 li").css("background","rgba(255,255,255,0.5)").css("color","black");
		$(this).css("background","black").css("color","white");
	});

    //오른쪽 버튼
	$(".at2_right").on("click",function(){
		if(at2_count<size-1){
			at2_position=600;
			at2_count++;
			no=at2_count;
			at2_position = at2_position*at2_count;
			$(".at2_img").stop().animate({"left":-at2_position+"px"},500);
			$(".at2_title").stop().animate({"left":-at2_position+"px"},500);
            $(".at2_text").stop().animate({"left":-at2_position+"px"},500);
			
			//클릭한 거 색깔 바꾸기
			$(".at2_btn3 li").css("background","#ccc").css("color","black");
			$(".at2_btn3 li:eq("+at2_count+")").css("background","black").css("color","white");
		}else{
			alert("더이상 그림이 없습니다.");
		}
	});

    //왼쪽 버튼
	$(".at2_left").on("click",function(){
		if(at2_count>0){
			at2_position=600;
			at2_count--;
			no=at2_count;
			at2_position = at2_position*at2_count;
			$(".at2_img").stop().animate({"left":-at2_position+"px"},500);
            $(".at2_title").stop().animate({"left":-at2_position+"px"},500);
            $(".at2_text").stop().animate({"left":-at2_position+"px"},500);
			
			// //클릭한 거 색깔 바꾸기
			$(".at2_btn3 li").css("background","#ccc").css("color","black");
			$(".at2_btn3 li:eq("+at2_count+")").css("background","black").css("color","white");
		}else{
			alert("더이상 그림이 없습니다.");
		}
	});

    //상단 '구독하기' 버튼 클릭시 팝업창
    var email_check =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    $(".at1_btn").click(function(){
        var emailValue=$("#email").val();
        if(!emailValue){
            alert("이메일을 입력하세요");
        }else{
            if(!email_check.test(emailValue)){  alert("이메일을 형식에 맞게 입력해주세요.");    }
            else{  $(".layer_bg").show();   }
        }
        
    })

    $(".ok_btn").click(function(){
        $(".layer_bg").hide();
    })
    /*=================================================*/ 
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
	
	
});