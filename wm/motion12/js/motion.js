$(function(){//1.body내에 모든 태그를 로딩 완료 이후 실행
    
    /*
        (누)공지사항 제목버튼 
        (언)클릭시
        (처)
        공지사항 ol리스트는 표시
        갤러리 ol리스트는 비표시
        ------------------------------------
        (누)갤러리 제목버튼 
        (언)클릭시
        (처)
        공지사항 ol리스트는 비표시
        갤러리 ol리스트는 표시
    
    */

    $(".notice h3 button").click(function(){
        $(".notice ol").show(); 
        $(".gallery ol").hide();
    });
    
    $(".gallery h3 button").click(function(){
        $(".notice ol").hide();
        $(".gallery ol").show();
    });
    

});//1.body내에 모든 태그를 로딩 완료 이후 실행 
















































   