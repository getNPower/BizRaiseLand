jQuery(document).ready(function($) {
    $('.nav-trigger').click(function(){
        if($("nav").hasClass('in') === true) {
            $('body').css('overflow','hidden');
        }
        else{
            $('body').css('overflow','visible');
        }
    });

    $('.b-servicemob__link').next().hide();

    setTimeout(function(){
        $('.b-servicemob__link').next().removeClass('b-bottom__border');
    }, 500);

    $('.b-servicemob__link').click(function(){
        $(this).next().slideToggle();
        $(this).next().addClass('b-bottom__border');
        $('.b-servicemob__link').not(this).next().stop(true,true).slideUp(1000).removeClass('b-bottom__border');
    });


    /* select by id */
    $('.virt_tabs.Nav-item').on('click', function(event) {

            if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
        }
        else {
            $('.virt_tabs.Nav-item').removeClass('is-active');
            $(this).addClass('is-active');
        }
    });
    $(document).ready(function() {
        $('.ctaFormView').click(function() {
            $('.order-button__link').css('display', 'none');
            $(".cta_form").animate({width: 'toggle'});
        });
        $("div[data-ix='alpha-alts']").on('click', function() {
            $('.order-button__link').css('display', 'block');
            $(".cta_form").css('display', 'none');
        });
    });

});
// Toggle header tabs

var activeservice1 = $('.b-serviceblock1 .b-serviceblock__link');
var activeservice2 = $('.b-serviceblock2 .b-serviceblock__link');
var activeservice3 = $('.b-serviceblock3 .b-serviceblock__link');

