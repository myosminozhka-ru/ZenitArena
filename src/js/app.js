import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';
import $ from 'jquery';
import 'slick-carousel';

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
            $(this).parent().toggleClass('isActive');
        });
        $(document).on('click', function(e){
            if($(e.target).closest('.review__button').length)
            return
            $('.review__btn').hide();
            $('.review__button').removeClass('isActive');
            $('.review__tabs').removeClass('isActive');
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
        })
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
            $('.news_bl__top').append($('.red_bl .news_bl__info'));
        }
        if (window.matchMedia("(max-width: 1024px)").matches) {
            $('.red_bl').prepend($('.news_bl__info'));
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
    
    $('.work_bl__close').on('click', function() {
        $(this).parents('.work_bl__block').find('.cards_bl').toggleClass('isActive').slideToggle();
        $(this).toggleClass('isActive');
        if ($(this).hasClass('isActive')) {
            $(this).text('Свернуть');
        } else {
            $(this).text('Подробнее');
        }
    });

    $('.work_bl__cls').on('click', function() {
        $(this).parent().find('> ul').toggleClass('isActive').slideToggle();
        $(this).toggleClass('isActive');    
    });
});

window.app = new Vue({
    el: '#app',
    data: () => ({
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