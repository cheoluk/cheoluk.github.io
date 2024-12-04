$(function(){//1.body내에 모든 태그를 로딩 완료 이후 실행


    $(".gnb>li>ul").hide(); //하위메뉴 비표시 조작.

    /*
        수직네비게이션(하위메뉴 개별 슬라이드) 동작 시나리오
        
            (누)사용자가 대메뉴에   $(".gnb>li>a")
            (언)마우스 오버시   .mouseover();

            (처)-----이벤트 발생전까지 대기상태의 명령어 보관함에 적용-----
            function(){
                $(".gnb>li>ul").stop().slideUp(500);
                $(this).next().stop().slideDown(500);
            }
            1.기존 하위메뉴는 비표시(슬라이드 업) 
            2.현재 마우스오버한 대메뉴의다음 하위메뉴는 표시(슬라이드 다운)
            
            ----------------------------------------------------------------
            
            (누)전역메뉴에 
            (언)마우스가 벗어났을시 
            (처)-----이벤트 발생전까지 대기상태의 명령어 보관함에 적용-----
            function(){
                $(".gnb>li>ul").stop().slideUp(500);
            }
            1.하위메뉴는 비표시(슬라이드 업) 
    */    
    
    $(".gnb>li>a").mouseover(function(){
        $(".gnb>li>ul").stop().slideUp(300);
        $(this).next().stop().slideDown(300);
    });
    
    $(".gnb").mouseleave(function(){
        $(".gnb>li>ul").stop().slideUp(300);
    });

    
});//1.body내에 모든 태그를 로딩 완료 이후 실행 















































   