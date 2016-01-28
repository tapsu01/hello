$(function() {
    var pull        = $('#pull');
        menu        = $('nav ul');
        menuHeight  = menu.height();
 
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle(500);
    });
});

$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
}); 

$(document).ready(function(){
	
	$('.mainHeader div').height($(window).height());
	$('.mainProductType').height($(window).height()*1.5);
	
	$(window).scroll(function(){
		$('.mainHeader nav').css("position", "static");
		if($(this).scrollTop() > $('.mainHeader nav').offset().top)
		{
			$('.mainHeader nav').css({"position":"fixed", "top":"0", "width":"100%", "left":"0", "z-index":"9999"});
		}

		if($(this).scrollTop() > $('.mainHeader').height())
		{
			$('#onTop').css({"position":"fixed", "top":"87%", "width":"50px", "height":"50px", "right":"100px", "z-index":"9999"});	
		}
		else
		{
			$('#onTop').hide();
		}
		
		if($(this).scrollTop() > $(this).height())
		{
			$('#footer').addClass('footer');
		}
		else
		{
			$('#footer').removeClass('footer');
		}
	});

	$('.mainHeader li a').click(function(evn){
		$('.mainHeader li a').removeClass('active');
		$(this).addClass('active');
		evn.preventDefault();
    	$('html,body').scrollTo(this.hash, this.hash); 
	});

	$('#footer li a').click(function(){
		$('#footer li a').removeClass('active');
		$(this).addClass('active');
		return false;
	});

	var aChildren = $(".mainHeader li").children(); // find the a children of the list items
	var aArray = []; // create the empty aArray
	for (var i = 0; i < aChildren.length; i++) {
	    var aChild = aChildren[i];
	    var ahref = $(aChild).attr('href');
	    aArray.push(ahref);
	} // this for loop fills the aArray with attribute href values

	$(window).scroll(function() {
	    var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
	    var windowHeight = $(window).height(); // get the height of the window
	    var docHeight = $(document).height();

	    for (var i = 0; i < aArray.length; i++) {
	        var theID = aArray[i];
	        var divPos = $(theID).offset().top; // get the offset of the div from the top of page
	        var divHeight = $(theID).height(); // get the height of the div in question
	        if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
	            $(".mainHeader li a[href='" + theID + "']").addClass("active");
	        } else {
	            $(".mainHeader li a[href='" + theID + "']").removeClass("active");
	        }
	    }

	    if (windowPos + windowHeight == docHeight) {
	        if (!$(".mainHeader li:last-child a").hasClass("active")) {
	            var navActiveCurrent = $(".mainHeader li a.active").attr("href");
	            $(".mainHeader li a[href='" + navActiveCurrent + "']").removeClass("active");
	            $(".mainHeader li:last-child a").addClass("active");
	        }
	    }
	});

});