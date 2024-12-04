$( function(){ 
    
    //1.전역메뉴 하위메뉴 등장시 헤더(높이) 슬라이드
    $(".gnb>li>a").mouseover(function(){
        $("#header").stop().animate({height:"310px"},300);        
        $(".sub_bg").css({ background:"rgba(0,0,0,0.7)" });
        $(".sub_gnb>li>a").css({color:"#fff"});
        $(".sub_gnb>li>ul a").css({color:"#fff"});
        $(".sub_header_wrap form img").attr("src","sub_images/search_btn_white.png");
        $(".sub_gnb>li>a:hover").css({color:"#df0019"});
        $(".sub_h1 img").attr("src","images/logo.PNG");
    });
    
    $(".gnb").mouseleave(function(){
        $("#header").stop().animate({height:"100px"},300);
        $(".sub_bg").css({ background:"rgba(0,0,0,0)" });
        $(".sub_gnb>li>a").css({color:"#000"});
        $(".sub_gnb>li>ul a").css({color:"#000"});
        $(".sub_header_wrap form img").attr("src","sub_images/search_btn_black.png");
        $(".sub_h1 img").attr("src","sub_images/logo.gif");
    });
    
    $(".sub_gnb>li>ul a").mouseover(function(){
        $(".sub_gnb>li>ul a:hover").css({color:"#df0019"});
    });
    $(".sub_gnb>li>ul a").mouseleave(function(){
        $(".sub_gnb>li>ul a").css({color:"#fff"});
    });
    $(".sub_gnb>li>a").mouseleave(function(){
        $(".sub_gnb>li>a").css({color:"#fff"});
    });
    
    
    //sub2.레이어팝업 유튜브 영상 변경 
    
    $(".cf div").click(function(){
        $(".layer_popup").fadeIn();
        
        var cfNum = $(this).index();//0,1,2,3
        
        if( cfNum == 0){  $(".layer_popup iframe").attr("src","https://www.youtube.com/embed/d-gTPy4F6mw");};
        if( cfNum == 1){  $(".layer_popup iframe").attr("src","https://www.youtube.com/embed/YnvxBvwdB_A");};
        if( cfNum == 2){  $(".layer_popup iframe").attr("src","https://www.youtube.com/embed/mVEf4VgRe5Y");};
        if( cfNum == 3){  $(".layer_popup iframe").attr("src","https://www.youtube.com/embed/CISlfYX4RRw");};
        
    });
    $(".layer_popup").click(function(){
        $(".layer_popup").fadeOut();
    });
    
    // 더보기란 설명글
    $(".more").click(function(){
       alert("반복되는 데이터 유형은 대표 유형만 제작되었습니다.");        
    });
    
    //sub5-2. FAQ 아코디언패널
    
    $(".questions dd:not(:first)").hide();
    
    $(".questions dt").click(function(){
        $(".questions dd").stop().slideUp();
        $(this).next().stop().slideDown();
    });
    
    //footer영역 패밀리 사이트 버튼 클릭시 ul목록 표시/비표시
    
    $(".family_list button").click(function(){
        
        if( $(".family_list ul").css("display") == "none" ){
            
            $(".family_list ul").fadeIn();
            
        }else{
            $(".family_list ul").fadeOut();
            
        };
  
    });





});
