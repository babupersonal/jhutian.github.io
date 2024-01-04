$(document).ready(function(){
	
	$(".box1").ready(function(){
		$(".box1").delay(4000).fadeOut(800);
	});
	$(".no").ready(function(){
		$(".no").delay(4000).fadeIn(800);
	});
	
	$(".box3item2").hide();
	$(".box3item3").hide();
	$(".b31").click(function(){
		$(".box3item1").show();
		$(".box3item2").hide();
		$(".box3item3").hide();
	});
	$(".b32").click(function(){
		$(".box3item2").show();
		$(".box3item1").hide();
		$(".box3item3").hide();
	});
	$(".b33").click(function(){
		$(".box3item3").show();
		$(".box3item2").hide();
		$(".box3item1").hide();
	});
	$(".box6item2").hide();
	$(".box6item3").hide();
	$(".b61").click(function(){
		$(".box6item1").show();
		$(".box6item2").hide();
		$(".box6item3").hide();
	});
	$(".b62").click(function(){
		$(".box6item2").show();
		$(".box6item1").hide();
		$(".box6item3").hide();
	});
	$(".b63").click(function(){
		$(".box6item3").show();
		$(".box6item2").hide();
		$(".box6item1").hide();
	});
	$(".t1").click(function(){
		$("html,body").animate({scrollTop:$(".t01").offset().top},1000);
	});
	$(".t2").click(function(){
		$("html,body").animate({scrollTop:$(".t02").offset().top},1000);
	});
	$(".t3").click(function(){
		$("html,body").animate({scrollTop:$(".t03").offset().top},1000);
	});
	$(".t4").click(function(){
		$("html,body").animate({scrollTop:$(".t04").offset().top},1000);
	});
	$(".t5").click(function(){
		$("html,body").animate({scrollTop:$(".t05").offset().top},1000);
	});
	$(".t6").click(function(){
		$("html,body").animate({scrollTop:$(".t06").offset().top},1000);
	});
	$(".box15").click(function(){
		$("html,body").animate({scrollTop:$(".t04").offset().top},1000);
	});
	$(".c1").click(function(){
		var v1=parseFloat($("#v1").val());
		var v1a=(v1)*99;
		pd1=parseFloat(v1);
		$(".p1").text(v1);
		$(".p1a").text(v1a);
		$(".p7a").text(pd1*99+pd2*99+pd3*99+pd4*99+pd5*99+pd6*99);
		$(".box9-1").text(pd1+pd2+pd3+pd4+pd5+pd6);
	});
	$(".c2").click(function(){
		var v2=parseFloat($("#v2").val());
		var v2a=(v2)*99;
		pd2=parseFloat(v2);
		$(".p2").text(v2);
		$(".p2a").text(v2a);
		$(".p7a").text(pd1*99+pd2*99+pd3*99+pd4*99+pd5*99+pd6*99);
		$(".box9-1").text(pd1+pd2+pd3+pd4+pd5+pd6);
	});
	$(".c3").click(function(){
		var v3=parseFloat($("#v3").val());
		var v3a=(v3)*99;
		pd3=parseFloat(v3);
		$(".p3").text(v3);
		$(".p3a").text(v3a);
		$(".p7a").text(pd1*99+pd2*99+pd3*99+pd4*99+pd5*99+pd6*99);
		$(".box9-1").text(pd1+pd2+pd3+pd4+pd5+pd6);
	});
	$(".c4").click(function(){
		var v4=parseFloat($("#v4").val());
		var v4a=(v4)*99;
		pd4=parseFloat(v4);
		$(".p4").text(v4);
		$(".p4a").text(v4a);
		$(".p7a").text(pd1*99+pd2*99+pd3*99+pd4*99+pd5*99+pd6*99);
		$(".box9-1").text(pd1+pd2+pd3+pd4+pd5+pd6);
	});
	$(".c5").click(function(){
		var v5=parseFloat($("#v5").val());
		var v5a=(v5)*99;
		pd5=parseFloat(v5);
		$(".p5").text(v5);
		$(".p5a").text(v5a);
		$(".p7a").text(pd1*99+pd2*99+pd3*99+pd4*99+pd5*99+pd6*99);
		$(".box9-1").text(pd1+pd2+pd3+pd4+pd5+pd6);
	});
	$(".c6").click(function(){
		var v6=parseFloat($("#v6").val());
		var v6a=(v6)*99;
		pd6=parseFloat(v6);
		$(".p6").text(v6);
		$(".p6a").text(v6a);
		$(".p7a").text(pd1*99+pd2*99+pd3*99+pd4*99+pd5*99+pd6*99);
		$(".box9-1").text(pd1+pd2+pd3+pd4+pd5+pd6);
	});
	$(".b71").click(function(){
		alert("感謝你的訂閱");
	});
	$(".b72").click(function(){
		$(".box7btn2").val("");
	});
	$(".b73").click(function(){
		alert("感謝你的回饋，我們會盡快改善。");
	});
	$(".box10").hide();
	$(".box11").hide();
	$(".box12").hide();
	
	
	
	$(".box9").hide();
	$(".box9-1").hide();
	$(".box13").hide();
	$(".box13-1").hide();
	$(".box15").hide();
	
	$(window).scroll(function(){
		 var t=$(window).scrollTop();
		if(t>1000){
			$(".box9").fadeIn(500);
			$(".box9-1").fadeIn(500);
			$(".box13").fadeIn(500);
			$(".box13-1").fadeIn(500);
			$(".box15").fadeIn(500);
		}
		else{
			$(".box9").fadeOut(500);
			$(".box9-1").fadeOut(500);
			$(".box13").fadeOut(500);
			$(".box13-1").fadeOut(500);
			$(".box15").fadeOut(500);
		}
	});
	
	$(".box9").click(function(){
		$(".box10").show();
		$(".b10a").css("background","rgba(221,0,3,1.00)");
		$(".b10a").css("color","#fff");
	});
	$(".b101").click(function(){
		$(".box10").hide();
	});
	$(".b102").click(function(){
		$(".box10").hide();
		$(".box11").show();
		$(".b10b").css("background","rgba(221,0,3,1.00)");
		$(".b10b").css("color","#fff");
	});
	$(".b103").click(function(){
		$(".box11").hide();
		$(".box10").show();
		$(".b10b").css("background","#fff");
		$(".b10b").css("color","#000");
	});
	$(".b104").click(function(){
		$(".box11").hide();
		$(".box12").show();
		$(".b10c").css("background","rgba(221,0,3,1.00)");
		$(".b10c").css("color","#fff");
	});
	$(".b105").click(function(){
		$(".box12").hide();
		$(".box11").show();
		$(".b10c").css("background","#fff");
		$(".b10c").css("color","#000");
	});
	$(".b106").click(function(){
		var nn=jQuery("#name").val();
		var aa=jQuery("#ad").val();
		var ee=jQuery("#em").val();
		
		if(jQuery.trim(nn)==""){
			alert("請輸入姓名");
		}
		else if(jQuery.trim(aa)==""){
			alert("請輸入地址");
		}
		else if(jQuery.trim(ee)==""){
			alert("請輸入郵件");
		}
		else{
			alert("感謝你的購買，於7日內送達。")
		$(".box12").hide();
		$(".b10c").css("background","#fff");
		$(".b10c").css("color","#000");
		$(".b10b").css("background","#fff");
		$(".b10b").css("color","#000");
			}
	});
	$(".box14").hide();
	$(".box13").click(function(){
		$(".box14").toggle(500);
	});
	
	$(".b141").click(function(){
		$(".box14-1").append("<h4>會員申請</h4>");
		$(".box14-1").append("<p>會員申請還在籌備中，請稍待幾日再來。</p>");
	});
	$(".b142").click(function(){
		$(".box14-1").append("<h4>付款方式</h4>");
		$(".box14-1").append("<p>1.我們可以使用貨到付款。<br>2.我們可以使用ATM轉帳	。</p>");
	});
	$(".b143").click(function(){
		$(".box14-1").text($(".box14-1").val());
	});
	$(".b144").click(function(){
		$(".box14-1").append($(".box14btn1").val());
	});
	
	$(".box16").click(function(){
		$(".box16").hide();
	});
	$(".box17").hide();
	$(".b51").click(function(){
		$(".box17item1").show();
	});
	$(".b52").click(function(){
		$(".box17item2").show();
	});
	$(".b53").click(function(){
		$(".box17item3").show();
	});
	$(".b54").click(function(){
		$(".box17item4").show();
	});
	$(".b55").click(function(){
		$(".box17item5").show();
	});
	$(".b56").click(function(){
		$(".box17item6").show();
	});
	$(".box17").click(function(){
		$(".box17").hide();
	});
});




pd1=0
pd2=0
pd3=0
pd4=0
pd5=0
pd6=0
var sm=43200;
	function ct(){
		sm -=1;
		var ci=document.getElementById("ci");
		var h=Math.floor(sm/3600);
		var m=Math.floor(Math.floor(sm%3600)/60);
		var s=sm%60;
		ci.innerHTML=h+":"+m+":"+s;
	}
var mm=window.setInterval("ct()",1000);




