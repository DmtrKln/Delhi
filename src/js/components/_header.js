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

burger.addEventListener('click', () => {
  burgerIcon.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.querySelector('body').classList.toggle('overflow');
});



//модалка
const headerBtn = document.querySelector('.header__btn');
const headerBtnMobile = document.querySelector('.header__tellMobile');
const contactUs = document.querySelector('.contactUs');
const cross = document.querySelector('.contactUs__cross');
const contactUsOverlay = document.querySelector('.contactUs__overlay');

[headerBtn, headerBtnMobile, cross].forEach(btn => {
  btn?.addEventListener('click', () => {
    contactUs.classList.toggle('active');
    contactUsOverlay.classList.toggle('active');
    document.querySelector('body').classList.toggle('overflow');
  })
})

contactUsOverlay?.addEventListener('click', (e) =>{
  if(e.target === contactUsOverlay){
    contactUs.classList.remove('active');
    contactUsOverlay.classList.remove('active');
    document.querySelector('body').classList.remove('overflow');
  }
})


//отправить

// const contactUsBtn = document.querySelector('.contactUs__btn');
// const success = document.querySelector('.success')
// const overlaySucces = document.querySelector('.success__overlay');
// const crossSucces = document.querySelector('.success__cross');



// [contactUsBtn, crossSucces].forEach(btn => {
//   btn?.addEventListener('click', () => {
//     success.classList.toggle('active');
//     overlaySucces.classList.toggle('active');
//     document.querySelector('body').classList.toggle('overflow');
//   })
// })

// overlaySucces?.addEventListener('click', (e) => {
//   if (e.target === overlaySucces) {
//     success.classList.remove('active');
//     overlaySucces.classList.remove('active');
//     document.querySelector('body').classList.remove('overflow');
//   }
// });