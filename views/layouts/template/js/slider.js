function slider_next(){
	var img = $(".mainHeader div.slider>img:visible");
	var border = $('.mainHeader #list-images img.active');
	$(img).fadeOut(2000, function(){
		
		$(border).removeClass("active");
		
		if($(border).next().is('img'))
			$(border).next().addClass("active");	
		else
			$('.mainHeader #list-images img').first().addClass("active");
		
		if($(img).next().is('img'))
			$(img).next().fadeIn(4000);
		else
			$(".mainHeader div.slider:first img").fadeIn(4000);
	});
}

function slider_prev(){
	var img = $(".mainHeader div.slider>img:visible");
	var border = $('.mainHeader #list-images img.active');
	$(img).fadeOut(2000, function(){
		
		$(border).removeClass("active");
		
		if($(border).prev().is('img'))
			$(border).prev().addClass("active");	
		else
			$('.mainHeader #list-images img').last().addClass("active");
			
		if($(img).prev().is('img'))
			$(img).prev().fadeIn(4000);
		else
			$(".mainHeader div.slider>img").last().fadeIn(4000);
	});
}

$(document).ready(function(){
	
	$(".mainHeader div.slider>img").hide();
	$(".mainHeader div.slider img").first().show();
	
	setInterval(slider_next, 500);
	
});