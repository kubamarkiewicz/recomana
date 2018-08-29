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


    // close filters on mobile
    function onWindowResize()
    {
        if ($(window).innerWidth() < 752) {
            $('.collapse-control:not(.collapsed)').click();
        }
    }
    $(window).resize(onWindowResize);
    onWindowResize();




    // toggle burger menu
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


    // datepicker language and format
    $.datepicker.setDefaults({
        regional: $.datepicker.regional["ca"],
        dateFormat: 'yy-mm-dd'
    });


    // fold filter checkboxes
    $('.collapse-control.checkboxes').click(function(){
        $(this).toggleClass('collapsed');
        var targetSelector = $(this).data('target');
        
        if ($(this).hasClass('collapsed')) { // hide checkboxes what are NOT checked
            $(targetSelector).each(function(index, el){
                if (!$(el).find('input').prop('checked')) {
                    $(el).addClass('collapse').removeClass('show');
                }
            });
        }
        else { // show checboxes
            $(targetSelector).addClass('collapse').addClass('show');
        }
    });
    

});