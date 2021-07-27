$(function(){
    //푸터의 '미리보기' 클릭시 구독 연결
	$("#preview").on("click",function(){
		$(location).attr("href","subscription.html");
	});
});