var vg = setInterval("visualGallery()",3000);
function visualGallery(){    
    $(".visual ul").stop().animate({marginLeft:"-100%"},function(){
        $(".visual li:first").appendTo(".visual ul");
        $(".visual ul").css({marginLeft:0});
    });
};


$(function(){
    
    //1.재생비표시조작
    $(".visual_btn button:last").hide();
    
    //2.다음버튼
    $(".visual_btn button:eq(1)").click(function(){
        clearInterval(vg);
        $(".visual_btn button:last").fadeIn("fast");
        visualGallery();
    });
    
    //3.이전버튼
    $(".visual_btn button:eq(0)").click(function(){
        clearInterval(vg);
        $(".visual_btn button:last").fadeIn("fast");
        
        $(".visual li:last").prependTo(".visual ul");
        $(".visual ul").css({marginLeft:"-100%"});
        $(".visual ul").stop().animate({marginLeft:0});
    });
    
    //4.자동재생버튼
    $(".visual_btn button:last").click(function(){
        vg = setInterval("visualGallery()",3000);
        $(this).fadeOut("fast");
    });
});











































   