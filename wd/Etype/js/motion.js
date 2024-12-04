//1.B구역- 고정형 fade갤러리( fadeIn(),fadeOut() )

setInterval("fm()",3000); //fade motion
function fm(){
  
    $(".content1 li:first").fadeOut("fast",function(){ //1. 서서히 사라진다.
        $(this).appendTo(".content1 ul").css({ display:"block"});    
        //2. 맨뒤로 이동한다.             3.뒤로이동한 대상은 다시 보이게 한다.
    });
    
};


$(function(){
    
    //2.A구역- 하위메뉴 슬라이드( slideUp(),slideDown() )
    $(".gnb>li>a").mouseover(function(){
        $(".gnb>li ul").stop().slideUp(); //기존 열람된 하위메뉴 점검(열람 하위메뉴는 슬라이드업)
        $(this).next().stop().slideDown();//현재 마우스를 오버한 대상(this)의 하위메뉴는 슬라이드 다운 
    });    
    $(".gnb").mouseleave(function(){
        $(".gnb>li ul").stop().slideUp(); //기존 열람된 하위메뉴 점검(열람 하위메뉴는 슬라이드업)
    });
    
    
    //3.C구역- 공지사항&갤러리 탭메뉴( show(), hide() )
    $(".notice h3 button").click(function(){
        $(".notice table").show();
        $(".gallery ol").hide();
    });
    $(".gallery h3 button").click(function(){
        $(".notice table").hide();
        $(".gallery ol").show();
    });
    
    //4.C구역- 레이어팝업 ( fadeIn(),fadeOut())
    $(".notice tr:eq(0) a").click(function(){
       $(".layer_popup").fadeIn();        
    });
    $(".layer_popup button").click(function(){
       $(".layer_popup").fadeOut();        
    });
    
    
    //5.C구역- 갤러리 줌인&줌아아웃 효과 ( animate({ width: 75(100) = 25  , height: 150(200) =50 }) )
    $(".gallery li img").mouseover(function(){
        $(this).animate({ width:100, height:200 , margin: "-25px 0 0 -12px"});
    });
    $(".gallery li img").mouseleave(function(){
        $(this).animate({ width:75, height:150 , margin: 0 });
    });
    
    
    
    
});



