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

  on: {
    init() {
      updateProgress(this, ".reservation__progress-line");
      paintCards();
    },

    slideChange() {
      updateProgress(this, ".reservation__progress-line");
    },

    resize() {
      updateProgress(this, ".reservation__progress-line");
    },
  },
});