var isAnimate1 = false;
var isAnimate2 = false;
var isAnimate3 = false;
activeservice1.click(function(e){
    if(!isAnimate1)
    e.preventDefault();
    var $this = $(this);
    if($(".b-serviceblock1").hasClass('b-double__width') === true) {
        // $(".b-serviceblock1").addClass('b-top__servise');
        $('.b-serviceblock1 .b-serviceblock__inform').removeClass('b-ativetabs');
        $('.b-serviceblock1 .b-serviceblock__inform').addClass('b-closetabs');
        setTimeout(function(){
            $(".b-serviceblock1").removeClass('b-double__width');

        }, 0);

        setTimeout(function(){
            $(".b-serviceblock2").removeClass('b-bottom__servise');
            $(".b-serviceblock3").removeClass('b-bottom__servise');
            $(".b-serviceblock2").addClass('b-top__servise');
            $(".b-serviceblock3").addClass('b-top__servise');
        }, 900);

    }
    else {
        if($(".b-serviceblock1").hasClass('b-bottom__servise') === true) {
            $('.b-serviceblock2 .b-serviceblock__inform').removeClass('b-ativetabs');
            $('.b-serviceblock3 .b-serviceblock__inform').removeClass('b-ativetabs');
            $('.b-serviceblock2 .b-serviceblock__inform').addClass('b-closetabs');
            $('.b-serviceblock3 .b-serviceblock__inform').addClass('b-closetabs');
            $(".b-serviceblock2").removeClass('b-double__width');
            $(".b-serviceblock3").removeClass('b-double__width');
            setTimeout(function(){
                $(".b-serviceblock1").removeClass('b-bottom__servise');
                $(".b-serviceblock2").removeClass('b-top__servise');
                $(".b-serviceblock3").removeClass('b-top__servise');
                $(".b-serviceblock1").addClass('b-top__servise');
                $(".b-serviceblock2").addClass('b-bottom__servise');
                $(".b-serviceblock3").addClass('b-bottom__servise');
            }, 900);

            setTimeout(function(){
                $(".b-serviceblock1").addClass('b-double__width');
            }, 1500);


            setTimeout(function(){
                $('.b-serviceblock1 .b-serviceblock__inform').removeClass('b-closetabs');
                $('.b-serviceblock1 .b-serviceblock__inform').addClass('b-ativetabs');
            }, 2000);

        }
        else{
            setTimeout(function(){
                $(".b-serviceblock2").removeClass('b-top__servise');
                $(".b-serviceblock3").removeClass('b-top__servise');
                $(".b-serviceblock2").addClass('b-bottom__servise');
                $(".b-serviceblock3").addClass('b-bottom__servise');
            }, 0);

            setTimeout(function(){
                $(".b-serviceblock1").addClass('b-double__width');
            }, 300);


            setTimeout(function(){
                $('.b-serviceblock1 .b-serviceblock__inform').removeClass('b-closetabs');
                $('.b-serviceblock1 .b-serviceblock__inform').addClass('b-ativetabs');
            }, 600);

        }

    }
    isAnimate1 = false;
});
activeservice2.click(function(e){
    if(!isAnimate2)
    e.preventDefault();
    var $this = $(this);
    if($(".b-serviceblock2").hasClass('b-double__width') === true) {
        // $(".b-serviceblock1").addClass('b-top__servise');
        $(".b-serviceblock2").removeClass('b-double__width');
        $('.b-serviceblock2 .b-serviceblock__inform').removeClass('b-ativetabs');
        $('.b-serviceblock2 .b-serviceblock__inform').addClass('b-closetabs');

        setTimeout(function(){
            $(".b-serviceblock1").removeClass('b-bottom__servise');
            $(".b-serviceblock3").removeClass('b-bottom__servise');
            $(".b-serviceblock1").addClass('b-top__servise');
            $(".b-serviceblock3").addClass('b-top__servise');
        }, 900);

    }
    else {
        if($(".b-serviceblock2").hasClass('b-bottom__servise') === true) {
            $('.b-serviceblock1 .b-serviceblock__inform').removeClass('b-ativetabs');
            $('.b-serviceblock3 .b-serviceblock__inform').removeClass('b-ativetabs');
            $('.b-serviceblock1 .b-serviceblock__inform').addClass('b-closetabs');
            $('.b-serviceblock3 .b-serviceblock__inform').addClass('b-closetabs');
            $(".b-serviceblock1").removeClass('b-double__width');
            $(".b-serviceblock3").removeClass('b-double__width');
            setTimeout(function(){
                $(".b-serviceblock2").removeClass('b-bottom__servise');
                $(".b-serviceblock1").removeClass('b-top__servise');
                $(".b-serviceblock3").removeClass('b-top__servise');
                $(".b-serviceblock2").addClass('b-top__servise');
                $(".b-serviceblock1").addClass('b-bottom__servise');
                $(".b-serviceblock3").addClass('b-bottom__servise');
            }, 900);

            setTimeout(function(){
                $(".b-serviceblock2").addClass('b-double__width');
            }, 1500);


            setTimeout(function(){
                $('.b-serviceblock2 .b-serviceblock__inform').removeClass('b-closetabs');
                $('.b-serviceblock2 .b-serviceblock__inform').addClass('b-ativetabs');
            }, 2000);

        }
        else{
            setTimeout(function(){
                $(".b-serviceblock1").removeClass('b-top__servise');
                $(".b-serviceblock3").removeClass('b-top__servise');
                $(".b-serviceblock1").addClass('b-bottom__servise');
                $(".b-serviceblock3").addClass('b-bottom__servise');
            }, 0);

            setTimeout(function(){
                $(".b-serviceblock2").addClass('b-double__width');
            }, 300);


            setTimeout(function(){
                $('.b-serviceblock2 .b-serviceblock__inform').removeClass('b-closetabs');
                $('.b-serviceblock2 .b-serviceblock__inform').addClass('b-ativetabs');
            }, 600);

        }

    }
    isAnimate2 = false;
});
activeservice3.click(function(e){
    if(!isAnimate3)
    e.preventDefault();
    var $this = $(this);
    if($(".b-serviceblock3").hasClass('b-double__width') === true) {
        $('.b-serviceblock3 .b-serviceblock__inform').removeClass('b-ativetabs');
        $('.b-serviceblock3 .b-serviceblock__inform').addClass('b-closetabs');
        setTimeout(function(){
            $(".b-serviceblock3").removeClass('b-double__width');

        }, 0);

        setTimeout(function(){
            $(".b-serviceblock2").removeClass('b-bottom__servise');
            $(".b-serviceblock1").removeClass('b-bottom__servise');
            $(".b-serviceblock2").addClass('b-top__servise');
            $(".b-serviceblock1").addClass('b-top__servise');
        }, 900);

    }
    else {
        if($(".b-serviceblock3").hasClass('b-bottom__servise') === true) {
            $('.b-serviceblock2 .b-serviceblock__inform').removeClass('b-ativetabs');
            $('.b-serviceblock1 .b-serviceblock__inform').removeClass('b-ativetabs');
            $('.b-serviceblock2 .b-serviceblock__inform').addClass('b-closetabs');
            $('.b-serviceblock1 .b-serviceblock__inform').addClass('b-closetabs');
            $(".b-serviceblock2").removeClass('b-double__width');
            $(".b-serviceblock1").removeClass('b-double__width');

            setTimeout(function(){

                $(".b-serviceblock2").removeClass('b-top__servise');
                $(".b-serviceblock1").removeClass('b-top__servise');

                $(".b-serviceblock2").addClass('b-bottom__servise');
                $(".b-serviceblock1").addClass('b-bottom__servise');
                $(".b-serviceblock3").removeClass('b-bottom__servise');
                $(".b-serviceblock3").addClass('b-top__servise');

            }, 900);
            setTimeout(function(){

                $(".b-serviceblock3").addClass('b-double__width');
            }, 1500);

            setTimeout(function(){
                $('.b-serviceblock3 .b-serviceblock__inform').removeClass('b-closetabs');
                $('.b-serviceblock3 .b-serviceblock__inform').addClass('b-ativetabs');
            }, 2000);
        }
        else{
            setTimeout(function(){
                $(".b-serviceblock3").removeClass('b-top__servise');
                $(".b-serviceblock2").removeClass('b-top__servise');
                $(".b-serviceblock1").removeClass('b-top__servise');
                $(".b-serviceblock2").addClass('b-bottom__servise');
                $(".b-serviceblock1").addClass('b-bottom__servise');
            }, 0);

            setTimeout(function(){
                $(".b-serviceblock3").addClass('b-double__width');
            }, 300);


            setTimeout(function(){
                $('.b-serviceblock3 .b-serviceblock__inform').removeClass('b-closetabs');
                $('.b-serviceblock3 .b-serviceblock__inform').addClass('b-ativetabs');
            }, 600);

        }

        // $('.b-serviceblock2 .b-serviceblock__inform').removeClass('b-ativetabs');
        // $('.b-serviceblock3 .b-serviceblock__inform').removeClass('b-ativetabs');
        // $('.b-serviceblock2 .b-serviceblock__inform').addClass('b-closetabs');
        // $('.b-serviceblock3 .b-serviceblock__inform').addClass('b-closetabs');
        // $(".b-serviceblock2").removeClass('b-double__width');
        // $(".b-serviceblock3").removeClass('b-double__width');



    }
    isAnimate3 = false;
});

$(document).ready(function() {
    var numItems = $('li.fancyTab').length;


    if (numItems == 12){
        $("li.fancyTab").width('8.3%');
    }
    if (numItems == 11){
        $("li.fancyTab").width('9%');
    }
    if (numItems == 10){
        $("li.fancyTab").width('10%');
    }
    if (numItems == 9){
        $("li.fancyTab").width('11.1%');
    }
    if (numItems == 8){
        $("li.fancyTab").width('12.5%');
    }
    if (numItems == 7){
        $("li.fancyTab").width('14.2%');
    }
    if (numItems == 6){
        $("li.fancyTab").width('16.666666666666667%');
    }
    if (numItems == 5){
        $("li.fancyTab").width('20%');
    }
    if (numItems == 4){
        $("li.fancyTab").width('25%');
    }
    if (numItems == 3){
        $("li.fancyTab").width('33.3%');
    }
    if (numItems == 2){
        $("li.fancyTab").width('50%');
    }
});
$(document).ready(function() {
  $('.virt_tabs.Nav-item').on('click', function(event) {

    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
    }
    else {
      $('.virt_tabs.Nav-item').removeClass('is-active');
      $(this).addClass('is-active');
    }
  });
});






