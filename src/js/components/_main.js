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

function applyPhoneMask(input) {
  if (!input) return;

  input.addEventListener('input', (e) => {
    let digits = e.target.value.replace(/\D/g, '');

    if (digits.startsWith('8') || digits.startsWith('7')) {
      digits = digits.slice(1);
    }

    digits = digits.slice(0, 10);

    
    let result = '+7';
    if (digits.length >= 1) result += ' (' + digits.slice(0, 3);
    if (digits.length >= 4) result += ') ' + digits.slice(3, 6);
    if (digits.length >= 7) result += '-' + digits.slice(6, 8);
    if (digits.length >= 9) result += '-' + digits.slice(8, 10);

    e.target.value = result;
  });

  input.addEventListener('focus', () => {
    if (!input.value) input.value = '+7';
  });

  input.addEventListener('blur', () => {
    if (input.value === '+7') input.value = '';
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && input.value.replace(/\D/g, '').length <= 1) {
      e.preventDefault();
      input.value = '';
    }
  });
}

applyPhoneMask(document.querySelector('#phone'));
applyPhoneMask(document.querySelector('#reservationPhone'));

const dateTimeInputs = document.querySelectorAll(
  '.reservation__fieldDate input, .reservation__fieldTime input'
);

dateTimeInputs.forEach((input) => {

  const toggleEmpty = () => {
    input.classList.toggle('is-empty', !input.value);
  };

  toggleEmpty();
  input.addEventListener('input', toggleEmpty);
  input.addEventListener('change', toggleEmpty);
  input.addEventListener('blur', toggleEmpty);
});