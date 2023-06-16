
const burger = document.querySelector(".header__burger");
const navmenu = document.querySelector(".header__list");

burger.addEventListener("click", () => {
  burger.classList.toggle("-active")
  navmenu.classList.toggle("-active")
})



export let burgerExpo = burger

