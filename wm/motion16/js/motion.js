var ag = setInterval("autoGallery()",3000);
function autoGallery(){
    $(".c1 ul:eq(0)").stop().animate({ marginLeft:"-100%" },function(){
           $(".c1 ul:eq(0) li:first").appendTo(".c1 ul:eq(0)");
           $(".c1 ul:eq(0)").css({ marginLeft:0 });
    });
};




$(function(){

   //header
   $("h1").css({  marginLeft:"-100px", opacity:0  });
   $("h1").animate({  marginLeft:0, opacity:1  },600);

   $(".gnb li").css({ marginTop:"-100px" });
   $(".gnb li:eq(0)").animate({ marginTop:0},200);
   $(".gnb li:eq(1)").animate({ marginTop:0},300);
   $(".gnb li:eq(2)").animate({ marginTop:0},400);
   $(".gnb li:eq(3)").animate({ marginTop:0},600);
   $(".gnb li:eq(4)").animate({ marginTop:0},700);
   $(".gnb li:eq(5)").animate({ marginTop:0},800);
   $(".gnb li:eq(6)").animate({ marginTop:0},900);

   $(".gnb li").mouseover(function(){
        $(".gnb li button").stop().animate({  padding:0 }, 200);
        $(this).children("button").stop().animate({ padding:"0 20px" }, 200);
   });

   /*
     ★ 원페이지(프로모션) 사이트의 핵심 기술
       홈페이지의 시작을 알리는 html태그
       홈페이지의 본문 구성 태그의 시작 body태그
       브라우저에 발생되는 스크롤바는 html,body 태그의 속성으로 처리 됩니다. 
       $("html,body").scrollTop();
   */

   //$("body").css({ overflow:"hidden"});  1.스크롤바 없는 쾌적한 환경  2.웹접근성위배(키보드조작 불가)
   $(".header_wrap").append("<p>test</p>");
   $(".header_wrap p:eq(1)").css({ marginRight:"30px" });

   $(".gnb li").click(function(){
      $("html,body").stop().animate({ scrollTop: 1000 * $(this).index()  });
      $(".header_wrap p:eq(1)").text( $("html,body").scrollTop()  );
   });


   //일반 함수 선언: 언제든 필요한 위치에 해당 함수명을 호출하고 매개변수를 전달하여 수행매서드에 변화를 줄 수 있습니다.   
   
   function sectionMotion(a){
         //1.각 섹션별 하위 자식요소 애니메이션 동작 관련 준비 조작 실행
         $("section:not(:eq("+a+")) .section_wrap h2").css({  marginTop:"200px", opacity:0 });
         $("section:not(:eq("+a+")) .section_wrap>p").css({  marginLeft:"200px", opacity:0 });
	   
         //2.전달된 매개변수값의 데이터를 토대로 함수 실행 애니메이션
         $("section:eq("+a+") .section_wrap h2").stop().animate({ marginTop:"100px", opacity:1 });	
	     $("section:eq("+a+") .section_wrap>p").stop().animate({ marginLeft:"30px", opacity:1 });	 
    };

   // 작업 브라우저창으로 부터 발생되는 스크롤 이벤트에 따른 애니메이션 구분
   $(window).scroll(function(){

        var sn = $("html,body").scrollTop(); 
        $(".header_wrap p:eq(1)").text( sn  );
        /*
           ★스크롤의 위치에 따른 함수 실행 범위
           c2 - 600, c3- 1600, c4- 2600 , c5 - 3600, c6- 4600,  c7- 5600
       */
        if( sn >600 && sn<1600){
              sectionMotion(1);
        }else if( sn>=1600 && sn<2600){
              sectionMotion(2);
		}else if( sn>=2600 && sn<3600){
              sectionMotion(3);
		}else if( sn>=3600 && sn<4600){
              sectionMotion(4);
		}else if( sn>=4600 && sn<5600){
              sectionMotion(5);
		}else{
			   sectionMotion(6);
		}



   });



   //c1(메인 슬로건 +이미지)
   $(".arrow_btn li:last").css({ display:"none", opacity:0, marginLeft:"-100px"  }); //1.플레이버튼 조작
   $(".arrow_btn li:eq(0)").click(function(){ 
          clearInterval(ag);
          $(".arrow_btn li:last").css({ display:"block"});
          $(".arrow_btn li:last").stop().animate({ opacity:1, marginLeft:0 });

           $(".c1 ul:eq(0) li:last").prependTo(".c1 ul:eq(0)");
           $(".c1 ul:eq(0)").css({ marginLeft:"-100%" });
          $(".c1 ul:eq(0)").stop().animate({ marginLeft:0 });
   });
   $(".arrow_btn li:eq(1)").click(function(){
          clearInterval(ag);
          $(".arrow_btn li:last").css({ display:"block"});
          $(".arrow_btn li:last").stop().animate({ opacity:1, marginLeft:0 });
          autoGallery();
   });

   $(".arrow_btn li:last").click(function(){
          clearInterval(ag);
          ag = setInterval("autoGallery()",3000);
          $(".arrow_btn li:last").stop().animate({ opacity:0, marginLeft: "-100px" },function(){
                $(".arrow_btn li:last").css({ display:"none"});
          });
   });


 	$(".c2 li").mouseover(function(){
		
		var a = $(this).index();
		
		$(".c2 li:not(:eq("+  a  +"))").stop().animate({  width: "100px"  });
		$(this).stop().animate({ width:"650px" });
		
		
	});	



});










