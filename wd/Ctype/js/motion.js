//1.자동 슬라이드 갤러리(좌우)
setInterval("ag()",3000);
function ag(){
    $(".content1 li:first").fadeOut("fast",function(){
        $(this).appendTo(".content1 ul").css({ display:"block"});        
    });
};


$(function(){  
   //A.전역메뉴-----------------------------------------------
   $(".gnb>li>a").mouseover(function(){
          $("#header").stop().animate({ height:"250px" });
   });

   $(".gnb").mouseleave(function(){
          $("#header").stop().animate({ height:"100px" });
   });

   //C.레이어 팝업-----------------------------------------------
   $(".notice tr:first a").click(function(){
         $(".layer_popup").stop().fadeIn();
   });
   $(".layer_popup button").click(function(){
         $(".layer_popup").stop().fadeOut();
   });
    
    
    //C.갤러리 줌인/줌아웃-----------------------------------------------
    $(".gallery img").mouseover(function(){
        $(this).stop().animate({ 
            width:160, height:160, margin:"-15px 0 0 -15px"});
    });
    $(".gallery img").mouseleave(function(){
        $(this).stop().animate({ width:130, height:130, margin:0});
    });
    
    
    
});






