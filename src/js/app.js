import * as globalFunctions from "./modules/functions.js";
globalFunctions.isWebp();

import Vue from "vue/dist/vue.js";
import VCalendar from "v-calendar";
import $ from "jquery";
import "slick-carousel";
import Datepicker from "vanillajs-datepicker/Datepicker";
import ru from "vanillajs-datepicker/locales/ru";

import TabsBlock from "../blocks/modules/news_main/news_main.js";
// import Modals from '../blocks/modules/modals/modals.js';
$(document).ready(function () {
  var slideEl = $(".review__block");
  var slideBt = $(".review__btn");
  $(".review__btn:first-child").addClass("isActive");
  slideBt.click(function () {
    slideBt.removeClass("isActive");
    slideBt.removeClass("isActive");
    $(this).addClass("isActive");
    slideEl.hide();
    $("." + this.id).show();
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

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    infinite: false,
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
  });

  Object.assign(Datepicker.locales, ru);
  document.querySelectorAll(".date_block[data-date]").forEach((item) => {
    // console.log(item);
    if (item.dataset.dates) {
      const arrayDates = item.dataset.dates.split(", ")
      const startDate = item.dataset.start;
      if (startDate) {
        const arrayDate = startDate.split("/")
        new Datepicker(item, {
          language: "ru",
          maxNumberOfDates: arrayDates.length,
          datesDisabled: arrayDates,
          defaultViewDate: new Date(arrayDate[2], +arrayDate[1] - 1, +arrayDate[0], 0, 0, 0, 0)
        });
      } else {
        new Datepicker(item, {
          language: "ru",
          maxNumberOfDates: arrayDates.length,
          datesDisabled: arrayDates
        });
      }
    } else {
      new Datepicker(item, {
        language: "ru",
      });
    }
  });

  document.querySelectorAll(".dates_block[data-dates]").forEach((item) => {
    const arrayDates = item.dataset.dates.split(", ")
    const startDate = item.dataset.start;
    if (startDate) {
      const arrayDate = startDate.split("/")
      new Datepicker(item, {
        language: "ru",
        maxNumberOfDates: arrayDates.length,
        datesDisabled: arrayDates,
        defaultViewDate: new Date(arrayDate[2], +arrayDate[1] - 1, +arrayDate[0], 0, 0, 0, 0)
      });
    } else {
      new Datepicker(item, {
        language: "ru",
        maxNumberOfDates: arrayDates.length,
        datesDisabled: arrayDates
      });
    }


    item.addEventListener("click", function (e) {
          if (!e.target.dataset.date) return;
          const date = new Date(+e.target.dataset.date),
              day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
              month = ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)),
              resultDate = day + "/" + month + "/" + date.getFullYear();
              $(".calendar_block__day").hide(),
              $(`.calendar_block__day[data-day-event='${resultDate}']`).show(),
              $(".sl_js").slick("refresh");
              $(".dates__blocks").slick("refresh");
        });
  });

  setTimeout(() => {
    $(".calendar_block__day:not(:first-child)").hide();
  }, 500);

  $(".burger__icon").on("click", function () {
    $("html").addClass("owh");
    $(".burger__icon").addClass("isActive");
    $(this).addClass("isActive");
    $(".burger__body").addClass("isActive");
    $(".burger__close").addClass("isActive");
    $(document).on("click", function (e) {
      if (
        $(e.target).closest(".burger__body").length ||
        $(e.target).closest(".burger__icon").length
      )
        return;
      $("html").removeClass("owh");
      $(".burger__icon").removeClass("isActive");
      $(".burger__close").removeClass("isActive");
      $(".burger__body").removeClass("isActive");
    });
    $(".burger__close").on("click", function () {
      $("html").removeClass("owh");
      $(".burger__icon").removeClass("isActive");
      $(this).removeClass("isActive");
      $(".burger__body").removeClass("isActive");
    });
  });
  $(document).keydown(function (event) {
    if (event.which == 27) {
      $("html").removeClass("owh");
      $(".burger__icon").removeClass("isActive");
      $(".burger__close").removeClass("isActive");
      $(".burger__body").removeClass("isActive");
      $(".user_h").removeClass("isActive");
      $(".header").removeClass("isActive");
      $(".user_h").removeClass("isActive");
      $(".owf_block").removeClass("isActive");
    }
  });

  $(".user_h__icon").on("click", function () {
    $(".owf_block").toggleClass("isActive");
    $(".header").toggleClass("isActive");
    $(".user_h").toggleClass("isActive");
    $(document).on("click", function (e) {
      if (
        $(e.target).closest(".user_h__body").length ||
        $(e.target).closest(".user_h__icon").length
      )
        return;
      $(".user_h").removeClass("isActive");
      $(".header").removeClass("isActive");
      $(".user_h").removeClass("isActive");
      $(".owf_block").removeClass("isActive");
    });
  });

  if (window.matchMedia("(max-width: 1023px)").matches) {
    $(".review__button").on("click", function () {
      $(this).toggleClass("isActive");
      $(".owf_block").toggleClass("isActive");
      $("html").addClass("owh");
      $(this).parent().toggleClass("isActive");
      $(document).on("click", function (e) {
        if ($(e.target).closest(".review__button").length) return;
        $(".review__btn").hide();
        $(".review__button").removeClass("isActive");
        $("html").removeClass("owh");
        $(".owf_block").removeClass("isActive");
        $(".review__tabs").removeClass("isActive");
      });
    });

    $(".burger__icon").on("click", function () {
      $(document).on("click", function (e) {
        if ($(e.target).closest(".user_h__icon").length) return;
        if (
          $(".burger__icon").hasClass("isActive") ||
          $(".user_h__icon").hasClass("isActive") ||
          $(".burger__close").hasClass("isActive")
        ) {
          $("html").addClass("owh");
        } else {
          $("html").removeClass("owh");
        }
      });
    });

    $(".user_h").on("click", function () {
      $("html").addClass("owh");
      $(document).on("click", function (e) {
        if ($(e.target).closest(".burger__icon").length) return;
        if (
          $(".user_h").hasClass("isActive") ||
          $(".burger__icon").hasClass("isActive")
        ) {
          $("html").addClass("owh");
        } else {
          $("html").removeClass("owh");
        }
      });
    });

    $(".search_h__icon").on("click", function () {
      $(".search_h__body").addClass("isActive");
      $(document).on("click", function (e) {
        if (
          $(e.target).closest(".search_h__icon").length ||
          $(e.target).closest(".search_h__body").length
        )
          return;
        $(".search_h__body").removeClass("isActive");
      });
    });
    $(".search_h__close").on("click", function () {
      $(".search_h__body").removeClass("isActive");
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
$(function () {
  $(".hasChild a span").on("click", function () {
    $(this).parents(".hasChild").toggleClass("isActive");
  });

  $(".sl_js").slick({
    dots: true,
    arrows: true,
    infinite: false,
  });

  $(window).resize(function () {
    if (window.matchMedia("(min-width: 1331px)").matches) {
      $(".aside_r__item").prepend(
        $(".news_block__item .news_block:nth-child(2)")
      );
    }
    if (window.matchMedia("(min-width: 1025px)").matches) {
      $(".aside_r__item").prepend(
        $(".news_block__item .news_block:nth-child(2)")
      );
    }

    if (window.matchMedia("(max-width: 1330px)").matches) {
      $(".news_block__item").append($(".aside_r__item .news_block"));
    }

    if (window.matchMedia("(min-width: 1023px)").matches) {
      $(".l_block.block_calend").prepend($(".event_bl_m .calendar_block"));
    }

    if (window.matchMedia("(max-width: 1023px)").matches) {
      $(".event_bl_m").prepend($(".l_block.block_calend .calendar_block"));
    }
  });
  $(window).trigger("resize");

  $(".news_bl_photos_js").slick({
    dots: true,
    arrows: true,
    infinite: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          arrows: false,
        },
      },
    ],
  });

  $(".work_bl__top").on("click", function () {
    $(this)
      .parents(".work_bl__block")
      .find(".cards_bl")
      .toggleClass("isActive")
      .slideToggle();
    $(this).toggleClass("isActive");
    $(this).find(".work_bl__close").toggleClass("isActive");
    if ($(".work_bl__close").hasClass("isActive")) {
      $(this).find(".work_bl__close").text("Свернуть");
    } else {
      $(this).find(".work_bl__close").text("Подробнее");
    }
  });

  $(".work_bl__cls").on("click", function () {
    $(this).parent().find("> ul").toggleClass("isActive").slideToggle();
    $(this).toggleClass("isActive");
  });
});
Vue.use(VCalendar);

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
        if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };

    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});

