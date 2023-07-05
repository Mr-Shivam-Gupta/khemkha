(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	


	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="icon icon-chevron-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}

	
	//Hidden Sidebar
	if ($('.hidden-bar').length) {
		var hiddenBar = $('.hidden-bar');
		var hiddenBarOpener = $('.nav-toggler');
		var hiddenBarCloser = $('.hidden-bar-closer');
		$('.hidden-bar-wrapper').mCustomScrollbar();
		
		//Show Sidebar
		hiddenBarOpener.on('click', function () {
			hiddenBar.addClass('visible-sidebar');
		});
		
		//Hide Sidebar
		hiddenBarCloser.on('click', function () {
			hiddenBar.removeClass('visible-sidebar');
		});
	}
	
	
	// Paroller
	if($('.paroller').length){
		$('.paroller').paroller();
	}
	
	
	//Contact Page / Locations Tabs List Text Toggle Script
	if($('.department-page-section .network-tabs .tab-btns .our-branches').length){
		$('.department-page-section .network-tabs .tab-btns .our-branches .tab-btn').on('click', function(e) {
			e.preventDefault();
			var targetText = $(this).attr('data-toggle-text');
			var targetTextBox = $('.department-page-section .network-tabs .tab-btns .our-branches .toggle-text');
			
			$(targetTextBox).text(targetText);
		});
	}
	
	//Contact Page / Locations Tabs List Text Toggle Script
	if($('.department-page-section .network-tabs .tab-btns .our-branches').length){
		$('.department-page-section .network-tabs .tab-btns .our-branches .tab-btn').on('click', function(e) {
			e.preventDefault();
			var targetText = $(this).attr('data-toggle-text-2');
			var targetTextBox = $('.department-page-section .network-tabs .tab-btns .our-branches .toggle-text-2');
			
			$(targetTextBox).text(targetText);
		});
	}
	
	
	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
	
	
	//Hidden Bar Menu Config
	function hiddenBarMenuConfig() {
		var menuWrap = $('.hidden-bar .side-menu');
		// appending expander button
		menuWrap.find('.dropdown').children('a').append(function () {
			return '<button type="button" class="btn expander"><i class="icon  icon-chevron-right"></i></button>';
		});
		// hidding submenu
		menuWrap.find('.dropdown').children('ul').hide();
		// toggling child ul
		menuWrap.find('.btn.expander').each(function () {
			$(this).on('click', function () {
				$(this).parent() // return parent of .btn.expander (a)
					.parent() // return parent of a (li)
						.children('ul').slideToggle();

				// adding class to expander container
				$(this).parent().toggleClass('current');
				// toggling arrow of expander
				$(this).find('i').toggleClass('fa-angle-right fa-angle-down');

				return false;

			});
		});
	}

	hiddenBarMenuConfig();
	

	//Banner Carousel
	if ($('.banner-carousel').length) {
		$('.banner-carousel').owlCarousel({
			//animateOut: 'slideOutUp',
    		//animateIn: 'fadeDown',
			loop:true,
			margin:0,
			nav:true,
			singleItem:true,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout:10000,
			navText: [ '<span class="icon icon-chevron-left"></span>', '<span class="icon icon-chevron-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
			}
		});    		
	}
	
	
	
	//Banner Carousel Two
	if ($('.banner-carousel-two').length) {
		$('.banner-carousel-two').owlCarousel({
			animateOut: 'slideOutUp',
    		animateIn: 'fadeDown',
			loop:true,
			margin:0,
			nav:true,
			singleItem:true,
			smartSpeed: 500,
			autoHeight: false,
			autoplay: true,
			autoplayTimeout:10000,
			navText: [ '<span class="icon icon-chevron-left"></span> Prev', 'Next <span class="icon icon-chevron-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
			}
		});    		
	}
	
	
	//Team Carousel
	if ($('.team-carousel').length) {
		$('.team-carousel').owlCarousel({
			animateOut: 'slideOutUp',
    		animateIn: 'fadeDown',
			loop:true,
			margin:30,
			nav:true,
			singleItem:true,
			smartSpeed: 500,
			autoHeight: false,
			autoplay: true,
			autoplayTimeout:10000,
			navText: [ '<span class="icon icon-chevron-right"></span>', '<span class="icon icon-chevron-left"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1100:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});    		
	}

	
	// Calender Carousel
	if ($('.calender-carousel').length) {
		$('.calender-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			autoplayHoverPause:true,
			navText: [ '<span class="flaticon-back-7"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1100:{
					items:1
				}
			}
		});
	}
	
	
	// Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			autoplayHoverPause:false,
			navText: [ '<span class="flaticon-back-7"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1100:{
					items:1
				}
			}
		});    		
	}
	
	
	// Three Item Carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="flaticon-back-7"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1100:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});    		
	}
	
	
	
	// Three Item Carousel
	if ($('.team-carousel-two').length) {
		$('.team-carousel-two').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="flaticon-back-7"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1100:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});    		
	}
	
	
	// News Carousel
	if ($('.news-carousel').length) {
		$('.news-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="flaticon-back-7"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1100:{
					items:3
				}
			}
		});    		
	}
	
	
	
	// Product Carousel Slider
	if ($('.services-carousel .image-carousel').length && $('.services-carousel .thumbs-carousel').length) {

		var $sync1 = $(".services-carousel .image-carousel"),
			$sync2 = $(".services-carousel .thumbs-carousel"),
			flag = false,
			duration = 500;

			$sync1
				.owlCarousel({
					loop:true,
					items: 1,
					margin: 0,
					nav: false,
					navText: [ '<span class="icon icon-chevron-left"></span>', '<span class="icon icon-chevron-right"></span>' ],
					dots: false,
					autoplay: true,
					autoplayTimeout: 5000
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = false;
						$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync2
				.owlCarousel({
					loop:true,
					margin: 10,
					items: 1,
					nav: true,
					navText: [ '<span class="icon icon-chevron-left"></span>', '<span class="icon icon-chevron-right"></span>' ],
					dots: false,
					center: false,
					autoplay: true,
					autoplayTimeout: 5000,
					responsive: {
						0:{
				            items:1,
				            autoWidth: false
				        },
				        400:{
				            items:1,
				            autoWidth: false
				        },
				        600:{
				            items:1,
				            autoWidth: false
				        },
				        900:{
				            items:1,
				            autoWidth: false
				        },
				        1000:{
				            items:1,
				            autoWidth: false
				        }
				    },
				})
				
		.on('click', '.owl-item', function () {
			$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
		})
		.on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;		
				$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});
	}
	
	
	//
	//====================================================================//
	// Progress Bar
	//====================================================================//
	//
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
	

	// Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="flaticon-back-7"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				768:{
					items:3
				},
				1024:{
					items:5
				}
			}
		});
	}
	
	
	// Quote Carousel
	if ($('.quote-carousel').length) {
		$('.quote-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="flaticon-back-7"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});
	}

	
	// Testimonials Carousel
	if ($('.testimonials-carousel').length) {
		$('.testimonials-carousel').owlCarousel({
			loop:true,
			animateOut: 'slideOutDown',
    		animateIn: 'fadeUp',
			margin:0,
			nav:true,
			smartSpeed: 300,
			autoplay: true,
			navText: [ '<span class="flaticon-back-4"></span>', '<span class="flaticon-next"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
			}
		});
	}


	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	

	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	//Sortable Masonary with Filters
	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

	//Gallery Filters
	 if($('.filter-list').length){
	 	 $('.filter-list').mixItUp({});
	 }



	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});


    /*=============================================================
                fixed header
        =========================================================================*/


    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".xs-sticky-header").removeClass("IsSticky animated fadeInDown");
        } else {
            $(".xs-sticky-header").addClass("IsSticky animated fadeInDown");
        }

        if ($(window).width() < 991) {
            $('.xs-sticky-header').removeClass('IsSticky animated fadeInDown');
        }
    });





    $( '.elementskit-navbar, .mobile-nav, .cta' ).find( 'a[href*="#"]:not([href="#"])' ).on('click', function () {
        if ( location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) && location.hostname == this.hostname ) {
            var target = $( this.hash );
            target = target.length ? target : $( '[name=' + this.hash.slice( 1 ) + ']' );
            if ( target.length ) {
                $( 'html,body' ).animate( {
                    scrollTop: ( target.offset().top - 100 )
                }, 1000 );
                if ( $( '.navbar-toggle' ).css( 'display' ) != 'none' ) {
                    $( this ).parents( '.container' ).find( ".navbar-toggle" ).trigger( "click" );
                }
                return false;
            }
        }
    } );







})(window.jQuery);