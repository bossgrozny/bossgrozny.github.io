
$(document).ready(function () {
    var $header = $('header');
    var $nav = $('header .navbar');
    var $ul = $('header ul li a');
    var fixed = false;

    $('.return').fadeOut(0);

    $('header .btn').on('click', function () {
        $('html , body').animate({
            scrollTop: $header.innerHeight(),
        }, 600)
    })

    $ul.on('click', function (e) {
        e.preventDefault();
        ($ul).removeClass('active');
        var get_id = $(this).addClass('active').attr('href');

        var postion_id = $(get_id).offset().top + 60;
        $('html, body').animate({
            scrollTop: postion_id,
        }, 400)
    })
    $('.return').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700)
    })

    $(window).on('scroll', function () {
        var scrolls = $(this).scrollTop();

    })
    $(window).scroll(function () {
        var scrolls = $(this).scrollTop();
        console.log(scrolls)


        if (scrolls >= '2200') {

            $('.return').fadeIn(600);

        }
        else {

            $('.return').fadeOut(600);
        }









        $ul.each(function () {
            var get_ids = $(this).attr('href');
            var postion_ids = $(get_ids).offset().top - 100;
            if (scrolls >= postion_ids) {
                $ul.removeClass('active');
                $(this).addClass('active');

            }



        })
    })
    function control() {
        if (scrollY >= $header.innerHeight() && !fixed) {
            $nav.addClass('fixed-top').css("opacity", 0).animate({ opacity: 1 }, 700);
            fixed = true;

        }
        else if (scrollY < $header.innerHeight() && fixed) {
            $nav.removeClass('fixed-top')

            fixed = false;
        }

    }
    $(window).on('scroll', control);
    control();







});