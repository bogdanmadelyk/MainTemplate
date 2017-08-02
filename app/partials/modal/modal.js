// INLINE TYPE
$('.open-popup-link').magnificPopup({
	removalDelay: 300, // Delay before popup is removed
	mainClass: "mfp-zoom-in", // Zoom animation
	type:'inline',
});
// GALERY POPUP
$('.gallery').each(function() {
	$(this).magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		},
		removalDelay: 300, // Delay before popup is removed 
		mainClass: 'mfp-fade', // Fade animation
	});
});