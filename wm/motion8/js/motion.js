$(function(){//1.body내에 모든 태그를 로딩 완료 이후 실행

    /*
    
        (누) 공지사항 첫번째 리스트 a태그 $(".notice li:first a")
        (언) 클릭시 .click( );
        (처)
        function(){
            $(".layer_popup").stop().fadeIn(300);        
        }
        비표시 상태의 레이어 팝업창을 그자리에서 
        서서히(fadeIn) 나타게 해주세요.
        
        --------------------------------------
        
        (누) 레이어 팝업창에 닫기버튼 $(".layer popup buttun") 
        (언)클릭시 .click( );
        (처)
        function(){
            $(".layer_popup").stop().fadeOut(300);        
        }
        레이팝업창은 그자리에서 서서히(fadeOut)
        사라지게 해주세요.    
    */
    $(".notice li:first a").click(function(){
        $(".layer_popup").stop().fadeIn(300);        
    });
    
    $(".layer_popup button").click(function(){
        $(".layer_popup").stop().fadeOut(300);        
    }); 
    
    
});//1.body내에 모든 태그를 로딩 완료 이후 실행 















































   