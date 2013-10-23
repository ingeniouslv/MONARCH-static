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
	$.scrollTo();
	
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

