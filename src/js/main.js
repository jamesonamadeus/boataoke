//Change Navbar Background on Scroll
window.onscroll = function() {
	var bnr = document.getElementById('banner-nav');

	if (window.pageYOffset >= 400) {
		bnr.classList.add('banner-nav--scroll');
		bnr.classList.remove('banner-nav--top');
	} else {
		bnr.classList.add('banner-nav--top');
		bnr.classList.remove('banner-nav--scroll');
	}
};

//nav brgr
(function() {
	var body = document.body;
	var burgerMenu = document.getElementsByClassName('nav-menu')[0];
	var burgerContain = document.getElementsByClassName('nav-contain')[0];
	var burgerNav = document.getElementsByClassName('nav-list')[0];

	burgerMenu.addEventListener(
		'click',
		function toggleClasses() {
			[body, burgerContain, burgerNav].forEach(function(el) {
				el.classList.toggle('open');
			});
		},
		false
	);
})();

//Reveal
window.sr = ScrollReveal();
sr.reveal('h3', {
	delay: 100,
	duration: 400,
	easing: 'linear',
	origin: 'left'
});
