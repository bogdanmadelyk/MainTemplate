$(function() {
	$('.slider').slick({
		infinite: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		useCSS: false, // - mast be disabled to use custom animaton
		easing: 'easeOutBounce', // - custom animation(must include jquery.easing.js)
		speed: 1000,
		vertical: false, // - vertical slider 
		draggable: true, // - enable drag slides on desctop
		touchMove: true, // - enable moves slided with touch
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
		}
    ]
	});
});