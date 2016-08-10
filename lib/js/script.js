$(document).ready(function(){

  $('.slider').slider({full_width: true});

  // Show sideNav
  $('.button-collapse').sideNav('show');
  // Hide sideNav
  $('.button-collapse').sideNav('hide');
  	(function($){
  		$(function(){
    		$('.button-collapse').sideNav();
  		}); // end of document ready
	})(jQuery);

  $('.parallax').parallax();
});