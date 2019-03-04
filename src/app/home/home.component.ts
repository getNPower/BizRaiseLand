import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import {AjaxService} from '../ajax.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../services/services.component.css'],
  providers: [AjaxService]
})
export class HomeComponent implements AfterViewInit {
  nameError = false;
  phoneError = false;
  formData = {
    phone: '',
    name: ''
  };
  constructor ( public ajaxService: AjaxService) { }
  onSubmit() {
    if (this.formData.name.length > 1) {
      this.nameError = false;
    } else { this.nameError = true; }
    if (this.formData.phone.length > 6) {
      this.formData.phone = this.formData.phone.replace(/\s/g, '');
      this.formData.phone = this.formData.phone.replace(/-/g, '');
      if ((this.formData.phone.search(/^\d+$/g) !== -1)) {
        this.phoneError = false;
      } else { this.phoneError = true; }
    } else { this.phoneError = true; }
    if (!this.phoneError && !this.nameError) {
      this.ajaxService.submit(this.formData);
      // console.log(this.ajaxService.receivedData);
    }
    // console.log(this.nameError, this.phoneError);
  }
  ngAfterViewInit() {
    $('.virt_tabs.Nav-item').on('click', function(event) {
      if ($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
      } else {
        $('.virt_tabs.Nav-item').removeClass('is-active');
        $(this).addClass('is-active');
      }
    });
    $('.b-servicemob__link').next().hide();
    setTimeout(function() {
      $('.b-servicemob__link').next().removeClass('b-bottom__border');
    }, 500);
    $('.b-servicemob__link').click(function() {
      $(this).next().slideToggle();
      $(this).next().addClass('b-bottom__border');
      $('.b-servicemob__link').not(this).next().stop(true, true).slideUp(1000).removeClass('b-bottom__border');
    });
    const activeservice1 = $('.b-serviceblock1 .b-serviceblock__link');
    const activeservice2 = $('.b-serviceblock2 .b-serviceblock__link');
    const activeservice3 = $('.b-serviceblock3 .b-serviceblock__link');
    const isAnimate1 = false;
    const isAnimate2 = false;
    const isAnimate3 = false;
    activeservice1.click(function(e) {
      if ( !isAnimate1 ) {
        e.preventDefault();
      }
      const $this = $(this);
      if ($('.b-serviceblock1').hasClass('b-double__width') === true) {
        // $(".b-serviceblock1").addClass('b-top__servise');
        $('.b-serviceblock1 .b-serviceblock__inform').removeClass('b-ativetabs');
        $('.b-serviceblock1 .b-serviceblock__inform').addClass('b-closetabs');
        setTimeout(function() {
          $('.b-serviceblock1').removeClass('b-double__width');

        }, 0);

        setTimeout(function() {
          $('.b-serviceblock2').removeClass('b-bottom__servise');
          $('.b-serviceblock3').removeClass('b-bottom__servise');
          $('.b-serviceblock2').addClass('b-top__servise');
          $('.b-serviceblock3').addClass('b-top__servise');
        }, 900);

      } else {
        if ($('.b-serviceblock1').hasClass('b-bottom__servise') === true) {
          $('.b-serviceblock2 .b-serviceblock__inform').removeClass('b-ativetabs');
          $('.b-serviceblock3 .b-serviceblock__inform').removeClass('b-ativetabs');
          $('.b-serviceblock2 .b-serviceblock__inform').addClass('b-closetabs');
          $('.b-serviceblock3 .b-serviceblock__inform').addClass('b-closetabs');
          $('.b-serviceblock2').removeClass('b-double__width');
          $('.b-serviceblock3').removeClass('b-double__width');
          setTimeout(function() {
            $('.b-serviceblock1').removeClass('b-bottom__servise');
            $('.b-serviceblock2').removeClass('b-top__servise');
            $('.b-serviceblock3').removeClass('b-top__servise');
            $('.b-serviceblock1').addClass('b-top__servise');
            $('.b-serviceblock2').addClass('b-bottom__servise');
            $('.b-serviceblock3').addClass('b-bottom__servise');
          }, 900);

          setTimeout(function() {
            $('.b-serviceblock1').addClass('b-double__width');
          }, 1500);


          setTimeout(function() {
            $('.b-serviceblock1 .b-serviceblock__inform').removeClass('b-closetabs');
            $('.b-serviceblock1 .b-serviceblock__inform').addClass('b-ativetabs');
          }, 2000);

        } else {
          setTimeout(function() {
            $('.b-serviceblock2').removeClass('b-top__servise');
            $('.b-serviceblock3').removeClass('b-top__servise');
            $('.b-serviceblock2').addClass('b-bottom__servise');
            $('.b-serviceblock3').addClass('b-bottom__servise');
          }, 0);

          setTimeout(function() {
            $('.b-serviceblock1').addClass('b-double__width');
          }, 300);


          setTimeout(function() {
            $('.b-serviceblock1 .b-serviceblock__inform').removeClass('b-closetabs');
            $('.b-serviceblock1 .b-serviceblock__inform').addClass('b-ativetabs');
          }, 600);

        }

      }
      // isAnimate1 = false;
    });
    activeservice2.click(function(e ) {
      if (!isAnimate2) {
        e.preventDefault();
      }
      const $this = $(this);
      if ($('.b-serviceblock2').hasClass('b-double__width') === true) {
        // $(".b-serviceblock1").addClass('b-top__servise');
        $('.b-serviceblock2').removeClass('b-double__width');
        $('.b-serviceblock2 .b-serviceblock__inform').removeClass('b-ativetabs');
        $('.b-serviceblock2 .b-serviceblock__inform').addClass('b-closetabs');

        setTimeout(function() {
          $('.b-serviceblock1').removeClass('b-bottom__servise');
          $('.b-serviceblock3').removeClass('b-bottom__servise');
          $('.b-serviceblock1').addClass('b-top__servise');
          $('.b-serviceblock3').addClass('b-top__servise');
        }, 900);

      } else {
        if ($('.b-serviceblock2').hasClass('b-bottom__servise') === true) {
          $('.b-serviceblock1 .b-serviceblock__inform').removeClass('b-ativetabs');
          $('.b-serviceblock3 .b-serviceblock__inform').removeClass('b-ativetabs');
          $('.b-serviceblock1 .b-serviceblock__inform').addClass('b-closetabs');
          $('.b-serviceblock3 .b-serviceblock__inform').addClass('b-closetabs');
          $('.b-serviceblock1').removeClass('b-double__width');
          $('.b-serviceblock3').removeClass('b-double__width');
          setTimeout(function() {
            $('.b-serviceblock2').removeClass('b-bottom__servise');
            $('.b-serviceblock1').removeClass('b-top__servise');
            $('.b-serviceblock3').removeClass('b-top__servise');
            $('.b-serviceblock2').addClass('b-top__servise');
            $('.b-serviceblock1').addClass('b-bottom__servise');
            $('.b-serviceblock3').addClass('b-bottom__servise');
          }, 900);

          setTimeout(function() {
            $('.b-serviceblock2').addClass('b-double__width');
          }, 1500);


          setTimeout(function() {
            $('.b-serviceblock2 .b-serviceblock__inform').removeClass('b-closetabs');
            $('.b-serviceblock2 .b-serviceblock__inform').addClass('b-ativetabs');
          }, 2000);

        } else {
          setTimeout(function() {
            $('.b-serviceblock1').removeClass('b-top__servise');
            $('.b-serviceblock3').removeClass('b-top__servise');
            $('.b-serviceblock1').addClass('b-bottom__servise');
            $('.b-serviceblock3').addClass('b-bottom__servise');
          }, 0);

          setTimeout(function() {
            $('.b-serviceblock2').addClass('b-double__width');
          }, 300);


          setTimeout(function() {
            $('.b-serviceblock2 .b-serviceblock__inform').removeClass('b-closetabs');
            $('.b-serviceblock2 .b-serviceblock__inform').addClass('b-ativetabs');
          }, 600);

        }

      }
      // isAnimate2 = false;
    });
    activeservice3.click(function(e) {
      if (!isAnimate3) {
        e.preventDefault();
      }
      const $this = $(this);
      if ($('.b-serviceblock3').hasClass('b-double__width') === true) {
        $('.b-serviceblock3 .b-serviceblock__inform').removeClass('b-ativetabs');
        $('.b-serviceblock3 .b-serviceblock__inform').addClass('b-closetabs');
        setTimeout(function() {
          $('.b-serviceblock3').removeClass('b-double__width');

        }, 0);

        setTimeout(function() {
          $('.b-serviceblock2').removeClass('b-bottom__servise');
          $('.b-serviceblock1').removeClass('b-bottom__servise');
          $('.b-serviceblock2').addClass('b-top__servise');
          $('.b-serviceblock1').addClass('b-top__servise');
        }, 900);

      } else {
        if ($('.b-serviceblock3').hasClass('b-bottom__servise') === true) {
          $('.b-serviceblock2 .b-serviceblock__inform').removeClass('b-ativetabs');
          $('.b-serviceblock1 .b-serviceblock__inform').removeClass('b-ativetabs');
          $('.b-serviceblock2 .b-serviceblock__inform').addClass('b-closetabs');
          $('.b-serviceblock1 .b-serviceblock__inform').addClass('b-closetabs');
          $('.b-serviceblock2').removeClass('b-double__width');
          $('.b-serviceblock1').removeClass('b-double__width');

          setTimeout(function() {

            $('.b-serviceblock2').removeClass('b-top__servise');
            $('.b-serviceblock1').removeClass('b-top__servise');

            $('.b-serviceblock2').addClass('b-bottom__servise');
            $('.b-serviceblock1').addClass('b-bottom__servise');
            $('.b-serviceblock3').removeClass('b-bottom__servise');
            $('.b-serviceblock3').addClass('b-top__servise');

          }, 900);
          setTimeout(function() {

            $('.b-serviceblock3').addClass('b-double__width');
          }, 1500);

          setTimeout(function() {
            $('.b-serviceblock3 .b-serviceblock__inform').removeClass('b-closetabs');
            $('.b-serviceblock3 .b-serviceblock__inform').addClass('b-ativetabs');
          }, 2000);
        } else {
          setTimeout(function() {
            $('.b-serviceblock3').removeClass('b-top__servise');
            $('.b-serviceblock2').removeClass('b-top__servise');
            $('.b-serviceblock1').removeClass('b-top__servise');
            $('.b-serviceblock2').addClass('b-bottom__servise');
            $('.b-serviceblock1').addClass('b-bottom__servise');
          }, 0);

          setTimeout(function() {
            $('.b-serviceblock3').addClass('b-double__width');
          }, 300);


          setTimeout(function() {
            $('.b-serviceblock3 .b-serviceblock__inform').removeClass('b-closetabs');
            $('.b-serviceblock3 .b-serviceblock__inform').addClass('b-ativetabs');
          }, 600);
        }
      }
      // isAnimate3 = false;
    });
    $('.ctaFormView').click(function() {
      $('.order-button__link').css('display', 'none');
      $('.cta_form').animate({width: 'toggle'});
    });
    $('a.scrollLink').click(function() {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + 'px'
      }, {
        duration: 500,
        easing: 'swing'
      });
      return false;
    });
    $(window).scroll(function () {
      if ($(this).scrollTop() < 100) {
        $('#mouse-scroll').fadeIn();
      } else {
        $('#mouse-scroll').fadeOut();
      }
    });
  }
}
