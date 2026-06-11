const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const SCROLLED_CLASS = 'scrolled';
const mobileMenu = document.querySelector('.header__mobile');

// скролл
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle(SCROLLED_CLASS, window.scrollY >= 10);
  });
}

// бургер
burger?.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu?.classList.toggle('active');
  document.body.classList.toggle('overflow');
});

// модалка
const headerBtn = document.querySelector('.header__btn');
const headerBtnMobile = document.querySelector('.header__tellMobile'); // сверь с HTML!
const contactUs = document.querySelector('.contactUs');
const cross = document.querySelector('.contactUs__cross');
const contactUsOverlay = document.querySelector('.contactUs__overlay');
const bidBtn = document.querySelector('.bid__btn');

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

[headerBtn, headerBtnMobile, bidBtn].forEach(btn => {
  btn?.addEventListener('click', openModal);
});

cross?.addEventListener('click', closeModal);

contactUsOverlay?.addEventListener('click', (e) => {
  if (e.target === contactUsOverlay) closeModal();
});