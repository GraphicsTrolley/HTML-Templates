$(document).ready(function () {

	var winWidth = $(window).width();
	var winPos = $(window).scrollTop();
	var sticked = false;
	var navHeight = $('.navWrapper').innerHeight();

	$(window).resize(function () {
		winWidth = $(window).width();
		navHeight = $('.navWrapper').innerHeight();


	});

	$(window).scroll(function () {
		winPos = $(window).scrollTop();
		if (winPos > 400 && !sticked) {
			$('.MainHeader').addClass('stickyHeader').css({ 'paddingBottom': navHeight + 'px' });
			$('.navWrapper').css({ 'top': '-105%' }).animate({ 'top': '0' });
			sticked = true;
		} else if (winPos <= 400 && sticked) {
			$('.navWrapper').animate({ 'top': '-105%' }, function () {
				$(this).css({ 'top': '' });
				$('header.MainHeader').removeClass('stickyHeader').css({ 'paddingBottom': '' });
			});
			sticked = false;
		}

	});
});

$(document).ready(function(){
    $(this).scrollTop(10);
});


//SCROLLING ANIMATION SCRIPTS

//SUPERSCROLLORAMA PLUGIN

var controller = $.superscrollorama({ reverse: false });

/*BANNER*/

controller.addTween('#bannersection', TweenMax.from($('.caption-title h5'), 1.5, { delay: Math.random() * 2, css: { top: -150, opacity: 0 }, ease: Back.easeOut }));
controller.addTween('#bannersection', TweenMax.from($('.caption-title p'), 1.5, { delay: Math.random() * 2, css: { left: -150, opacity: 0 }, ease: Back.easeOut }));
controller.addTween('#bannersection', TweenMax.from($('.caption-title .SelectCategory'), 1.5, { delay: Math.random() * 2, css: { bottom: -150, opacity: 0 }, ease: Back.easeOut }));

/*BANNER*/

/*INFO*/

controller.addTween('#BG_Info', TweenMax.from($('.InformationData'), 1.5, { delay: Math.random() * .5, css: { left: -150, opacity: 0 }, ease: Back.easeOut }));

/*INFO*/

/*CATEGORIES*/

controller.addTween('#Categories', TweenMax.from($('#Categories label'), 1.5, { delay: Math.random() * .5, css: { left: -150, opacity: 0 }, ease: Back.easeOut }));
controller.addTween('#Categories', TweenMax.from($('#Categories h6'), 1.5, { delay: Math.random() * .3, css: { right: -150, opacity: 0 }, ease: Back.easeOut }));
controller.addTween('#Categories', TweenMax.from($('#Categories p'), 1.5, { delay: Math.random() * .3, css: { bottom: -150, opacity: 0 }, ease: Back.easeOut }));
var derDelay = .5;
$('#Categories .MainCategory a').each(function () {
	controller.addTween('#Categories',
		TweenMax.from($(this), 1, { delay: derDelay, css: { right: -150, opacity: 0 }, ease: Back.easeOut }));
	derDelay += .3;
});

/*CATEGORIES*/

/*SUBSCRIBE*/

controller.addTween('#BG_Subscribe', TweenMax.from($('#BG_Subscribe .col-md-6'), 1.5, { delay: Math.random() * .5, css: { bottom: -150, opacity: 0 }, ease: Back.easeOut }));

/*SUBSCRIBE*/

/*BUY*/

controller.addTween('#Buy', TweenMax.from($('#Buy img'), 1.5, { delay: Math.random() * .5, css: { left: -150, opacity: 0 }, ease: Back.easeOut }));
controller.addTween('#Buy', TweenMax.from($('#Buy .Buy_Sell'), 1.5, { delay: Math.random() * .5, css: { right: -150, opacity: 0 }, ease: Back.easeOut }));

/*BUY*/

/*JOIN*/