window.app = new Vue({
  el: "#app",
  data: () => ({
    selectedDate: null,
    isMounted: false,
    statusAddPost: 0,
    upload: true,
    isFileInZone: false,
    activeItemUpload: null,
    dashoffsetAddNewPostSend: 1000,
    files: {
      cover: [],
      photo: [],
      video: [],
      document: [],
    },
    sizes: {
      tablet: 1024,
      mobile: 768,
      window: window.innerWidth,
    },
    tabsBlock: new TabsBlock({
      buttonsArray: [
        {
          name: "Мероприятия",
          value: "id1",
        },
        {
          name: "Развлечения",
          value: "id2",
        },
        {
          name: "Дела",
          value: "id3",
        },
        {
          name: "Сходка",
          value: "id4",
        },
      ],
    }),
    // modals: new Modals({
    //     modalsSelector: "data-modal",
    //     modalsOpenerSelector: "data-modal-id",
    //     openedClass: "isOpened"
    // })
  }),
  beforeCreate() {
    window.addEventListener("resize", () => {
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
      return (
        this.sizes.window < this.sizes.tablet &&
        this.sizes.window > this.sizes.mobile
      );
    },
    previewListCover() {
      return this.createArrayPreviewImg(this.files.cover, 'cover')
    },
    previewListPhoto() {
      return this.createArrayPreviewImg(this.files.photo, 'photo')
    },
    previewListVideo() {
      return this.createArrayPreviewImg(this.files.video, 'video')
    },
    previewListDocument() {
      const result = [];
      const re = /(\.txt|\.docx|\.doc|\.xls|\.xlsx)$/i;
      this.files.document.forEach((item, index) => {
        result.push({
          id: index,
          title: item.name.split('.')[0],
          name: item.name,
          format: item.name.split('.')[1],
          size: this.formatBytes(item.size),
          date: `${("0" + new Date().getDate()).slice(-2)}.${("0" + (new Date().getMonth() + 1)).slice(-2)}.${new Date().getFullYear()}`,
          time: `${("0" + new Date().getHours()).slice(-2)}:${("0" + new Date().getMinutes()).slice(-2)}`,
          isFailed: !re.exec(item.name)
        })
      })
      return result;
    },
    isShowPreview() {
      return this.files.cover.length || this.files.photo.length || this.files.video.length || this.files.document.length
    },

    acceptFilesUpload() {
      let result = '';

      switch (this.activeItemUpload) {
        case 'cover':
        case 'photo':
          result = '.jpg, .jpeg, .tiff, .png'
          break

        case 'video':
          result = '.mp4'
          break

        case 'document':
          result = '.txt, .docx, .doc, .xls, .xlsx'
          break
      }

      return result
    }
  },
  methods: {
    backPage() {
      window.history.length > 2
        ? window.history.back()
        : (document.location.href = "/");
    },
    backToAddPostForm() {
      if (this.statusAddPost === 2) {
        this.statusAddPost = 1;
        this.isFileInZone = false;
      }
    },
    showAddNewPostForm() {
      this.statusAddPost = 1;
    },
    OnDragEnter() {
      this.isFileInZone = true;
    },
    OnDragLeave() {

    },
    onDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      this.isDragging = false;
      const files = event.dataTransfer?.files || event.target?.files;
      if (this.activeItemUpload === 'cover' || this.activeItemUpload === 'video') {
        this.addFiles(Array.from(files)[Array.from(files).length - 1])
      } else {
        Array.from(files).forEach(file => this.addFiles(file));
      }
      this.statusAddPost = 1;
      this.isFileInZone = false;
    },
    showUpload(type) {
      this.activeItemUpload = type;
      this.statusAddPost = 2
    },
    formatBytes(bytes, decimals = 2) {
      if (bytes === 0) {
        return '0';
      } else {
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['байт', 'КБ', 'МБ', 'ГБ', 'ТБ'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
      }
    },
    createArrayPreviewImg(dataArray, type) {
      const result = [];

      dataArray.forEach((item, index) => {
        let re;
        switch (type) {
          case 'cover':
            re = /(\.jpg|\.jpeg|\.tiff|\.png)$/i;
            break;
          case 'photo':
            re = /(\.jpg|\.jpeg|\.tiff|\.png)$/i;
            break;
          case 'video':
            re = /(\.mp4)$/i;
            break;
        }

        result.push({
          id: index,
          name: item.name,
          src: URL.createObjectURL(item),
          isFailed: !re.exec(item.name)
        })
      })

      return result
    },
    addFiles(file) {
      switch (this.activeItemUpload) {
        case 'cover':
          this.files.cover = [file]
          break;
        case 'photo':
          this.files.photo.push(file)
          break;
        case 'video':
          this.files.video = [file]
          break;
        case 'document':
          this.files.document.push(file)
          break;
      }
    },
    removePreviewItem(type, name) {
      switch (type) {
        case 'cover':
          this.files.cover = this.files.cover.filter(item => item.name !== name)
          break;
        case 'photo':
          this.files.photo = this.files.photo.filter(item => item.name !== name)
          break;
        case 'video':
          this.files.video = this.files.video.filter(item => item.name !== name)
          break;
        case 'document':
          this.files.document = this.files.document.filter(item => item.name !== name)
          break;
      }
    },
    toSendDataNewPost() {
      const formData = new FormData();
      const form = document.getElementById('add_new_post_form');
      const fields = form.getElementsByClassName("add_new_post__form_field");
      let errors = {};

      Array.from(fields).forEach(field => {
        if(!field.value) {
          errors[field.name] = ''
          field.classList.add('error')
        } else {
          formData.append(field.name, field.value)
        }
      })

      formData.append('cover', this.filterSendArrayFile(this.files.cover, this.previewListCover))
      formData.append('photo', this.filterSendArrayFile(this.files.photo, this.previewListPhoto))
      formData.append('video', this.filterSendArrayFile(this.files.video, this.previewListVideo))
      formData.append('document', this.filterSendArrayFile(this.files.document, this.previewListDocument))

      if (Object.keys(errors).length === 0 && Object.getPrototypeOf(errors) === Object.prototype) {
        this.statusAddPost = 3;
        setTimeout(() => {
          this.dashoffsetAddNewPostSend = 0
        }, 0)
        setTimeout(() => {
        $.ajax({
          type: "POST",
          url: "/information/",
          data: formData,
          contentType: false,
          processData: false,
          dataType: "json",
          beforeSend: () => {
            this.statusAddPost = 3;
          },
          xhr: () =>
          {
            const xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", (evt) => {
              if (evt.lengthComputable) {
                const percentComplete = evt.loaded / evt.total;
                this.dashoffsetAddNewPostSend = 1000 - percentComplete * 10;
              }
            }, false);
            return xhr;
          },
          success: () => {
            fields.forEach(field => field.value = '');
            this.files.cover = [];
            this.files.photo = [];
            this.files.video = [];
            this.files.document = [];
            this.statusAddPost = 1;
          },
          error: () => {
            this.statusAddPost = 1;
          }
        })
        }, 1000)
      }
    },
    filterSendArrayFile(sendArray, viewArray){
      return sendArray.map(item => {
        return viewArray.some(innerItem => innerItem.name === item.name && innerItem.isFailed === false) ? item : false
      }).filter(item => item)
    },
    onFocusInputAndTextarea(event) {
      event.target.classList.remove('error')
    }
  },
});
$(function () {
  $(".day.selected").click(function () {
    $(this).parents(".date_block").find(".form-wrapper").addClass("opened");
    return false;
    $(".sl_js").slick({
      dots: true,
      arrows: true,
      swipe: false,
      infinite: false,
    });
  });
  $(".form-wrapper .icon-close").click(function () {
    $(".form-wrapper").removeClass("opened");
    return false;
  });
  $(document).click(function (event) {
    if ($(event.target).closest(".form-wrapper-inner").length) return;
    $(".form-wrapper").removeClass("opened");
    event.stopPropagation();
  });
  $(document).keydown(function (event) {
    if (event.which == 27) {
      $(".form-wrapper").removeClass("opened");
    }
  });

  $.each(
    $(".news_m_bl__block, .event_bl_m__block, .ad_main_bl__block"),
    function (index, item) {
      const objImg = new Image();
      const findImg = $(item).find("img");
      objImg.src = findImg.attr("src");
      objImg.onerror = function () {
        $(item).addClass("no_img");
      };
    }
  );
});
