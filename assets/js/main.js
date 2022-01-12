
/*---------------------------------------------
Template name: .
Version: 1.0.0

[Table of Content]
----------------------
01: Preloader
02: Swiper Slider
03: Back to Top
04: back to top button animate
05: Aos Animation
----------------------------------------------*/

(function($) {
    "use strict";

	/* ======= STICKY MENU ======= */
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$("nav").addClass('sticky-menu');
		} else {
			$("nav").removeClass('sticky-menu');
		}
	});

	/* ====== SHOW & HIDE MENU ====== */
	$(".navbar-toggle-btn").click(function () {
		$(".main-menu").toggleClass("active-main-menu");
	});

})(jQuery);
