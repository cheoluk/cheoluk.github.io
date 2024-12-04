$(function(){//1.body내에 모든 태그를 로딩 완료 이후 실행
  
    
    /*
        슬라이드 갤러리의 좌우 움직임은 어떤 대상태그를 선택자로
        지정하여 움직이게 할까요?
        
        
        ------ <div class="bng">
         ------------------------★<ul>★★★★★★★★★★★
          <li>--  <li>--  <li>--
             1       2      3
           -----   -----  -----
         ------------------------</ul> 
        ------ </div>
    
    
    
    
                        
                        |▶
                        0
                       ---
                        1  2  3  4 (marginLeft:0)
                       ---                    
                     1  2  3  4    (marginLeft:"-300px") 
                       ---   
                  1  2  3  4       (marginLeft:"-600px")  
                       ---      
               1  2  3  4          (marginLeft:"-900px")                
    */
    
    $(".bng_btn button").click(function(){        
        /*
        
            태그는 작성 순서대로 순번을 가지게 되며,
            자바스크립트(제이쿼리)에서는 태그의 순번을
            index()라고 합니다.
        
            <button>1</button>  0   : index()
            <button>2</button>  1   : index()
            <button>3</button>  2   : index()
            <button>4</button>  3   : index()
            
            
            marginLeft:  -300 *  0    //0  
            marginLeft:  -300 *  1    //-300 
            marginLeft:  -300 *  2    //-600
            marginLeft:  -300 *  3    //-900
            
            
            $(".bng_btn button").click(function(){
            
                $(".bng ul").stop().animate({ marginLeft: -300 * $(this).index() });  
            
            });
        */
        $(".bng ul").stop().animate({ marginLeft: -300 * $(this).index() });            
        /*                                               ---------------
                                                         이벤트 발생 태그 순번
                                                          0 , 1 , 2 , 3
        
        */
    }); 
    
    /*
    $(".bng_btn button:eq(0)").click(function(){
       $(".bng ul").stop().animate({ marginLeft:0 });        
    });
    
    $(".bng_btn button:eq(1)").click(function(){
       $(".bng ul").stop().animate({ marginLeft:"-300px" });        
    });
    
    $(".bng_btn button:eq(2)").click(function(){
       $(".bng ul").stop().animate({ marginLeft:"-600px" });        
    });
    
    $(".bng_btn button:eq(3)").click(function(){
       $(".bng ul").stop().animate({ marginLeft:"-900px" });        
    });
    */
    

});//1.body내에 모든 태그를 로딩 완료 이후 실행 
















































   