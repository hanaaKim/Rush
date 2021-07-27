/*---------------------함수------------------*/

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
	
    //top버튼
    $(".topBtn i").click(function(){
        $("html, body").stop().animate({"scrollTop":0},400);
    });


    //스크롤 애니메이션 주기
    window.addEventListener("scroll",function(){

        //스크롤 하단의 위치 비율
        let scrollTop = $(window).scrollTop();
        if(scrollTop>1500 && scrollTop<1900){
            $(".overlay_img:eq(2)").stop().animate({"opacity":"1"},300);
            $(".overlay_img:eq(1)").delay(300).stop().animate({"opacity":"1"},300);
            $(".overlay_img:eq(0)").delay(600).stop().animate({"opacity":"1"},300);
        }else{
            $(".overlay_img").css("opacity","0");
        }
        // console.log(scrollTop); //세로 스크롤 바 위치 보기
        
    });
   
});