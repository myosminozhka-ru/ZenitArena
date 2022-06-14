import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';
import $ from 'jquery';
import 'slick-carousel';

import MainHeader from '../blocks/modules/header/header.js';
import Modals from '../blocks/modules/modals/modals.js';

$(function() {
    $('.hasChild a span').on('click', function() {
        $(this).parents('.hasChild').toggleClass('isActive');
    });
    $('.sl_js').slick({
        dots: true,
        arrows: true,
        infinite: false
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
        mainHeader: new MainHeader({
            isMobileMenuOpened: false,
        }),
        modals: new Modals({
            modalsSelector: "data-modal",
            modalsOpenerSelector: "data-modal-id",
            openedClass: "isOpened"
        })
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
        this.modals.init();
    },
    computed: {
        isMobile: function () {
            return this.sizes.window < this.sizes.mobile;
        },
        isTablet: function () {
            return this.sizes.window < this.sizes.tablet && this.sizes.window > this.sizes.mobile;
        }
    },
});