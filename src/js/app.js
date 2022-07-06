import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';
import VCalendar from 'v-calendar';
import $ from 'jquery';
import 'slick-carousel';
import Datepicker from 'vanillajs-datepicker/Datepicker';
import ru from 'vanillajs-datepicker/locales/ru';

import TabsBlock from '../blocks/modules/news_main/news_main.js';
// import Modals from '../blocks/modules/modals/modals.js';
$(document).ready(function () {
    var slideEl = $('.review__block');
    var slideBt = $('.review__btn');
    $('.review__btn:first-child').addClass('isActive');
    slideBt.click(function () {
        slideBt.removeClass('isActive');
        slideBt.removeClass('isActive');
        $(this).addClass('isActive');
        slideEl.hide();
        $('.' + this.id).show();
    });

    // Object.assign(Datepicker.locales, ru);
    // const elem = document.getElementById('date_block');
    // const datepicker = new Datepicker(elem, {
    //     language: 'ru'
    // }); 
    // addEventListener('click', function(){
    //     console.log('test');
    //     console.log(datepicker.getDate());
    // });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true
    });

    Object.assign(Datepicker.locales, ru);
    document.querySelectorAll('.date_block[data-date]').forEach((item) => {
        console.log(item)
        new Datepicker(item, {
            language: 'ru'
        })
    })

    $('.burger__icon').on('click', function() {
        $('html').addClass('owh');
        $('.burger__icon').addClass('isActive');
        $(this).addClass('isActive');
        $('.burger__body').addClass('isActive');
        $('.burger__close').addClass('isActive');
        $(document).on('click', function(e){
            if($(e.target).closest('.burger__body').length || $(e.target).closest('.burger__icon').length)
            return
            $('html').removeClass('owh');
            $('.burger__icon').removeClass('isActive');
            $('.burger__close').removeClass('isActive');
            $('.burger__body').removeClass('isActive');
        });
        $('.burger__close').on('click', function() {
            $('html').removeClass('owh');
            $('.burger__icon').removeClass('isActive');
            $(this).removeClass('isActive');
            $('.burger__body').removeClass('isActive');
        })
    });
    $(document).keydown(function(event){
        if (event.which == 27) {
            $('html').removeClass('owh');
            $('.burger__icon').removeClass('isActive');
            $('.burger__close').removeClass('isActive');
            $('.burger__body').removeClass('isActive');
            $('.user_h').removeClass('isActive');
            $('.header').removeClass('isActive');
            $('.user_h').removeClass('isActive');
            $('.owf_block').removeClass('isActive');
        }
    });

    $('.user_h__icon').on('click', function() {
        $('.owf_block').toggleClass('isActive');
        $('.header').toggleClass('isActive');
        $('.user_h').toggleClass('isActive');
        $(document).on('click', function(e){
            if($(e.target).closest('.user_h__body').length || $(e.target).closest('.user_h__icon').length)
            return
            $('.user_h').removeClass('isActive');
            $('.header').removeClass('isActive');
            $('.user_h').removeClass('isActive');
            $('.owf_block').removeClass('isActive');
        });
    })

    if (window.matchMedia("(max-width: 1023px)").matches) {
        $('.review__button').on('click', function() {
            $(this).toggleClass('isActive');
            $('.owf_block').toggleClass('isActive');
            $('html').addClass('owh');
            $(this).parent().toggleClass('isActive');
            $(document).on('click', function(e){
                if($(e.target).closest('.review__button').length)
                return
                $('.review__btn').hide();
                $('.review__button').removeClass('isActive');
                $('html').removeClass('owh');
                $('.owf_block').removeClass('isActive');
                $('.review__tabs').removeClass('isActive');
            });
        });

        $('.burger__icon').on('click', function() {
            $(document).on('click', function(e){
                if($(e.target).closest('.user_h__icon').length) 
                return
                if($('.burger__icon').hasClass('isActive') || $('.user_h__icon').hasClass('isActive') || $('.burger__close').hasClass('isActive')) {
                    $('html').addClass('owh');
                } else {
                    $('html').removeClass('owh');
                }
            });
        });

        $('.user_h').on('click', function() {
            $('html').addClass('owh');
            $(document).on('click', function(e){
                if($(e.target).closest('.burger__icon').length) 
                return
                if($('.user_h').hasClass('isActive') || $('.burger__icon').hasClass('isActive')) {
                    $('html').addClass('owh');
                } else {
                    $('html').removeClass('owh');
                }
            });
        });

        $('.search_h__icon').on('click', function() {
            $('.search_h__body').addClass('isActive');
            $(document).on('click', function(e){
                if($(e.target).closest('.search_h__icon').length || $(e.target).closest('.search_h__body').length)
                return
                $('.search_h__body').removeClass('isActive');
            });
        });
        $('.search_h__close').on('click', function() {
            $('.search_h__body').removeClass('isActive');
        });

        // var tfix = $('.header'),
        //     tfixOffset = tfix.offset(),
        //     hederHeight = $('.header').height();
        // $(window).scroll(function () {
        //     if ($(window).scrollTop() > tfixOffset.top) {
        //         if ($(window).scrollTop() > tfixOffset.top) {
        //         $('.wrapper').css({
        //             'paddingTop': hederHeight + 'px'
        //         });
        //         tfix.addClass('fixed');
        //         };
        //     } else {
        //         tfix.removeClass('fixed');
        //         $('.wrapper').css({
        //             'paddingTop': 0
        //         });
        //     };
        // });
    }
});
$(function() {

    $('.hasChild a span').on('click', function() {
        $(this).parents('.hasChild').toggleClass('isActive');
    });

    $('.sl_js').slick({
        dots: true,
        arrows: true,
        infinite: false
    });

    $(window).resize(function(){
        if (window.matchMedia("(min-width: 1331px)").matches) {
            $('.aside_r__item').prepend($('.news_block__item .news_block:nth-child(2)'));
        }    
        if (window.matchMedia("(min-width: 1025px)").matches) {
            $('.aside_r__item').prepend($('.news_block__item .news_block:nth-child(2)'));
        }  

        if (window.matchMedia("(max-width: 1330px)").matches) {
            $('.news_block__item').append($('.aside_r__item .news_block'));
        }
    
        if (window.matchMedia("(min-width: 1023px)").matches) {
            $('.l_block.block_calend').prepend($('.event_bl_m .calendar_block'));
        }    

        if (window.matchMedia("(max-width: 1023px)").matches) {
            $('.event_bl_m').prepend($('.l_block.block_calend .calendar_block'));
        }
    });
    $(window).trigger('resize');

    $('.news_bl_photos_js').slick({
        dots: true,
        arrows: true,
        infinite: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false   
                }
            },
            {
                breakpoint: 361,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    arrows: false   
                }
            }
        ]
    });    
    
    $('.work_bl__top').on('click', function() {
        $(this).parents('.work_bl__block').find('.cards_bl').toggleClass('isActive').slideToggle();
        $(this).toggleClass('isActive');
        $(this).find('.work_bl__close').toggleClass('isActive');
        if ($('.work_bl__close').hasClass('isActive')) {
            $(this).find('.work_bl__close').text('Свернуть');
        } else {
            $(this).find('.work_bl__close').text('Подробнее');
        }
    });

    $('.work_bl__cls').on('click', function() {
        $(this).parent().find('> ul').toggleClass('isActive').slideToggle();
        $(this).toggleClass('isActive');    
    });
});
Vue.use(VCalendar);
window.app = new Vue({
    el: '#app',
    data: () => ({
        selectedDate: null,
        isMounted: false,
        sizes: {
            tablet: 1024,
            mobile: 768,
            window: window.innerWidth
        },
        tabsBlock: new TabsBlock({
            buttonsArray : [
                {
                    name: 'Мероприятия',
                    value: 'id1'
                },
                {
                    name: 'Развлечения',
                    value: 'id2'
                },
                {
                    name: 'Дела',
                    value: 'id3'
                },
                {
                    name: 'Сходка',
                    value: 'id4'
                }
            ]
        }),
        // modals: new Modals({
        //     modalsSelector: "data-modal",
        //     modalsOpenerSelector: "data-modal-id",
        //     openedClass: "isOpened"
        // })
    }),
    beforeCreate() {        
        window.addEventListener('resize', () => {
            this.sizes.window = window.innerWidth;
        });
    },
    mounted() {

    },
    beforeMount() {
        this.isMounted = true;
        // this.modals.init();
    },
    computed: {
        isMobile: function () {
            return this.sizes.window < this.sizes.mobile;
        },
        isTablet: function () {
            return this.sizes.window < this.sizes.tablet && this.sizes.window > this.sizes.mobile;
        }
    },
    methods: {
        backPage() {
            window.history.length > 2 ? window.history.back() : document.location.href='/'
        }
    }
});