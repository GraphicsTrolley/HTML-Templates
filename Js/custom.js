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
