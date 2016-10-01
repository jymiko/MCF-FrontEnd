$(function() {

    $(document).ready(function() {
        $(".nav-tabs a").click(function() {
            $(this).tab('show');
        });
    });

    $('a[href*="#content-"]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });

    $('.multi-item-carousel').carousel({
        interval: false
    });

    // for every slide in carousel, copy the next slide's item in the slide.
    // Do the same for the next, next item.
    $('.multi-item-carousel .item').each(function() {
        var next = $(this).next();
        var previous = $(this).prev();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        // previous.children(':first-child').clone().appendTo($(this));
        next.children(':first-child').clone().appendTo($(this));
        // next.children(':next-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
            // $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });

    $('li.sign-up>.trigger').popover({
        html: true,
        content: function() {
            return $(this).parent().find('.content').html();
        }
    });
    $('li.sign-in>.trigger').popover({
        html: true,
        content: function() {
          $(this).addClass('active');
            return $(this).parent().find('.content').html();
        }

    });

    $('body').on('click', function(e) {
        $('[data-toggle="popover"]').each(function() {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });


    // $("body").css('overflow', 'hidden');
}); // END OF FUNCTION JQUERY