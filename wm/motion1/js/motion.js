$(function(){//1.body내에 모든 태그를 로딩 완료 이후 실행

    /*
        마크업언(html)의 3요소
        
        <태그     속성="속성값">   정보요소   </태그>
        -------  ------------  ----------
        기초요소    속성요소       실체요소
    
    
     
        실체요소 변경: text("변경텍스트");
        실체요소 가져요소:  text();

        실체요소(태그포함) 변경:   html("<태그>변경 텍스트</태그>");
        실체요소(태그포함) 가져오기:  html();
        ------------------------------------------
        
        기초요소 추가        
        prepend(); 선택자의 자식추가(첫째)
        append();  선택자의 자식추가(막내)
        before();  선택자의 형제태그(형님)
        after();   선택자의 형제태그(동생)
        
        기초요소 이동        
        $("이동할 대상 선택자").prependTo("받는 위치의 선택자");  
        $("이동할 대상 선택자").appendTo("받는 위치의 선택자");
        $("이동할 대상 선택자").insertBefote("받는 위치의 선택자");
        $("이동할 대상 선택자").insertAfter("받는 위치의 선택자");
        
    */
    
    /*
    
        ※제이쿼리 문법1(누처)
        
        $("선택자").명령어();
        
        
        ※제이쿼리 문법2(누언:[이벤트]처)
        
        $("선택자").이벤트종류(function(){ 
    
        
        });
    
    
    */
    
    /*
       1.썸네일갤러리 좌우 조작
    
        (누)다음버튼  $(".gallery_btn button:last")
        (언:이벤트)클릭했을시  .click()
        
        ----- 이벤트발생 전까지 대기상태로 처리할 명령어----
        function(){
        
            현재 출력되고 있는 리스트는 맨뒤로 이동 시켜주시고
            다음 리스트를 화면에 보여주세요.
            $(".thumb_gallery li:first").appendTo(".thumb_gallery ul");
        }
    */
    
    $(".gallery_btn button:last").click(function(){     
        $(".thumb_gallery li:first").appendTo(".thumb_gallery ul");
    });
    $(".gallery_btn button:first").click(function(){
        $(".thumb_gallery li:last").prependTo(".thumb_gallery ul")        
    });
    //$("선택자").replaceWith("선택자 변경태그+실체요소 포함");
    $("h1:eq(1)").replaceWith("<p>일반 문단으로 변경</p>");
    //$("선택자").remove();
    $("body>p").remove();
    
    /*
        마크업언(html)의 3요소
        
        <태그     속성="속성값">   정보요소   </태그>
        -------  ------------  ----------
        기초요소    속성요소       실체요소
    
        <img src="">
        <iframe src=""></iframe>
        <a href=""></a>
        
        $("선택자").attr("속성명","속성값");
        
        

        1.큰이미지 바꿔주기 $(".view img").attr("src", );
        
        2.두번째 작은이미지 src가져오기
     
        $(".swap_gallery_btn li:eq(1) img").attr("src")

        스왑 갤러리에 보여지는 큰 첫번째 이미지를 
        두번째 이미지로 변경해주세요.
        (변경에 필요한 src주소는 스왑갤러리 버튼에 위치한
        썸네일 두번째 이미지 src를 가져와서 대입하세요)
        
      
    */

    $(".view img").attr("src",  $(".swap_gallery_btn li:eq(1) img").attr("src")  );
    //                                   images/img2.jpg   */
    

    /*
        $(".swap_gallery_btn li img").click(function(){
           $(".view img").attr("src", $(this).attr("src")); 
           $(".text_view").text( $(this).attr("alt") );
        });
    */
    
    /*
    
    
        (누)각각의 썸네일 이미지 
        (언)클릭시 
        --------------처리명령어---------------    
        
        해당 이미지의 대체 텍스트 속성값을 가져와서
        
            $(".swap_gallery_btn li:eq(0) img").attr("alt"); 깻잎
            $(".swap_gallery_btn li:eq(1) img").attr("alt"); 솜사탕        
            $(".swap_gallery_btn li:eq(3) img").attr("alt"); 앵두
        
        text_view 의 변경 텍스트로 대입 해주세요.
        
        $(".text_view").text( $(".swap_gallery_btn li:eq(0) img").attr("alt") );
        $(".text_view").text( $(".swap_gallery_btn li:eq(1) img").attr("alt") );
        $(".text_view").text( $(".swap_gallery_btn li:eq(3) img").attr("alt") );
    */    
    
    $(".swap_gallery_btn li img").click(function(){
        $(".view img").attr("src", $(this).attr("src"));
        $(".text_view").text( $(this).attr("alt") );
    });
    
    /*
    $(".swap_gallery_btn li:eq(0) button img").click(function(){
        $(".view img").attr("src","images/img1.jpg");  //이미지교체
        $(".text_view").text( $(".swap_gallery_btn li:eq(0) img").attr("alt") );//텍스트교체
        $(".swap_gallery_btn li:eq(0) button img").addClass("thumb_shadow");
    });
    $(".swap_gallery_btn li:eq(1) button img").click(function(){
        $(".view img").attr("src","images/img2.jpg"); //이미지교체
        $(".text_view").text( $(".swap_gallery_btn li:eq(1) img").attr("alt") );//텍스트교체                                            //텍스트교체 
        $(".swap_gallery_btn li:eq(0) button img").removeClass("thumb_shadow");
    });
    $(".swap_gallery_btn li:eq(2) button img").click(function(){
        $(".view img").attr("src","images/img3.jpg");  //이미지교체
        $(".text_view").text( $(".swap_gallery_btn li:eq(2) img").attr("alt") );//텍스트교체
    });   
    */  
    
    /*레이어팝업
        1.css변경 및 가져오기  
        
        $("선택자").css("속성명","변경 속성값");
                       ------- ------------
                          1         2
                          
--------------선택자에 적용된 CSS스타일의 종류를 다중 편집하고 싶을때는?----  
        
        ※메서드 체인방식.(기차,지하철)
        
            $("선택자").조작명령어().조작명령어();
            
--------------선택자에 적용된 CSS스타일의 종류를 메서드 체인 방식이 아닌 다중 편집하고 싶을때는?----            
 
    */

    /*  

      ▶최초 CSS문법

       .product_list li{  width:300px;  height:300px;   color:#fff;  margin-top:30px;  } 

       ------------------------------------▼------------------------------------------

       1.선택자를 제이쿼리 형식으로 변경

       $(".product_list li").css(   );

       ------------------------------------▼------------------------------------------

       2.CSS에서 적용한 {}중괄호 내에 모든 속성을 .css()괄호안에 대입한다.

       $(".product_list li").css( { width:"300px" , height:"300px" , color:"#fff" , marginTop:"30px" } );

       ------------------------------------▼------------------------------------------

       3.속성명에 붙은 "-"하이픈은 제거하고 뒤에 시작되는 첫단어는 공백없이 연속으로 붙혀서 사용하된 대문자로 변경
         속성값은 문자열일 경우 쌍따옴표("")처리
         명령어 마감에 해당하는 세미콜론(;)은 쉼표(,)로 변경 처리

       $(".product_list li:eq(0)").css( {width:"100px" , height:"100px" , color:"red" , marginTop:"50px"} );


    */

    /*
       1. 

            (누)제품 리스트의 첫번째 li를  
                $(".product_list li:eq(0)")

            (언)마우스로 오버하면  
                .mouseover()

            (처)이벤트 발생전까지 명령어 보관함에 대기할 처리명령어----
                function(){
                    $(".product_list li:eq(0) div").css({display:"block"});
                }
            비표시로 전환해둔(display:none) 해당 li태그내에
            자식div태그를 표시상태로 전환(display:block)
       2.
            (누)제품리스트의 첫번째 li를 
            (언)마우스로 벗어나면(mouseleave)
            (처)이벤트 발생전까지 명령어 보관함에 대기할 처리명령어----
            표시로 전환해둔(display:block) 해당 li태그내에
            자식div태그를 비표시상태로 전환(display:none)
    */
    
   $(".product_list li").mouseover(function(){
        $(this).children("div").css({display:"block"});     
   }); 
   $(".product_list li").mouseleave(function(){
        $(this).children("div").css({display:"none"});     
   }); 
    /*
        $(".product_list li:eq(0)").mouseover(function(){
        $(".product_list li:eq(0) div").css({display:"block"});
    });
        $(".product_list li:eq(0)").mouseleave(function(){
        $(".product_list li:eq(0) div").css({display:"none"});
    });
        $(".product_list li:eq(1)").mouseover(function(){
        $(".product_list li:eq(1) div").css({display:"block"});
    });
        $(".product_list li:eq(1)").mouseleave(function(){
        $(".product_list li:eq(1) div").css({display:"none"});
    }); 
    */
    

    
    

    
});//1.body내에 모든 태그를 로딩 완료 이후 실행 















































   