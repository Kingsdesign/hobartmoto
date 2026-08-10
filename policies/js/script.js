$(document).ready(function() {
		var stickyNavTop = $('nav').offset().top;

		var stickyNav = function(){
			var scrollTop = $(window).scrollTop();

			if (scrollTop > stickyNavTop) {
			    $('nav').addClass('sticky');
			} else {
			    $('nav').removeClass('sticky');
			}
		};

		stickyNav();

		$(window).scroll(function() {
		    stickyNav();
		});
	});
	
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
