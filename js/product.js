let i,size,no;
//at2_1번위치 슬라이드 
let timer=setInterval("show()",2000); 

//at11_info 데이터 배열들
const at11_nameA=["그루비 카인드 오브 러브","인터갈락틱","마쉬멜로우 월드","멜리진","피치","섹스 밤","템플 오브 더 스카이","더 컴포터",
					"카마","보헤미안","아웃백 메이트","로즈 아르간","레몬 제스트","슬리피","샌드스톤","씨 베지터블",
					"더 올리브 브랜치","해피 해피","트와일라잇 100g/240g","로즈 잼 100g/250g/500g","슬리피","허니 아이 워시드 더 키즈","더티 스프링워시","후쉬 100g/240g",
					"렛 더 굿 타임즈 롤","아쿠아 마리나 100g/250g","오션 솔트 120g/250g","콜페이스","허벌리즘 100g/250g","다크 엔젤스 100g/250g","엔젤스 온 베어 스킨","울트라 플랜트",
					"뷰티 슬립 125g/315g","카타스트로피 코스메틱","컵 오 커피 130g/325g","돈트 룩 앳 미","비비 씨워드","오티픽스","마스크 오브 매그너민티","로지 칙스",
					"엔젤 헤어","플라이웨이 헤어","몬탈바노","속 앤 플롯","씨닉","뉴","코코넛 라이스 케이크","제이슨 앤 더 아르간 오일"
				];
const at11_hashTagA=["#배쓰밤 #로즈우드와일랑일랑","#배쓰밤 #환상적인우주느낌","#배쓰밤 #사탕가게에온듯한","#배쓰밤 #해초의부드러움","#복숭아배쓰밤 #핑크빛입욕제","#섹시한밤 #일랑일랑꽃","#배쓰밤 #레몬과오렌지","#이불처럼포근 #달콤함에퐁당",
					"#오래도록사랑받는 #카마마니아","#레몬오일 #상틈함충전완료","#솝 #숲속에온듯청량한향기","#진짜장미향기 #기품넘치는향기","#솝 #레몬껍질이송송","#라벤더솝 #편안한휴식이필요한날","#고운모래 #스크럽도같이","#솝 #바다의청량함을그대로",
					"#오일듬뿍샤워젤 #보습샤워시작","#싱그러운자몽 #시트러스마니아","#샤워젤리 #라벤더의굿나잇인사","#꽃다발대신 #장미샤워","#샤워젤 #이름처럼편안한라벤더","#꿀샤워젤 #신선한꿀이뚝뚝","#꾸준히사랑받는 #상쾌시원샤워","#샤워젤리 #말랑말랑풍성한거품",
					"#프레쉬클렌저 #팝콘향기 #촉촉","#프레쉬클렌저 #해초세안","#스크럽 #소금의건강한에너지","#유명한숯비누 #바로그제품","#클렌저 #부드러운아침세안","#프레쉬클렌저 #숯세안","#산뜻한마무리 #스크럽도함께","#클렌저 #싱그러운오렌지워터",
					"#아름다움의비결 #골저스한영양","#블루베리의촉촉함 #슈퍼푸드","#페이스엔보디마스크 #그윽한커피","#상큼한레몬팩 #쌀알갱이","#장미의촉촉함 #해초팩 #건강피부","#바나나영양 #촉촉피부","#꿀의촉촉함 #데일리팩 #민트","#장미꽃잎을우려낸 #장미팩",
					"#고체샴푸 #부드러운머릿결","#소금샴푸바 #볼륨업","#레몬샴푸바 #두피까지산뜻하게","#샴푸바 #두피케어의모든것","#샴푸바 #바닷소금듬뿍","#착한고체샴푸 #뿌리튼튼","#영양이필요한모발 #코코넛가득","#샴푸바 #아르간오일듬뿍"
				];
const at11_priceA=["19000","17000","19000","19000","17000","12000","18000","15000",
					"13000","9000","11000","22000","14000","13000","10000","10000",
					"17000","16000","15000","19000","19000","17000","17000","13000",
					"22000","22000","27000","18000","22000","22000","22000","33000",
					"28000","25000","18000","25000","25000","25000","20000","25000",
					"16000","18500","15500","14200","17000","22000","21000","18000"
				];

