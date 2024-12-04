//1.오토갤러리[ 좌우조작 동작원리, 바네이갤러리 동작원리(ㅇ) ]

var count = 0; 
/*
    1. 셋인터벌에 연결된 명령어 보관함 실행 횟수 기록(의미)
    
    2. 준비된 이미지 장수보다 명령어 실행횟수가 오버되지 않도록 조건식에 조건값으로 대입해서 적용. (용도1)
    3. 비주얼 이미지의 이동폭(-100%)의 연산 배수로서 사용. (용도2)
    4. 현재 보여지고 있는 이미지 순서에 맞는 버튼 이미지의 교체 상황에서 필요한 버튼의 eq번호로 활용(용도3)
    
    5. 바형식의 네비게이션 버튼을 사용자가 클릭시, 
    
       5-1. 클리어인터벌에 의해 현재까지 자동으로 슬라이드 되고있는
            셋인터벌은 멈추게 됩니다. 이때 count 변수 증가값도 같이 멈춤.
       
       5-2. 사용자가 클릭한 이벤트 발생 대상 버튼태그의 순번을 count변수에 대입하여 이동폭으로 활용
       
       5-3. 사용자가 갤러리 조작을 멈추고, 자동 재생 실행시 셋인터벌 함수에 오토슬라이드 위치는
            최종 count변수에 대입 버튼의 인덱스 번호로부터 시작됩니다. 

*/
var ag = setInterval("autoGallery()",3000);
/*
    셋인터벌은 왜 변수에 담아놓고 사용합니까?
    
    조작과 연결된 셋인터벌은 사용자의 조작 이벤트에 따른 슬라이드 이미지 컨트롤 과정에서
    제거되있는 상태여야 합니다.
    
    clearInterval(셋인터벌 변수명);

*/

function autoGallery(){  
        
    var st = $(".visual ul li:last").index(); //(s)lide(T)otal  = 3

    count += 1; // 0, 1, 2, (3), 4, 5, 6...    
    if( count <= st ){ 
        //준비된 이미지 장수보다 카운터 변수에값이 작거나 같을 경우에는 이미지를 계속 슬라이드 해라!!
        
        $(".visual ul").stop().animate({ marginLeft: -100 * count + "%" });
        $(".visual_btn button:not(:last) img").attr("src","images/btn.PNG");
        $(".visual_btn button:eq("+count+") img").attr("src","images/btn(over).PNG"); 
        
    }else{ 
        /* 
            이미지 끝장 뒤에는 더이상 없다!!. 조건식이 false로 판명
            마지막 이미지뒤에 자연스럽게 첫번째 이미지 나오게 해주세요.
        
        */
        
        $(".visual ul li:first").appendTo(".visual ul"); 
        $(".visual ul").css({ marginLeft: -100 * (st-1) + "%" }); 
        $(".visual ul").stop().animate({ marginLeft: -100 * st + "%" }, function(){ 
                  
            $(".visual ul li:last").prependTo(".visual ul");
            $(".visual ul").css({ marginLeft:0 });
            count = 0;
            
            $(".visual_btn button:not(:last) img").attr("src","images/btn.PNG"); 
            $(".visual_btn button:eq("+count+") img").attr("src","images/btn(over).PNG");
            
        });  
    };

};

   
$(function(){

    //1. 비주얼 조작버튼 중 플레이 버튼 최초 비표시 조작, 첫번째 바네이 조작 버튼 선택된 이미지로 교체
    $(".visual_btn button:last").hide();
    $(".visual_btn button:first img").attr("src","images/btn(over).PNG");

    //2. 바네이 조작 버튼 
    $(".visual_btn button:not(:last)").click(function(){
        
        clearInterval(ag);
        $(".visual_btn button:last").fadeIn("fast");
        
        count = $(this).index(); // 0,1,2,3       
        $(".visual ul").stop().animate({ marginLeft: -100 * count + "%" });
        
        $(".visual_btn button:not(:last) img").attr("src","images/btn.PNG"); //모든 기본 버튼이미지로 교체(btn.PNG)
        $(".visual_btn button:eq("+count+") img").attr("src","images/btn(over).PNG");
        
    });
    $(".visual_btn button:last").click(function(){        
        ag = setInterval("autoGallery()",3000);
        $(this).fadeOut();
    });
    
    //3. 좌우 조작버튼
    $(".visual_btn2 button:eq(0)").click(function(){
        
        clearInterval(ag); 
        $(".visual_btn button:last").fadeIn("fast");

        count -= 1;        
        if( count >= 0 ){            
            $(".visual ul").stop().animate({ marginLeft: -100 * count + "%" });
            $(".visual_btn button:not(:last) img").attr("src","images/btn.PNG"); 
            $(".visual_btn button:eq("+count+") img").attr("src","images/btn(over).PNG");
        
        }else{
            $(".visual ul li:last").prependTo(".visual ul");
            $(".visual ul").css({ marginLeft:"-100%" });
            $(".visual ul").stop().animate({ marginLeft: 0 },function(){              
                $(".visual ul li:first").appendTo(".visual ul");  
                $(".visual ul").css({ marginLeft:"-300%" });
                count =3;
                $(".visual_btn button:not(:last) img").attr("src","images/btn.PNG"); 
                $(".visual_btn button:eq("+count+") img").attr("src","images/btn(over).PNG");
            }); 
        };
 
          
    });
    $(".visual_btn2 button:eq(1)").click(function(){        
        clearInterval(ag); 
        $(".visual_btn button:last").fadeIn("fast"); 
        autoGallery();
    });
    
    
});











































   