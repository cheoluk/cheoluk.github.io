//B구역 좌우 슬라이드 이미지 
setInterval("ag()",3000);
function ag(){
    $(".content1 ul").animate({ marginLeft:"-100%" },function(){
        $(".content1 ul li:first").appendTo(".content1 ul");
        $(".content1 ul").css({ marginLeft:0 });
    });    
};

$(function(){
    
    //A구역 하위메뉴---------------------------------------------------------
    $(".gnb>li>a").mouseover(function(){
        $(".gnb>li>ul").stop().fadeOut("fast"); 
        $(this).next().stop().fadeIn("fast");
    });
    $(".gnb").mouseleave(function(){
        $(".gnb>li>ul").stop().fadeOut("fast"); 
    });
    
    //C구역 레이어 팝업------------------------------------------------------
    $(".notice tr:eq(0) a").click(function(){
        $(".layer_popup").fadeIn("fast");
    });
    $(".layer_popup button").click(function(){
        $(".layer_popup").fadeOut("fast");
    });
    
    //C구역 갤러리 줌인/줌아웃-----------------------------------------------
    $(".gallery li img").mouseover(function(){
        $(this).stop().animate({ width:"80px"});
    });
    $(".gallery li img").mouseleave(function(){
        $(this).stop().animate({ width:"75px"});
    });
    
});



