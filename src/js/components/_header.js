const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const burgerIcon = document.querySelector('.header__burgerIcon');
const mobileMenu = document.querySelector('.header__mobile');
const mobileLinks = document.querySelectorAll('.header__mobileMenu a');
const SCROLLED_CLASS = 'scrolled';

const contactUs = document.querySelector('.contactUs');
const contactUsOverlay = document.querySelector('.contactUs__overlay');
const cross = document.querySelector('.contactUs__cross');

const headerBtn = document.querySelector('.header__btn');
const headerBtnMobile = document.querySelector('.header__tellMobile');
const bidBtn = document.querySelector('.bid__btn');
const mobileBtn = document.querySelector('.header__mobileBtn');

function updateScrollLock() {
  const anyOpen =
    mobileMenu?.classList.contains('active') ||
    contactUs?.classList.contains('active');
  document.body.classList.toggle('overflow', anyOpen);
}

// скролл хедера
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle(SCROLLED_CLASS, window.scrollY >= 10);
  });
}

// --- мобильное меню ---
function openMenu() {
  burgerIcon?.classList.add('active');
  mobileMenu?.classList.add('active');
  updateScrollLock();
}
function closeMenu() {
  burgerIcon?.classList.remove('active');
  mobileMenu?.classList.remove('active');
  updateScrollLock();
}

burger?.addEventListener('click', () => {
  mobileMenu?.classList.contains('active') ? closeMenu() : openMenu();
});

mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

// --- модалка ---
function openModal() {
  contactUs?.classList.add('active');
  contactUsOverlay?.classList.add('active');
  updateScrollLock();
}
function closeModal() {
  contactUs?.classList.remove('active');
  contactUsOverlay?.classList.remove('active');
  updateScrollLock();
}

[headerBtn, headerBtnMobile, bidBtn, mobileBtn].forEach(btn => {
  btn?.addEventListener('click', openModal);
});

cross?.addEventListener('click', closeModal);
contactUsOverlay?.addEventListener('click', (e) => {
  if (e.target === contactUsOverlay) closeModal();
});