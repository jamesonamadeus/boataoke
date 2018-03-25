//Change Navbar Background on Scroll
window.onscroll = function () {
    var bnr = document.querySelector('#banner');
    // var newLogo = (document.getElementById('logo-img').src = '../images/boataoke_black.png');

    if (window.pageYOffset >= 50) {
        bnr.classList.add('banner--scroll');
        bnr.classList.remove('banner--top');
    } else {
        bnr.classList.add('banner--top');
        bnr.classList.remove('banner--scroll');
    }
};