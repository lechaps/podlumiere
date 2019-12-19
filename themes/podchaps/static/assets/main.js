(function($) {
	'use strict';
	
	/* ========================= */
	/* 		  MEDIA PLAYER	     */
	/* ========================= */
	
		$('audio').mediaelementplayer({
			audioWidth: '100%'
		});
	
	/* ============================================= */
	/* 		  HAMBURGUER MENU TO SHOW MAIN MENU	     */
	/* ============================================= */
	
		$('.btn-hamburguer-menu').on('click', function(){
			$(".navigation").find('.menu').slideToggle();
			$(this).toggleClass('active');

			/* ======= DROPDOWN MENU ON RESPONSIVE ======= */
			if( $(window).width() <= 991 ){
				$('.navigation').find('.dropdown').on('click', function(){
					$(this).find('.droplist').slideToggle();
				});
			}

			return false;
		});
		
	/* ========================= */
	/* 	   PLACEHOLDER FOR IE	 */
	/* ========================= */
	
		$('input, textarea').placeholder();
	
	/* ========================= */
	/* 	     STICKY HEADER		 */
	/* ========================= */
	
		if( $('.header.sticky').length ){
			
			// Get the value from data-offset in sticky header
			var stickyOffset = $('.header.sticky').attr('data-offset');

			// For some browsers, `attr` is undefined; for others,
			// `attr` is false.  Check for both.
			if (typeof stickyOffset !== typeof undefined && stickyOffset !== false) {
				stickyOffset = parseInt(stickyOffset);
			} else {
				stickyOffset = 60;
			}

			$(window).on('scroll', function(){
				var top = $('.header.sticky').offset().top;
				if(top >= stickyOffset){
					$('.header.sticky').addClass('scrolling');
				} else {
					$('.header.sticky').removeClass('scrolling');
				}
			});

			// Trigger the scroll event when page loads
			$(window).trigger('scroll');
			
		}
	
	/* ========================= */
	/* 	MAP ENABLE TOUCH EVENTS	 */
	/* ========================= */
	
		$('#map').one('click', function(){
			$(this).addClass('touch');
		});
	
	/* ========================= */
	/* 	   		GOTO	         */
	/* ========================= */
	
		$('.goto').on('click', function(){
			var to = $(this).attr('href');
			$('html, body').animate({ scrollTop: ($(to).offset().top)}, 1000);
			return false;
		});
	
})(jQuery);