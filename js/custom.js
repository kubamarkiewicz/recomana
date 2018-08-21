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
	$('body > header nav.main-menu a, body > header .megamenu').mouseover(function(){
		var megamenu = $(this).data('megamenu');
		$('body > header .megamenu').removeClass('open');
		if (megamenu) {
            // open megamenu
			$('body > header .megamenu[data-megamenu=' + megamenu + ']').addClass('open');

            // position arrow
            var menuEl = $('body > header nav.main-menu a[data-megamenu=' + megamenu + ']');
            var offset = menuEl.offset();
            var arrowLeft = offset.left - ($( document ).width() - 1200) / 2 + menuEl.width() / 2;
            $('body > header .megamenu[data-megamenu=' + megamenu + '] > .arrow').css('left', arrowLeft + 'px');
		}
	});
	// close megamenu
	$('body > header nav.main-menu a, body > header .megamenu').mouseout(function(){
		$('body > header .megamenu').removeClass('open');
	});


    // tooltips
    $('[data-toggle="tooltip"]').tooltip();


    // fold text
    $('.fold-toggle').click(function(){
        $(this).parent().toggleClass('open');
    });
    

});