controller.addTween('#Join', TweenMax.from($('#Join img'), 1.5, { delay: Math.random() * .5, css: { right: -150, opacity: 0 }, ease: Back.easeOut }));
controller.addTween('#Join', TweenMax.from($('#Join .Buy_Sell'), 1.5, { delay: Math.random() * .5, css: { left: -150, opacity: 0 }, ease: Back.easeOut }));

/*JOIN*/

/*FOOTER*/

controller.addTween('.Footer_Row1', TweenMax.from($('.FooterMenu'), 1.5, { delay: Math.random() * .5, css: { bottom: -200, opacity: 0 }, ease: Back.easeOut }));
$('.Footer_Row1 .FooterMenu li').each(function () {
	controller.addTween('.Footer_Row1',
		TweenMax.from($(this), 1.5, { delay: derDelay, css: { left: -150, opacity: 0 }, ease: Back.easeOut }));
	derDelay += .3;
});

/*FOOTER*/

/*CONTACT*/

var derDelay = .5;
$('#contact .form-group').each(function () {
	controller.addTween('#contact',
		TweenMax.from($(this), 1.5, { delay: derDelay, css: { top: 100, opacity: 0 }, ease: Back.easeOut }));
	derDelay += .3;
});

/*CONTACT*/


$(function () {
	$('#slider-container').slider({
		range: true,
		min: 299,
		max: 1099,
		values: [299, 1099],
		create: function() {
			$("#amount").val("$299 - $1099");
		},
		slide: function (event, ui) {
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			var mi = ui.values[0];
			var mx = ui.values[1];
			filterSystem(mi, mx);
		}
	})
});

function filterSystem(minPrice, maxPrice) {
	$("#computers div.system").hide().filter(function () {
		var price = parseInt($(this).data("price"), 10);
		return price >= minPrice && price <= maxPrice;
	}).show();
}
/** ADD CLASS GRID **/

$(".View").click(function () {
	$(".View").removeClass("active");                
	$(this).addClass("active");
});


$(".dropdown").hover(
	function () {
		$('.mega-dropdown-menu.dropdown-menu', this).not('.in .mega-dropdown-menu.dropdown-menu').stop(true, true).slideDown("400");
		$(this).toggleClass('open');
	},
	function () {
		$('.mega-dropdown-menu.dropdown-menu', this).not('.in .mega-dropdown-menu.dropdown-menu').stop(true, true).slideUp("400");
		$(this).toggleClass('open');
	}
);


// Main/Product image slider for product page
$('.ProductDescLeft .main-img-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	arrows: true,
	fade: true,
	autoplay: true,
	autoplaySpeed: 4000,
	speed: 300,
	lazyLoad: 'ondemand',
	asNavFor: '.thumb-nav',
	prevArrow: '<div class="slick-prev"><i class="i-prev"></i><span class="sr-only sr-only-focusable">Previous</span></div>',
	nextArrow: '<div class="slick-next"><i class="i-next"></i><span class="sr-only sr-only-focusable">Next</span></div>'
});
// Thumbnail/alternates slider for product page
$('.thumb-nav').slick({
	slidesToShow: 7,
	slidesToScroll: 1,
	infinite: true,
	arrows: true,
	centerPadding: '0px',
	asNavFor: '.main-img-slider',
	dots: false,
	centerMode: false,
	draggable: true,
	speed: 200,
	focusOnSelect: true,
	prevArrow: '<div class="slick-prev"><i class="i-prev"></i><span class="sr-only sr-only-focusable">Previous</span></div>',
	nextArrow: '<div class="slick-next"><i class="i-next"></i><span class="sr-only sr-only-focusable">Next</span></div>'
});


//keeps thumbnails active when changing main image, via mouse/touch drag/swipe
$('.main-img-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
	//remove all active class
	$('.thumb-nav .slick-slide').removeClass('slick-current');
	//set active class for current slide
	$('.thumb-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');
});
