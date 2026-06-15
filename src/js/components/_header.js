const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const burgerIcon = document.querySelector('.header__burgerIcon');
const SCROLLED_CLASS = 'scrolled';
const mobileMenu = document.querySelector('.header__mobile');
const mobileLinks = document.querySelectorAll('.header__mobileMenu a');

// скролл
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle(SCROLLED_CLASS, window.scrollY >= 10);
  });
}

// бургер
burger?.addEventListener('click', () => {
  burgerIcon?.classList.toggle('active');
  mobileMenu?.classList.toggle('active');
  document.body.classList.toggle('overflow');
});

// клик по ссылке в мобильном меню
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerIcon?.classList.remove('active');
    mobileMenu?.classList.remove('active');
    document.body.classList.remove('overflow');
  });
});

// модалка
const headerBtn = document.querySelector('.header__btn');
const headerBtnMobile = document.querySelector('.header__tellMobile');
const contactUs = document.querySelector('.contactUs');
const cross = document.querySelector('.contactUs__cross');
const contactUsOverlay = document.querySelector('.contactUs__overlay');
const bidBtn = document.querySelector('.bid__btn');
const mobileBtn = document.querySelector('.header__mobileBtn')

function openModal() {
  contactUs?.classList.add('active');
  contactUsOverlay?.classList.add('active');
  document.body.classList.add('overflow');
  if (header) header.style.zIndex = '0';
}


function closeModal() {
  contactUs?.classList.remove('active');
  contactUsOverlay?.classList.remove('active');
  document.body.classList.remove('overflow');
  if (header) header.style.zIndex = '';
}

[headerBtn, headerBtnMobile, bidBtn, mobileBtn].forEach(btn => {
  btn?.addEventListener('click', openModal);
});

cross?.addEventListener('click', closeModal);

contactUsOverlay?.addEventListener('click', (e) => {
  if (e.target === contactUsOverlay) closeModal();
});