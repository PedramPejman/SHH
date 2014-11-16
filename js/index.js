// scrollBanner

function scrollBanner(config) {

	scrollPos = $(this).scrollTop();

	config.bannerText.css({
		'margin-top' : -(scrollPos/3) + "px",
		'opacity' : 1-(scrollPos/300)
	});

	config.banner.css({
		'background-position': 'center ' + (-scrollPos/4) + "px"
	});

}

$(document).ready(function(){
	var who = document.getElementById('who');
	var what = document.getElementById('what');
	var how = document.getElementById('how');
	
	$(window).scroll(function() {

		scrollBanner({
			banner: $('.banner'),
			bannerText: $('.banner-text')
		});

	});

});