/*
    1.바네이(bar navigain gallery) 갤러리 오토

    셋인터벌 시간설정에 따라  
    (명령어 보관함의 명령어를 처리하는 과정에서
     실행횟수 를 기록해둘 변수를 선언: count라는 임의의 변수를 선언)
    
     count += 1;
    
    비주얼 이미지는 설정된 이동폭(-100%)을 기준으로 
    앞으로 전진하며 다음 이미지를 보여 주어야 합니다.
    
    ( 이동폭에 실행횟수를 기록해둘 변수의 값을 *연산처리 )
    
     -100 * count  +"%"
    
     [주의] 산술연산자( +, - , *, /, %)는 피연산자가 수학적 의미를 담고있는
           Number열에 한에 계산(연산)됩니다.
           
           이때!! 산술연산자 더하기(+)만 유일하게 문자열 처리가능
           
           "가" + "나" = "가나"
           "가" +  2   = "가2"
           "가" +  2  + "바위 보" = "가2바위 보"
     
           "가" * "나" = X, "가" - "나" = X, "가" / "나" = X , "가" % "나" = X

    
        0
        |▶
        ---
         1  2  3  4   :최초 1번이 보여지는 모습
        ---
        3초뒤...
        
        ---
      1  2  3  4   marginLeft: -100 *count + "%" = "-100%"
        ---   
        
        3초뒤...
        
        ---
   1  2  3  4      marginLeft: -100 *count + "%" = "-200%"
        ---  
        
        3초뒤...
        
        ---
1  2  3  4         marginLeft: -100 *count + "%" = "-300%"
        ---   
                
*/

var count = 0; 
//★ 1.함수 실행 횟수를 기록해둘 변수, 
//★ 2.비주얼 영역의ul 이동폭의 배수의 피연산자값
//★ 3.현재 보여지는 이미지의 버튼교체 :eq번호로 활용

var ag = setInterval("autoGallery()",3000);
function autoGallery(){  

    count += 1; //카운트 변수에 값을 1씩 증가 0 , 1, 2 , 3 ...
    if( count <= 3 ){
        
        // 만약에..조건식 비교 연산자 적용( 카운트 변수값이 3보다 작거나 같을때 참 true)            
        $(".visual ul").stop().animate({ marginLeft: -100 * count + "%" });
        
        $(".visual_btn button:not(:last) img").attr("src","images/btn.PNG"); //모든 기본 버튼이미지로 교체(btn.PNG)
        $(".visual_btn button:eq("+count+") img").attr("src","images/btn(over).PNG"); //현재 보여지는 이미지의 버튼 이미지 교체(btn(over).PNG)
        
        
    }else{ //---그밖에 조건식의 결과가 거짓으로 반환 되었을시
        
      // 마지막 4번이미지 뒤에는 자연스럽게 1번이 이어져서 나와야 한다.  
        $(".visual ul li:first").appendTo(".visual ul"); //조작
        $(".visual ul").css({ marginLeft: "-200%" });  //조작
        $(".visual ul").stop().animate({ marginLeft: "-300%" }, function(){ //동작
                  
            $(".visual ul li:last").prependTo(".visual ul");
            $(".visual ul").css({ marginLeft:0 });
            count = 0;
            
            $(".visual_btn button:not(:last) img").attr("src","images/btn.PNG"); 
            $(".visual_btn button:eq("+count+") img").attr("src","images/btn(over).PNG");
            
        });  
    };

};

   
$(function(){
    
    //1.재생버튼 비표시, 갤러리 조작 첫번째 버튼 이미지 교체
    $(".visual_btn button:last").hide();
    $(".visual_btn button:first img").attr("src","images/btn(over).PNG");
    
    //2.제공된 바형식의 네비게이션 버튼 클릭시 이미지 슬라이드
    /*
        제공된 바형식의 네비게이션 버튼 클릭시        
            1.셋인터벌 중지(제거)
            2.재생버튼 표시상태 전환(조작/동작)-서서히

            3.이벤트 발생 대상자의 버튼의 인덱스 번호를 ★count 변수에 대입
            4.비주얼 이미지 ul을 부드럽게 슬라이드
    */
    $(".visual_btn button:not(:last)").click(function(){
        
        clearInterval(ag);
        $(".visual_btn button:last").fadeIn("fast");
        
        count = $(this).index();        
        $(".visual ul").stop().animate({ marginLeft: -100 * count + "%" });
        
        $(".visual_btn button:not(:last) img").attr("src","images/btn.PNG"); //모든 기본 버튼이미지로 교체(btn.PNG)
        $(".visual_btn button:eq("+count+") img").attr("src","images/btn(over).PNG");
        
    });
    
    //3.재생버튼
    $(".visual_btn button:last").click(function(){        
        ag = setInterval("autoGallery()",3000);
        $(this).fadeOut();
    });
    
});











































   