/*******************************************************
    Template Name    : Sarah - Personal Portfolio Landing Page Template
    Author           : Cute Themes
    Version          : 1.0
    Created          : 2021
    File Description : Main Js file of the template
*******************************************************/
(function($) {
	"use strict";
	
	var nav = $('nav');
	var navHeight = nav.outerHeight();
	$('.navbar-toggler').on('click', function() {
		if(!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	});
	
	// START PRELOADED
    $(window).on('load', function() {
        $('.loader-wrapper').fadeOut();
        $('.loader-wrapper').delay(350).fadeOut('slow');
    });
	
	// Porfolio isotope and filter
	$(window).on('load', function() {
		var portfolioIsotope = $('.portfolio-container').isotope({
			itemSelector: '.portfolio-grid-item'
		});
		$('#portfolio-flters li').on('click', function() {
			$("#portfolio-flters li").removeClass('filter-active');
			$(this).addClass('filter-active');
			portfolioIsotope.isotope({
				filter: $(this).data('filter')
			});
		});
	});
	
	// Navbar Menu Reduce 
	$(window).trigger('scroll');
	$(window).on('scroll', function() {
		var pixels = 50;
		var top = 1200;
		if($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});
	
	// Back to top button 
	$(window).on("scroll", function() {
		if($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').on("click", function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
		return false;
	});
	
	//  Star ScrollTop
	$('.scrolltop-mf').on("click", function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
	
	//  Star Scrolling nav
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 30)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});
	
	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function() {
		$('.navbar-collapse').collapse('hide');
	});
	
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});


})(jQuery);