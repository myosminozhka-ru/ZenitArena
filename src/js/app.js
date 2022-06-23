import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';
import $ from 'jquery';
import 'slick-carousel';
// import 'responsive-tabs';

import MainHeader from '../blocks/modules/header/header.js';
// import Modals from '../blocks/modules/modals/modals.js';

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
            $('.aside_r').prepend($('.news_block__item .news_block:nth-child(2)'));
        }    
        if (window.matchMedia("(min-width: 1025px)").matches) {
            $('.aside_r').prepend($('.news_block__item .news_block:nth-child(2)'));
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
    
    // $('#responsiveTabsDemo').responsiveTabs({
    //     startCollapsed: 'accordion'
    // });
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
        mainHeader: new MainHeader({
            isMobileMenuOpened: false,
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
        this.mainHeader.init();
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