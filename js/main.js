var scrollTop     = $(window).scrollTop();
var eleOffset = $('#whatwedo').offset().top;

$(window).load(function() {
	$('.container-fluid').animate({ 'opacity': 1 }, 800);
});

$(function() {
	var winH = $(window).height();
	var winW = $(window).width();
	$('.row').css({ 'height': winH, 'width': winW });
	$.stellar({
		responsive: true
	});
	$.localScroll();
	
	if( (winW/winH) > (1280/720) ) {
		$('.bgvid').css({ 
			'height': winW/(1280/720), 
			'width': winW
		});
	}else{
		$('.bgvid').css({ 
			'width': winH*(1280/720), 
			'height': winH 
		});
	}
});

$(window).resize(function() {
	var winH = $(window).height();
	var winW = $(window).width();
	$('.row').css({ 'height': winH, 'width': winW });
	
	if( (winW/winH) > (1280/720) ) {
		$('.bgvid').css({ 
			'height': winW/(1280/720), 
			'width': winW
		});
	}else{
		$('.bgvid').css({ 
			'width': winH*(1280/720), 
			'height': winH 
		});
	}
});

$(window).scroll(function() {
	scrollTop = $(window).scrollTop();
	eleOffset = $('#whatwedo').offset().top;
    console.log(scrollTop);
    if( scrollTop >= (eleOffset-100) ) {
	    $('#main-nav').css({ 'opacity': 1 });
    } else {
	    $('#main-nav').css({ 'opacity': 0 });
    }
});

