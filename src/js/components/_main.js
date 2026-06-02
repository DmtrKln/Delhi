const reservationSwiper = new Swiper(".reservation__slider", {

  slidesPerView: 1,
  spaceBetween: 20,
  speed: 800,
  watchSlidesProgress: true,


  navigation: {
    prevEl: ".reservation__arrowLeft",
    nextEl: ".reservation__arrowRight",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

  },


});

