function removeLoadingScreen() {
	$('.loading-screen').delay(1000).transition({'opacity': '0'}, {duration: 300, complete: function() {
		$(this).css('display', 'none');
		console.log('loading done')
	}});
}
function setMainImageHeight() {
	var mainImg = $('#main-img');
	var windowHeight = $(window).height();
	var navWrapperHeight = $('.nav-wrapper').height();
	mainImg.height(windowHeight - navWrapperHeight);
}

/*------EVENT LISTENERS-----*/

$('body').on('mouseenter', '.resource-box', function() {
	$(this).stop().transition({scale: 1.03}, {duration: 300});
});
$('body').on('mouseleave', '.resource-box', function() {
	$(this).stop().transition({scale: 1}, {duration: 300});
});

$(window).load(function() {
    removeLoadingScreen();
});
$(document).ready(function() {
    setMainImageHeight();
});