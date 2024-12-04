$(function(){//1.body내에 모든 태그를 로딩 완료 이후 실행

    
    /*동작시나리오
    
        (누)전역메뉴중 대메뉴  $(".gnb>li>a")
        (언)마우스 오버시 .mouseover();        
        (처)------- 이벤트 발생전까지 명령어 보관함에 대기-----
        function(){
            $(".gnb").stop().animate({ height:"200px" },300);        
        }
        전역메뉴 높이값은 200px(메뉴갯수에 따라 달라집니다.) 증가(애니메이션 동작처리)
        
        -------------------------------------------------
        (누)전역메뉴 영역에 
        (언)마우스가 벗어났을시
        (처)------- 이벤트 발생전까지 명령어 보관함에 대기-----
        function(){
            $(".gnb").stop().animate({ height:"50px" },300);        
        }
        전역메뉴의 높이값은 50px 원상복귀(애니메이션 동작처리) 
    */
    
    $(".gnb>li>a").mouseover(function(){
            $(".gnb").stop().animate({ height:"200px" },300);        
    });
    
    $(".gnb").mouseleave(function(){
            $(".gnb").stop().animate({ height:"50px" },300);        
    });
    
});//1.body내에 모든 태그를 로딩 완료 이후 실행 















































   