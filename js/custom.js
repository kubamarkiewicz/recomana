$(function() {


    // minimize menu on scroll
    function onScroll() 
    {
        if ($(window).scrollTop() > 50) {
            $('body > header').addClass('mini');
        }
        else {
            $('body > header').removeClass('mini');
        }
    }
	$(window).scroll(onScroll);
    onScroll();


    // burger menu
    $('body > header .burger').click(function(){
    	$('body > header nav.main-menu').toggleClass('open');
    });


	// open megamenu
	$('body > header nav.main-menu a').mouseover(function(){
		var megamenu = $(this).data('megamenu');
		$('body > header .megamenu').removeClass('open');
		if (megamenu) {
			$('body > header .megamenu[data-megamenu=' + megamenu + ']').addClass('open');
		}
	});
	// close megamenu
	$('body > header .megamenu').mouseout(function(){
		$(this).removeClass('open');
	});


    // tooltips
    $('[data-toggle="tooltip"]').tooltip();


});