const hamburgerButton = document.querySelector(".hamburger-icon-js");
const closeHamburgerButton = document.querySelector(".close-hamburger");

const hamburgerSectionEl = document.querySelector(".hamburger-section");

const hamburgerMainCont = document.querySelector(".h-main-container");

hamburgerButton.addEventListener('click',()=>{
  hamburgerSectionEl.classList.add('active');
  hamburgerMainCont.classList.add('vate');
});

closeHamburgerButton.addEventListener('click',()=> {
  hamburgerSectionEl.classList.remove('active');

})