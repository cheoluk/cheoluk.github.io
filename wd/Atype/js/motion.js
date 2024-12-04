setInterval("ag()",3000);
function ag(){
	$(".content1 ul").animate({ marginTop: -300 },function(){
		$(".content1 ul li:first").appendTo(".content1 ul");
		$(".content1 ul").css({ marginTop:0 });
	});
};

$(function(){
	$(".gnb>li>a").mouseover(function(){ 
		$(".gnb").stop().animate({ height:190 });
	});
	$(".gnb>li>a").mouseleave(function(){ 
		$(".gnb").stop().animate({ height:40 });
	});

	$(".notice h3").click(function(){
		$(".notice table").show();
		$(".gallery ol").hide();
	});
	$(".gallery h3").click(function(){
		$(".notice table").hide();
		$(".gallery ol").show();
	});

	$(".notice tr:nth-child(1) a").click(function(){
		$(".layer_popup").fadeIn();

	});
	$(".layer_popup button").click(function(){
		$(".layer_popup").fadeOut();

	});

});