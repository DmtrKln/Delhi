const header = document.querySelector('.header');
const burger = document.querySelector(".header__burger");
const burgerIcon = document.querySelector('.header__burgerIcon')
const SCROLLED_CLASS = "scrolled";
const mobileMenu = document.querySelector(".header__mobile");

// скролл
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 10) {
      header.classList.add(SCROLLED_CLASS);
    }
    else {
      header.classList.remove(SCROLLED_CLASS);
    }
  })
}

//бургер
function toggleBurger() {
  burgerIcon.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}

burger.addEventListener('click', toggleBurger);



//модалка
const headerBtn = document.querySelector('.header__btn');
const headerBtnMobile = document.querySelector('.header__tellMobile');
const contactUs = document.querySelector('.contactUs');



function toggleContactUs() {
  contactUs.classList.toggle('active');
}

headerBtn.addEventListener('click', toggleContactUs);
headerBtnMobile.addEventListener('click', toggleContactUs)
cross.addEventListener('click', toggleContactUs);