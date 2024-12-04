$(function(){//1.body내에 모든 태그를 로딩 완료 이후 실행
  $(".sg_btn button").click(function(){        
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
        $(".sg ul").stop().animate({ marginLeft: -300 * $(this).index() });            
        /*                                               ---------------
                                                         이벤트 발생 태그 순번
                                                          0 , 1 , 2 , 3
        
        */
    }); 
    

});//1.body내에 모든 태그를 로딩 완료 이후 실행 
















































   