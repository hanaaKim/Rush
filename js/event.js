const at4_titleA=["<콜페이스의 모든것> 선정자 발표",
				"<러쉬 향기 축제> 선정자 발표",
				"<5월> 포토 리뷰 이벤트 선정자 발표",
				"<찬란한 당신에게> 선정자 발표",
				"<3주만 엽니다, 러쉬 플라워 샵> 선정자 발표",
				"<4월> 포토 리뷰 이벤트 선정자 발표",
				"<러쉬 헤어 살롱> 이벤트 선정자 발표",
				"<3월> 포토 리뷰 이벤트 선정자 발표",];
const at4_dateA=["2021.06.10","2021.06.07","2021.06.02","2021.06.01",
				"2021.05.24","2021.05.10","2021.04.27","2021.04.02"];
const content_box_imgA=["img/event/ing/poster/img0.png",
		"img/event/ing/poster/img1.png",
		"img/event/ing/poster/img2.png",
		"img/event/ing/poster/img3.png",
		"img/event/ing/poster/img4.png",
		"img/event/ing/poster/img5.png",
		"img/event/ing/poster/img6.png",
		"img/event/ing/poster/img7.png"];
let i, size;
/*=====================함수===================*/
function page_func(js){
	$("html, body").stop().animate({"scrollTop":0},400);
    at5.style.display="none";
	at6.style.display="none";
    this["at"+js].style.display="block";
}
/*=====================제이쿼리===================*/ 
$(function(){

	var at2Btn = $(".at2_2 > .at2_2btn"); 
	at2Btn.eq(0).css("background","#e8e8e8");
	//각 페이지로 넘어가게
	at2Btn.click(function(){
		var target = $(this);
		var index = target.index(); //진행중:2, 게시판:2, 종료이벤트:4
		at2Btn.css("background","none");
		target.css("background","#e8e8e8"); //클릭한 버튼 배경 생기게
		$(".at").css("display","none"); //모든 아티클 다 안보이게 했다가
		if(index==0){
			$(".at3").css("display","block").css("width","1280px");
			$(".content_box").css("display","none");
			
		}
		else if(index==2){$(".at4").css("display","block");}
		else if(index==4){$(".at5").css("display","block");}
		else{}
	});
	
	/*진행중인 이벤트 각 이미지 클릭하면 살짝 밀리면서 
	오른쪽 여백공간에 각 게시물의 포스터 보이게 하기*/
	//진행중 이벤트 클릭하면 포스터 모두 넣기
	size=$(".content_box_img").length;
	for(i=0; i<size; i++){
		$(".content_box_img").eq(i).css("background","url("+content_box_imgA[i]+")").css("backgroundSize","100% 100%");
	}

	$(".content_img>li").click(function(){
		var index = $(this).index();

		$(".content_box").css("display","block"); //틀 자체를 안보이게 했다가 보이게 한후,		
		$(".content_box_img").css("display","none"); //모두 안보이게
		$(".content_box_img").eq(index).css("display","block"); //클릭한거만 보이게

		$(".content_box_close").css("display","block"); 
	})

	//content_box 닫기
	$(".content_box_close").click(function(e){
		e.preventDefault();
		$(".content_box").fadeOut();
		$(".content_box_close").css("display","none");
	})

	//종료된 이벤트
	$(".at5>.content_img>li").on("click",function(){	alert("이미 종료된 이벤트입니다.");})
	$(".at6>.content_img>li").on("click",function(){	alert("이미 종료된 이벤트입니다.");})
	
	//게시판 데이터 넣기
	size=$(".at4_title").length;
	for(i=0; i<size; i++){
		$(".at4_title").eq(i).html(at4_titleA[i]);
		$(".at4_date").eq(i).html(at4_dateA[i]);
	}
	
	//게시판 각 행 클릭하면 트리구조 메뉴로 열림
	$(".at4_submenu").hide(); //서브메뉴 안보이게하기
	
	$(".at4>ul>li>ul").on("click", function(){ //타이틀을 눌렀을 때
		$(".at4_submenu").slideUp(); //서브메뉴는 모두 안보이게
		
		if($(this).next().css("display")=="none"){ //클릭한 타이틀의 서브메뉴가 안보이면
			$(this).next().slideDown(); //슬라이드다운
		}else{
			$(this).next().slideUp(); //서브메뉴가 보이면 슬라이드업
		}
	
		 $(".at4>ul>li:gt(0)>ul").css("background", "white").css("color","black");
		 $(this).not(".at4_first_title").css({"background":"rgba(255, 240, 156, 0.2)", "color":"black"});
		//this = 클릭한 타이틀 / next = 다음에 나오는거
	});
	/*====================================================*/ 
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