$('.slider').slick({
	infinite: true,
	dots: true,
	autoplay: false, 
	autoplaySpeed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	cssEase: 'ease',
	pauseOnHover: true, 
	adaptiveHeight: true, // works only with one slide
	useCSS: true, // - mast be disabled to use custom animaton
	// easing: 'easeInOutElastic', // - custom animation(must include jquery.easing.js)
	speed: 700,
	vertical: false, // - vertical slider 
	draggable: true, // - enable drag slides on desctop
	touchMove: true, // - enable moves slided with touch
	prevArrow: '<img class="slider-arrow slider-arrow-prev" src="img/slider-arrow-prev.png" alt="" />',
	nextArrow: '<img class="slider-arrow slider-arrow-next" src="img/slider-arrow-next.png" alt="" />',
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