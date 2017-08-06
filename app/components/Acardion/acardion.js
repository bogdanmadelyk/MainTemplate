$('.accordion-item__toggle').click(function(e){
	e.preventDefault();
	var $this = $(this);
	if ($this.next().hasClass('show')) {
		$this.next().removeClass('show');
		$this.next().slideUp(350);
	} else {
		$this.parent().parent().find('.accordion__item .accordion__inner').removeClass('show');
		$this.parent().parent().find('.accordion__item .accordion__inner').slideUp(350);
		$this.next().toggleClass('show');
		$this.next().slideToggle(350);
	}
	return false;
});