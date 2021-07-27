
//슬라이드 텍스트들
const at2_slide_dateA=["1995 - 2021","1995","1996","1999","2001","2002","2003","2004","2006","2009"];
const at2_slide_titleA=["Over 25 years of Lush","Lush opens its doors on Poole High Street, UK","We Believe statement written","A Lush bath bomb is exhibited in the Tate Art Gallery","First Lush patent granted - for Bubble Bars","The Queen accepts a Street Party bath bomb","B Never Too Busy To Be Beautiful opened its doors","Number 10 in The Sunday Times' Best Companies To Work For","Lush dumps 2 tonnes of manure at European Parliament","Lush lauched Charity Pot, Knot Wraps and the Black Pot scheme"];

//이미지 슬라이드 함수
let timer=setInterval("show()",3000); 

/*---------------------함수------------------*/
//at1 스크롤 애니메이션 주기
window.addEventListener("scroll",function(){

    //스크롤 하단의 위치 비율
    let scrollBottom = Math.round(($(window).height()+$(window).scrollTop()) /$("body").height()*100);
    if(scrollBottom<35){
       $(".at1_content1").css("opacity","0").css("top","250px"); //35보다 작을때는 안보이게 하기
    }else{
		$(".at1_content1:eq(0)").css("opacity","1").css("top","50px");
		$(".at1_content1:eq(1)").css("opacity","1").css("top","150px");
		$(".at1_content1:eq(2)").css("opacity","1").css("top","20px");
		$(".at1_content1:eq(3)").css("opacity","1").css("top","150px");
	}
	// console.log(scrollBottom); //세로 스크롤 바 위치 보기
    
});

function func(js){
    at1.style.display="none";
    at2.style.display="none";
    at3.style.display="none";
    at4.style.display="none";
    at5.style.display="none";

    this["at"+js].style.display="block";
}

function show(){
	$("#at2_slide").stop().animate({"left" : "-=20%"},1000,function(){
			$("#at2_slide li:first").appendTo("#at2_slide");
			$("#at2_slide").css("left","+=20%");
		}
	);
}

