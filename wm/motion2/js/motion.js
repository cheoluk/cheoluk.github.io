$(function(){//1.body내에 모든 태그를 로딩 완료 이후 실행

    
    //1.첫번째 dd를 제외한(부정요소 발생) 나머지 dd는 비표시 조작
    //2.첫번째 dt내에 button태그의 화살표 배경 변경
    $(".acco dd:not(:first)").hide();
    $(".acco dt:first button").css({ 
                background:" url(images/down.png) no-repeat right 20px center" });
    /*
      2.사용자 조작 및 동작 시나리오.
      
      (누)사용자가 질문에 해당하는 제목을  $(".acco dt")
      (언)클릭시 .click();
      
      (처)-----이벤트 발생전까지 대기상태의 명령어 보관함에 적용-----
        function(){
            $(".acco dd").stop().slideUp(500);
            $(this).next().stop().slideDown(500);
        }
        
        1.기존 답변은 접히며(슬라이드 업) 
        1-1. 제목의 화살표 배경이미지는 up.png ▶ down.png
        
        2.현재 클릭한 제목의 다음 답변만 펼쳐진다.(슬라이드 다운)
        2-1. 제목의 화살표 배경이미지는 down.png ▶ up.png
        
        
    */
    
    $(".acco dt").click(function(){
        
            //※CSS와 달리 js문서는 html문서에 로딩됨과 동시에 경로를 html과 동일하게 사용.        
            //1.기존 답변은 접히며(슬라이드 업) 
            $(".acco dd").stop().slideUp(300);
            //1-1. 제목의 화살표 배경이미지는 up.png ▶️ down.png
            $(".acco dt button").css({ 
                background:" url(images/down.png) no-repeat right 20px center" });
        
            //2.현재 클릭한 제목의 다음 답변만 펼쳐진다.(슬라이드 다운)
            $(this).next().stop().slideDown(300);
            // 2-1. 제목의 화살표 배경이미지는 down.png ▶️ up.png
            $(this).children().css({ 
                background:" url(images/up.png) no-repeat right 20px center" });     
    });
    
    
    
    
});//1.body내에 모든 태그를 로딩 완료 이후 실행 















































   