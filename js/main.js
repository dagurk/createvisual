 /**
 * This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
 * Want to see more similar demos and tutorials?
 * Help by spreading the word about Ihatetomatoes blog.
 * Facebook - https://www.facebook.com/ihatetomatoesblog
 * Twitter - https://twitter.com/ihatetomatoes
 * Google+ - https://plus.google.com/u/0/109859280204979591787/about
 * Article URL: http://ihatetomatoes.net/simple-parallax-scrolling-tutorial/
 */

( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		var s = skrollr.init({
		    forceHeight: false,
		    render: function(data) {
		    
		        //Debugging - Log the current scroll position.
		        //console.log(data.curTop);
		    }
		});
		
		// Get window size
	    winH = $window.height();
		winW = $window.width();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Init Skrollr for 768 and up
		if( winW >= 768) {
	 
			// Init Skrollr
			var s = skrollr.init({
				forceHeight: false
			});
	 
			// Resize our slides
			$slide.height(winH+80);
	 
			s.refresh($('.homeSlide'));
	 
		} else {
	 
			// Init Skrollr
			var s = skrollr.init();
			s.destroy();
		}
	 
		// Check for touch
		if(Modernizr.touch) {
	 
			// Init Skrollr
			var s = skrollr.init();
			s.destroy();
		}
	    
	}
	
	function initAdjustWindow() {
		return {
			match : function() {
				adjustWindow();
			},
			unmatch : function() {
				adjustWindow();
			}
		};
	}
	 
	enquire.register("screen and (min-width : 768px)", initAdjustWindow(), false);

	
	// Tooltip text
	$('.masterTooltip').hover(function(){
			// Hover over code
			var title = $(this).attr('title');
			$(this).data('tipText', title).removeAttr('title');
			$('<p class="tooltip"></p>')
			.html(title)
			.appendTo('body')
			.fadeIn('slow');
	}, function() {
			// Hover out code
			$(this).attr('title', $(this).data('tipText'));
			$('.tooltip').remove();
	}).mousemove(function(e) {
			var mousex = e.pageX + 20; //Get X coordinates
			var mousey = e.pageY + 10; //Get Y coordinates
			$('.tooltip')
			.css({ top: mousey, left: mousex })
	});
	
	/**
	$(window).scroll(function (event) {
		var y = $(this).scrollTop();
		if (y >= 1) {
			$('.logo').addClass('smallerLogo');
		}	
		else {
			$('.logo').removeClass('smallerLogo');
		}
	});
	*/
		
} )( jQuery );