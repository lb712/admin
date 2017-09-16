// $(".one").mouseenter(function(){
//
//     $(this).css("background","#000");
// });
////测试



$(".dem-one-t").click(function(){
   $(".navba-header-one").toggle();
   $(".profile-text").toggle();
   $(".nav-small-cap").toggle();
    $(".hide-menu").toggle();
    
    $(".cup-one").hide();
    
    
   
});

$(".dem-one-y").click(function () {
        $(".dropdown-menu").toggle();
    
      $(".dropdown-menu").css({
          transform:"rotate(90deg)",
          transtion:"all 3s"
      });


});



$(".sm-cp").on({
	
	mouseover:function(){$(this).css("background-color","#ccc");},
	
	mouseout:function(){$(this).css("background-color","#272c32");},
	
	click:function () {
		$(".cup-one").slideToggle("fast");
		$(this).parent().siblings().children("ul").hide();
		$(this).css("borderLeft", "3px solid #1e88e5");
		$(this).parent().siblings().children(".sm-cp").css("borderLeft","none");
		$(this).children().find(".hide-menu").children("span:last").css({
		     transformOrigin: "center",
		     transform: "rotate(-270deg)",
		     transition: "all 1s"
		
		});
	},
  
});









//元素设display：flex 后的隐藏。
$(".dem-hide-q").hide();
$(".dem-one-q").click(function () {
	
	 $(".dem-hide-q").toggle("fast");
	 $(this).parent().siblings().children().eq(2).hide();
});

$(".dem-one-n").click(function () {

   	 $(".dem-hide-n").toggle(400);
   	 $(this).parent().siblings().children().eq(2).hide();
});
