setInterval("ag()",3000);
function ag(){
    $(".content1 ul").animate({ marginLeft:"-100%"},600,function(){
        $(".content1 ul li:first").appendTo(".content1 ul");
        $(".content1 ul").css({ marginLeft:0});        
    });  
};



$(function(){
    $(".gnb>li>a").mouseover(function(){
        $(".gnb").stop().animate({ height:200});       
    });
    $(".gnb").mouseleave(function(){
        $(".gnb").stop().animate({ height:40});       
    });
    
    $(".notice h3").click(function(){
        $(".notice table").show(); 
        $(".gallery ol").hide(); 
    });
    $(".gallery h3").click(function(){
        $(".notice table").hide(); 
        $(".gallery ol").show(); 
    });
    
    $(".notice tr:eq(0) a").click(function(){
       $(".layer_popup").fadeIn("fast"); 
    });
    $(".layer_popup button").click(function(){
       $(".layer_popup").fadeOut("fast"); 
    });
    
    $(".gallery img").mouseover(function(){
        $(this).stop().animate({ 
            width:160, height:160, margin:"-15px 0 0 -15px"});
    });
    $(".gallery img").mouseleave(function(){
        $(this).stop().animate({ width:130, height:130, margin:0});
    });
    
})