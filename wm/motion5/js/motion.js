$(function(){//1.body내에 모든 태그를 로딩 완료 이후 실행

    $(".gnb>li>a").mouseover(function(){
            $("#header").stop().animate({ height:"250px" },300);        
    });
    
    $(".gnb").mouseleave(function(){
            $("#header").stop().animate({ height:"100px" },300);        
    });
        
});//1.body내에 모든 태그를 로딩 완료 이후 실행 















































   