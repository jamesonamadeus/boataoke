//Change Navbar Background on Scroll
window.onscroll = function() {
	var bnr = document.querySelector('#banner-nav');

	if (window.pageYOffset >= 400) {
		bnr.classList.add('banner-nav--scroll');
		bnr.classList.remove('banner-nav--top');
	} else {
		bnr.classList.add('banner-nav--top');
		bnr.classList.remove('banner-nav--scroll');
	}
};

//Reveal
window.sr = ScrollReveal();
sr.reveal('h3', {
	delay: 100,
	duration: 400,
	easing: 'linear',
	origin: 'left'
});