/*---------------------jQuery------------------*/
$(function(){
    //menu 연결
	$("#menu_icon").click(function(e){
        e.preventDefault();
		$('#main2').load('menu.html', function(e){
            e.preventDefault;
			$(this).css("z-index","100");
			$(this).hide().slideDown();
		})
	});

    //footer 연결
	$(".footer").load('footer.html');

	
	//btn1에 러쉬이야기 연결
	$("#btn1").on("click",function(){
		$(location).attr("href","story.html");
	});
	
	//btn2에 러쉬역사 연결
	$("#btn2").on("click",function(){
		$(location).attr("href","history.html");
	});
	
	//btn3에 이념과 가치 연결
	$("#btn3").on("click",function(){
		$(location).attr("href","believe.html");
	});
    
    //top버튼
    $(".topBtn i").click(function(){
        $("html, body").stop().animate({"scrollTop":0},400);
    });
	/*--------------------------------------------------------------------*/
	let i,no;
	//at1 이미지 및 텍스트 넣기
	no=$(".at1_img").length;
	for(i=0; i<no; i++){
        $(".at1_img:eq("+i+")>div").css({"background":"url(img/content1/img"+i+".jpg)"})
								.css({"backgroundSize":"100% 100%"});							  
	}
	
	//슬라이드
	no = $(".at2_slide_img").length;
	//이미지 넣기
	for(i=0; i<no; i++){
        $(".at2_slide_img:eq("+i+")").css({"background":"url(img/content2/img"+i+".jpg)"})
										  .css({opacity:0.7});
	    $(".at2_slide_date:eq("+i+")").html(at2_slide_dateA[i]);
		$(".at2_slide_title:eq("+i+")").html(at2_slide_titleA[i]);
	}
	
    //슬라이드 마우스 호버시 중지, 마우스 아웃 재시작
    $("#at2_slide").on({
        mouseenter:function(){
            clearInterval(timer);
            console.log("stop")
        },
        mouseleave:function(){
            timer=setInterval("show()",3000); 
            console.log("play")
        }

    });

	//at1 이미지 호버시 확대효과
	$(".at1_img>div").hover(function(){
		$(this).css("transform","scale(1.15)");
		
	},function(){
		$(this).css("transform","scale(1)");
		
	});
	
	/*-------------------at4 서브 메뉴--------------------------*/
	//서브메뉴에 호버했을 때 움직이기
    $(".at4_menu>li").hover(
        function(){
            $(this).css("left","-10px");
        }
        ,function(){
            $(this).css("left","-30px");
        }
    );
	
    
    $(".at4_menu>li").on("click",function(){
        //클릭했을 때 배경색 넣기
        $(".at4_menu li").css("background","white").css("color","black");
        $(this).css("background","linear-gradient(45deg, #ddc2ff, #8161AB").css("color","white");
        
        
        //해당 컨텐츠 박스 나오기
        let no = $(this).index();
        $(".at4_box").css("display","none");
		$("#at4_box"+no).css("display","block");
        
        //신선한 핸드메이드
        if($("#at4_box0").css("display")=="none"){
             $("#at4_box0 ul li").css("opacity","0");
        }else if($("#at4_box0").css("display")=="block"){
             $("#at4_box0 ul li").css("opacity","1");
        }
        //no 포장
        if($("#at4_box1").css("display")=="none"){
             $("#at4_box1 ul li").stop().animate({"top":"-20px"},500); 
        }else if($("#at4_box1").css("display")=="block"){
             $("#at4_box1 ul li").stop().animate({"top":"0px"},500); 
        }
        
        //no 광고
        if($("#at4_box2").css("display")=="none"){
             $("#at4_box2 ul li:eq(0)").css("left","-55%");
             $("#at4_box2 ul li:eq(1)").css("left","55%");
        }else if($("#at4_box2").css("display")=="block"){
             $("#at4_box2 ul li:eq(0)").animate({"left":"0"},300);
             $("#at4_box2 ul li:eq(1)").delay(200).animate({"left":"0"},300);
        }
        
        //오감블랜딩
        if($("#at4_box3").css("display")=="none"){
            $("#at4_box3 ul li:eq(0)").find("div").show().animate({"top":"-170px"},400); 
            $("#at4_box3 ul li:eq(2)").find("div").show().animate({"top":"-170px"},400); 
            $("#at4_box3 ul li:eq(4)").find("div").show().animate({"top":"-170px"},400); 
            $("#at4_box3 ul li:eq(1)").find("div").show().animate({"top":"0"},400); $("#at4_box3 ul li:eq(3)").find("div").show().animate({"top":"0"},400); 
            
        }else if($("#at4_box3").css("display")=="block"){
            $("#at4_box3 ul li:eq(0)").find("div").show().animate({"top":"-190px"},400); 
            $("#at4_box3 ul li:eq(2)").find("div").show().animate({"top":"-190px"},400); 
            $("#at4_box3 ul li:eq(4)").find("div").show().animate({"top":"-190px"},400); 
            $("#at4_box3 ul li:eq(1)").find("div").show().animate({"top":"20px"},400); $("#at4_box3 ul li:eq(3)").find("div").show().animate({"top":"20px"},400); 
        }
	});
    
    /*--------------------신선한 핸드메이드--------------------*/
    for(i=0; i<2;i++){
        $("#at4_box0 ul li:eq("+i+")").css("background","url(img/content3/img"+i+".jpg)")
                                    .css("backgroundSize","100% 100%").css("border-radius","15px");
         $("#at4_box0 ul li:eq(0)").css("border","1px solid #ccc");
        
    }
    
    /*----------------no 포장 이미지 넣기----------------------*/
    for(i=0; i<4;i++){
        $("#at4_box1 ul li:eq("+i+")").css("background","url(img/content3/img"+(i+2)+".jpg)")
                                    .css("backgroundSize","100% 100%");
         $("#at4_box1 ul li:eq(2)").css("border","1px solid #ccc");
    }
    
    $("#at4_box1 ul li").hover(function(){
       $(this).stop().animate({"top":"-20px"},500); 
    }, function(){
        $(this).stop().animate({"top":"0px"},500); 
    });
    
    /*----------------no 광고----------------------*/
    for(i=0; i<2;i++){
        $("#at4_box2 ul li:eq("+i+")").css("background","url(img/content3/img"+(i+7)+".jpg)").css("backgroundSize","100% 100%");
    }


    
    
    
    
    
    
    
    
    
});//제이쿼리 끝