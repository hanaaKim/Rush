const at3_combo_titleA=["현대백화점 압구정 본점","롯데백화점 영등포점",
	"롯데몰 수지점","롯데백화점 인천터미널점","현대백화점 판교점","현대백화점 충청점",
	"현대아울렛 송도점","현대백화점 디큐브시티점","마리오몰점","스타필드 고양점"
];
const at3_combo_boxA=["H_apgujoung","L_youngdungpo","L_suzi","L_incheon","H_pangyo",
	"H_chungcheng","H_songdo","H_dcuve","mario","star_goyang"];

const at3_combo_textA=["[ TIME ] 평일 10:30 ~ 20:00 | 주말 10:30 ~ 20:30",
						"[ TIME ] 평일 10:30 ~ 20:00 | 주말 10:30 ~ 20:30",
						"[ TIME ] 10:30 ~ 20:00",
						"[ TIME ] 평일 10:30 ~ 20:00 | 주말 10:30 ~ 20:30",
						"[ TIME ] 평일 10:30 ~ 20:00 | 주말 10:30 ~ 20:30",
						"[ TIME ] 평일 10:30 ~ 20:00 | 주말 10:30 ~ 21:00",
						"[ TIME ] 10:30 ~ 21:00",
						"[ TIME ] 평일 11:00 ~ 21:00 | 주말 11:00 ~ 21:30",
						"[ TIME ] 11:00 ~ 22:00",
						"[ TIME ] 10:00 ~ 22:00"];
const at3_combo_text2A=["[ TELL ] 02-3449-5187",
							"[ TELL ] 02-2164-5181",
							"[ TELL ] 031-5174-4135",
							"[ TELL ] 032-242-2552",
							"[ TELL ] 031-5170-1587",
							"[ TELL ] 043-909-4838",
							"[ TELL ] 032-727-2425",
							"[ TELL ] 02-2210-9762",
							"[ TELL ] 02-2067-3848",
							"[ TELL ] 031-5173-1050"];
const at3_combo_text3A=["[ ADDRESS ] 서울시 강남구 압구정로 165 현대백화점 지하 1층",
							"[ ADDRESS ] 서울시 영등포구 경인로 846 3층",
							"[ ADDRESS ] 경기 용인시 수지구 성복동 61-7 1층",
							"[ ADDRESS ] 인천광역시 남구 연남로 35 롯데백화점 5층",
							"[ ADDRESS ] 경기도 성남시 분당구 판교역로 146번길 20 현대백화점 5층",
							"[ ADDRESS ] 충청북도 청주시 흥덕구 직지대로 308 현대백화점 지하 1층",
							"[ ADDRESS ] 인천 연수구 송도국제대로 123 현대프리미엄아울렛 지하1층",
							"[ ADDRESS ] 서울 구로구 경인로 662 현대백화점 디큐브시티 B2",
							"[ ADDRESS ] 서울 금천구 벚꽃로 266 마리오아울렛 3관 1층",
							"[ ADDRESS ] 경기 고양시 덕양구 고양대로 1955 스타필드 고양1층"];
let num,i,size,no;
let fadeInterval;
/*----------------------------함수---------------------*/
function page_func(js){
    at3.style.display="none";
    at4.style.display="none";
    at5.style.display="none";
    this["at"+js].style.display="block";
}

//at3_콤보박스
function at3_combo(se){
	num = se.selectedIndex; //누른 번호값
	// console.log(num);
	 
	if(num==0){
		alert("장소를 선택하세요. 5초 뒤 자동으로 슬라이드가 시작됩니다!!:)");
		// console.log("start");
		$(".at3_combo_box:gt(0)").hide();
		$(".at3_combo_text:gt(0)").hide();
		$(".at3_combo_title:gt(0)").hide();
		current=0;
		fadeInterval = setInterval('fadefunc()',3000);

	}else{
		clearInterval(fadeInterval);
		// console.log("stop");

        //오른쪽 큰 박스
		$(".at3_combo_box").css("display","none");
        $(".at3_combo_box:eq("+(num-1)+")").css("display","block");
        $(".at3_combo_box:eq("+(num-1)+")").css("background","url(img/store/"+at3_combo_boxA[num-1]+")")
        .css("backgroundSize","100% 100%");
        
        //장소명
		$(".at3_combo_title").css("display","none");
        $(".at3_combo_title:eq("+(num-1)+")").css("display","block");
        $(".at3_combo_title:eq("+(num-1)+")").html(at3_combo_titleA[num-1]);
        
		//상세정보
		$(".at3_combo_text").css("display","none");
        $(".at3_combo_text:eq("+(num-1)+")").css("display","block");
        $(".at3_combo_text:eq("+(num-1)+")").html(at3_combo_textA[num-1]+"<br>"+at3_combo_text2A[num-1]+"<br>"+at3_combo_text3A[num-1]);
  
    }
	
}

let current=0;
function fadefunc(){
	let next = (current+1)%size;
	$(".at3_combo_box").eq(current).fadeOut();
	$(".at3_combo_box").eq(next).fadeIn();
	$(".at3_combo_text").eq(current).hide();
	$(".at3_combo_text").eq(next).show();
	$(".at3_combo_title").eq(current).hide();
	$(".at3_combo_title").eq(next).show();
	
	current=next;
}
/*----------------------------jQuery---------------------*/
$(function(){
	//fade를 위해서 일단 사진과 텍스트 다 넣어놓기
	size=$(".at3_combo_box").length;
	for(i=0; i<size;i++){
		$(".at3_combo_box:eq("+i+")").css("background","url(img/store/"+at3_combo_boxA[i]+")")
		.css("backgroundSize","100% 100%");

		$(".at3_combo_text:eq("+i+")").html(at3_combo_textA[i]+"<br>"
		+at3_combo_text2A[i]+"<br>"+at3_combo_text3A[i]);

		$(".at3_combo_title:eq("+i+")").html(at3_combo_titleA[i]);
	}
	
	//장소사진 및 텍스트 fade, interval
	$(".at3_combo_box:gt(0)").hide();
	$(".at3_combo_text:gt(0)").hide();
	$(".at3_combo_title:gt(0)").hide();
	fadeInterval = setInterval('fadefunc()',2000);
	/*===========================================================*/
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