window.onload = function(){
    
    /*==============================='전체'-이미지===============================*/
	//1번 위치
	size = $(".at2_slideImg").length;
	for(i=0; i<size; i++){
        $(".at2_slideImg").eq(i).css("background","url(img/product/total/img1-"+i+".jpg)")
		.css("backgroundSize","100% 100%");
	}

	//2번~9번까지 첫번째 이미지 넣기
	size = $(".at2_img").length;
	for(i=1;i<size;i++){
		$(".at2_img:eq("+i+")").css("background","url(img/product/total/img"+(i+1)+"-0.jpg)")
		.css("backgroundSize","100% 100%");
	}

	//2번 효과
	$(".at2_img:eq(1)").hover(function(){
		$(this).css("background","url(img/product/total/img2-1.jpg)").css("transition","all 0.8s");
	},function(){
		$(this).css("background","url(img/product/total/img2-0.jpg)");
	});

	//3번
	$(".at2_img:eq(2)").hover(function(){
		$(this).css("background","url(img/product/total/img3-1.jpg)").css("transition","all 0.8s");
	},function(){
		$(this).css("background","url(img/product/total/img3-0.jpg)");
	});
	
	//4번
	$(".at2_img:eq(3)").hover(function(){
		$(this).css("background","url(img/product/total/img4-1.jpg)").css("transition","all 0.8s");
	},function(){
		$(this).css("background","url(img/product/total/img4-0.jpg)");
	});

	//5번
	$(".at2_img:eq(4)").hover(function(){
		$(this).css("opacity","0.7").css("transition","all 0.5s")
		.html("<center><span style='line-height:500px; font-size:40px; font-weight:bold; '>Soap Bar</span></center>");
	},function(){
		$(this).css("opacity","1").html("");
	});
	
	//6번
	$(".at2_img:eq(5)").hover(function(){
		$(this).css("background","url(img/product/total/img6-1.jpg)").css("transition","all 0.8s");
	},function(){
		$(this).css("background","url(img/product/total/img6-0.jpg)");
	});

	//7번
	$(".at2_img:eq(6)").hover(function(){
		$(this).css("opacity","0.7").css("transition","all 0.5s")
		.html("<center><span style='line-height:300px; font-size:40px; font-weight:bold; color:white;'>Face Mask</span></center>");
	},function(){
		$(this).css("opacity","1").html("");
	});

	//8번
	$(".at2_img:eq(7)").hover(function(){
		$(this).css("background","url(img/product/total/img8-1.jpg)").css("transition","all 0.8s");
	},function(){
		$(this).css("background","url(img/product/total/img8-0.jpg)");
	});

	//9번
	$(".at2_img:eq(8)").hover(function(){
		$(this).css("opacity","0.7").css("transition","all 0.5s")
		.html("<center><span style='line-height:300px; font-size:40px; font-weight:bold; color:white;'>Fresh Handmade<br>Cosmetics</span></center>");
	},function(){
		$(this).css("opacity","1").html("");
	});


	/*============================서브메뉴 각 이미지 넣기============================*/
	let at3_4img = document.getElementsByClassName("at3_4img");
    //Bath&shower - bathbomb이미지
    for(i=0; i<=7; i++){
        at3_4img[i].style.background="url(img/product/bath/img"+i+"-0.jpg)";
		at3_4img[i].style.backgroundSize="100% 100%";
	}
    
    //Bath&shower - Soap이미지
    for(i=8; i<=15; i++){
        at3_4img[i].style.background="url(img/product/shower/soap/img"+i+"-0.jpg)";
		at3_4img[i].style.backgroundSize="100% 100%";
	}
    
    //Bath&shower - Showerjell이미지
    for(i=16; i<=22; i++){
        at3_4img[i].style.background="url(img/product/shower/gels/img"+i+"-0.jpg)";
		at3_4img[i].style.backgroundSize="100% 100%";
	}
    
    at3_4img[23].style.background="url(img/product/shower/gels/whoosh-0.gif)";
    at3_4img[23].style.backgroundSize="100% 100%";
    
    //Face - cleanser이미지
    for(i=24; i<=31; i++){
        at3_4img[i].style.background="url(img/product/face/cleanser/img"+i+"-0.jpg)";
		at3_4img[i].style.backgroundSize="100% 100%";
	}
    
    //Face - Face Mask이미지
    for(i=32; i<=39; i++){
        at3_4img[i].style.background="url(img/product/face/mask/img"+i+"-0.jpg)";
		at3_4img[i].style.backgroundSize="100% 100%";
	}
    
    //Hair - Shampoo Bar이미지
    for(i=40; i<=47; i++){
        at3_4img[i].style.background="url(img/product/hair/img"+i+"-0.jpg)";
		at3_4img[i].style.backgroundSize="100% 100%";
	}
    
    
}
/*--------------------------함수---------------------------*/
function show(){ //at2_1번 위치 슬라이드 함수
	$(".at2_slideList").stop().animate({"left" : "-=100%"},1000,function(){
			$(".at2_slideList li:first").appendTo(".at2_slideList");
			$(".at2_slideList").css("left","+=100%");
		}
	);
}
/*--------------------------JQuery---------------------------*/
$(function(){
    let no; //인덱스, 몇번째인지 숫자 저장 변수
	
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
	/*=================================================================*/
	//제품 부분
	
	$(".at3_4img").on("click",function(){
		no=$(".at3_4img").index(this); //모든 at3_4img클래스의 인덱스 구하기

		//제품사진 클릭하면 확대보기 레이어 나옴
		$(".at11").show();
		
		if(no<=7){
			//bath bomds
			for(i=0; i<3;i++){
				// 큰 박스
				$(".at11_slide li:eq("+i+")").css("background","url(img/product/bath/img"+no+"-"+i+".jpg)").css("backgroundSize","100% 100%");
				//작은박스
				$(".at11_smallBox li:eq("+i+")").css("background","url(img/product/bath/img"+no+"-"+i+".jpg)").css("backgroundSize","100% 100%");
			}
		}else if(no>=8 && no<=15){
			//soap
			for(i=0; i<3;i++){
				// 큰 박스
				$(".at11_slide li:eq("+i+")").css("background","url(img/product/shower/soap/img"+no+"-"+i+".jpg)").css("backgroundSize","100% 100%");
				//작은박스
				$(".at11_smallBox li:eq("+i+")").css("background","url(img/product/shower/soap/img"+no+"-"+i+".jpg)").css("backgroundSize","100% 100%");
			}
		}else if(no>=16 && no<=22){
			//shower jell
			for(i=0; i<3;i++){
				// 큰 박스
				$(".at11_slide li:eq("+i+")").css("background","url(img/product/shower/gels/img"+no+"-"+i+".jpg)").css("backgroundSize","100% 100%");
				//작은박스
				$(".at11_smallBox li:eq("+i+")").css("background","url(img/product/shower/gels/img"+no+"-"+i+".jpg)").css("backgroundSize","100% 100%");
			}
		}else if(no==23){
			//움직이는 젤리
			// 큰 박스
			$(".at11_slide li:eq(0)").css("background","url(img/product/shower/gels/whoosh-0.gif)").css("backgroundSize","100% 100%");
			// 작은박스
			$(".at11_smallBox li:eq(0)").css("background","url(img/product/shower/gels/whoosh-0.gif)").css("backgroundSize","100% 100%");

			for(i=1; i<3;i++){
				// 큰 박스
				$(".at11_slide li:eq("+i+")").css("background","url(img/product/shower/gels/whoosh-"+i+".jpg)").css("backgroundSize","100% 100%");
				//작은박스
				$(".at11_smallBox li:eq("+i+")").css("background","url(img/product/shower/gels/whoosh-"+i+".jpg)").css("backgroundSize","100% 100%");
			}
		}else if(no>=24 && no<=31){
			//cleanser
			for(i=0; i<3;i++){
				// 큰 박스
				$(".at11_slide li:eq("+i+")").css("background","url(img/product/face/cleanser/img"+no+"-"+i+".jpg)").css("backgroundSize","100% 100%");
				//작은박스
				$(".at11_smallBox li:eq("+i+")").css("background","url(img/product/face/cleanser/img"+no+"-"+i+".jpg)").css("backgroundSize","100% 100%");
			}

		}else if(no>=32 && no<=39){
			//마스크
			for(i=0; i<3;i++){
				// 큰 박스
				$(".at11_slide li:eq("+i+")").css("background","url(img/product/face/mask/img"+no+"-"+(i+1)+".jpg)").css("backgroundSize","100% 100%");
				//작은박스
				$(".at11_smallBox li:eq("+i+")").css("background","url(img/product/face/mask/img"+no+"-"+(i+1)+".jpg)").css("backgroundSize","100% 100%");
			}

		}else if(no>=40 && no<=47){
			//헤어
			$(".at11_slide li:eq(0)").css("background","url(img/product/hair/img"+no+"-0.jpg)")
			.css("backgroundSize","100% 100%");

			for(i=0; i<3;i++){
				// 큰 박스
				$(".at11_slide li:eq("+i+")").css("background","url(img/product/hair/img"+no+"-"+i+".jpg)").css("backgroundSize","100% 100%");
				//작은박스
				$(".at11_smallBox li:eq("+i+")").css("background","url(img/product/hair/img"+no+"-"+i+".jpg)").css("backgroundSize","100% 100%");
			}
		}
	
	
		//1.제품이름
		$(".at11_name").html(at11_nameA[no]);

		//2.해쉬태그
		$(".at11_hashTag").html(at11_hashTagA[no]);

		//3.판매가
		$(".at11_price").html('&#8361;'+at11_priceA[no]);

		//4.구매수량 클릭시 숫자 변하게하기
		var initial_countValue= 1;
		$(".at11_count_value").html(initial_countValue); //1
		var countValue = initial_countValue; //1

		//총 합을 위해 변수저장
		var priceValue= at11_priceA[no]; //판매가	
		var totalValue; //총합계 = priceValue * countValue

		//5.구매수량에 따라 총 합계 변화
		$(".at11_total").html('&#8361;'+priceValue); //초기 총 합계금액은 판매가와 동일
		

		$(".at11_minus").click(function(){
			countValue--;
			totalValue=priceValue*countValue;
			if(countValue<1){
				countValue=1;
				$(".at11_count_value").html(countValue);
				alert("최소 1개 이상 선택해주세요!");
			}else{
				$(".at11_count_value").html(countValue);
				$(".at11_total").html('&#8361;'+totalValue);
			}
		})

		$(".at11_plus").click(function(){
			countValue++;
			totalValue=priceValue*countValue;
			if(countValue<11){
				$(".at11_count_value").html(countValue);
				$(".at11_total").html('&#8361;'+totalValue);
			}else{
				countValue=10;
				$(".at11_count_value").html(countValue);
				alert("1인당 한 제품 최대 10개까지만 구입가능합니다.");
			}
			
		})

		//닫기 (initail 값이 전달되야되서 같은 함수안에 있어야함)
		$(".close").on("click", function(e){
			e.preventDefault();
			$(".at11").hide();

			countValue = initial_countValue; //닫으면 countValue값을 1로 초기화
			//슬라이드 위치 초기화
			$(".at11_slide").css("left","0");
			at11_position=350;  at11_count=0;
			//작은 박스 테두리 초기화
			$(".at11_smallBox li").css("border","none");
			$(".at11_smallBox li").eq(0).css("border","4px solid #333");
		});
		
		//주문하기
		//alert창이 중복되서 무조건 한번만 실행되도록 one() 사용!
		$(".at11_orderBtn").one("click",function(){
			
			$(".at11").hide();

			countValue = initial_countValue; //닫으면 countValue값을 1로 초기화
			//슬라이드 위치 초기화
			$(".at11_slide").css("left","0");
			at11_position=350;  at11_count=0;
			//작은 박스 테두리 초기화
			$(".at11_smallBox li").css("border","none");
			$(".at11_smallBox li").eq(0).css("border","4px solid #333");

			alert(at11_nameA[no]+" 주문 완료 되었습니다!");
		});
		
	});
	
	//서브카테고리 설정
	$(".vegan").css("background","#2a8147");
	$(".new").css("background","orange");
	$(".local").css("background","blue");
	$(".out").css("background","gray");

	//슬라이드에 필요한 변수
	let at11_position=350; //=width값과 동일
	let at11_count=0; //슬라이드,클릭했을 때 카운트값
	//작은박스 테두리 초기설정 
	$(".at11_smallBox li").css("border","none");
	$(".at11_smallBox li").eq(0).css("border","4px solid #333");

	//슬라이드 - 오른쪽 버튼
	$("#at11_right_btn").on("click",function(){ //오른쪽 화살표 클릭시
		size = $(".at11_slide li").length;
		if(at11_count<size-1){
			at11_position=350;
			at11_count++;

			at11_position = -at11_position*at11_count;
			$(".at11_slide").stop().animate({"left":at11_position+"px"},400);
			$(".at11_smallBox li").css("border","none");
			$(".at11_smallBox li").eq(at11_count).css("border","4px solid #333");
		}else{	alert("더이상 그림이 없습니다.");	}
	});

	//슬라이드 - 왼쪽 버튼
	$("#at11_left_btn").on("click",function(){ //왼쪽 화살표 클릭시
		if(at11_count>0){
			at11_position=350;
			at11_count--;
		
			at11_position = -at11_position*at11_count;
			$(".at11_slide").stop().animate({"left":at11_position+"px"},400);
			$(".at11_smallBox li").css("border","none");
			$(".at11_smallBox li").eq(at11_count).css("border","4px solid #975dba");
			
		}else{	alert("더이상 그림이 없습니다.");	}
	});

	//제품이름 스타일
	$(".at11_name").css({"font-size":"25px"},{"font-weight":"bold"});


})
/*--------------------------함수 선언---------------------------*/

function page_func(js){
    for(i=2; i<=8; i++){ this["at"+i].style.display="none"; }
    this["at"+js].style.display="block";
	// console.log(js);
    
    //상단 메인 이미지 바꾸기
    let at1 = document.querySelector("#at1");

    //상단 텍스트 바꾸기
    let at1_title1 = document.querySelector("#at1_title1");
    let at1_title2 = document.querySelector("#at1_title2");
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
