//B구역 자동 갤러리
setInterval("ag()",3000);
function ag(){
    $(".content1 li:first").fadeOut("fast",function(){
        $(this).appendTo(".content1 ul").css({ display:"block"});        
    });
};


$(function(){
    
    //A구역 하위메뉴 출력 애니메이션
    $(".gnb>li>a").mouseover(function(){
        $(".gnb>li>ul").stop().slideUp("fast");
        $(this).next().stop().slideDown("fast");
    });
    
    $(".gnb>li>ul").mouseleave(function(){
        $(".gnb>li>ul").stop().slideUp("fast");
    });
    
    //C구역 공지사항,갤러리 탭메뉴 
    $(".notice h3").click(function(){
        $(".notice table").show();
        $(".gallery ol").hide();
    });
    $(".gallery h3").click(function(){
        $(".notice table").hide();
        $(".gallery ol").show();
    });
    
    //C구역 공지사항 첫번째 게시글 클릭시 레이어 팝업
    $(".notice tr:eq(0) a").click(function(){
       $(".layer_popup").fadeIn(); 
    });
    $(".layer_popup button").click(function(){
       $(".layer_popup").fadeOut(); 
    });
    
});





