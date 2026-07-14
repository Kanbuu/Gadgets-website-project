// const hamburgerButton = document.querySelector(".hamburger-icon-js");
// const closeHamburgerButton = document.querySelector(".close-hamburger");

// const hamburgerSectionEl = document.querySelector(".hamburger-section");

// const hamburgerMainCont = document.querySelector(".h-main-container");

// hamburgerButton.addEventListener('click',()=>{
//   hamburgerSectionEl.classList.add('active');
//   hamburgerMainCont.classList.add('vate');
// });

// closeHamburgerButton.addEventListener('click',()=> {
//   hamburgerSectionEl.classList.remove('active');

// })


const hamburger = document.querySelector(".hamburger-icon-js");
const mobileMenu = document.querySelector(".mobile-menu-js");
const closeBtn = document.querySelector(".close-menu-js");
const overlay = document.querySelector(".menu-overlay-js");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});