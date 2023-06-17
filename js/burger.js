
const burger = document.querySelector(".header__burger");
const navmenu = document.querySelector(".header__list");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navmenu.classList.toggle("active");
})
document.querySelectorAll(".header__link").forEach(i =>
  i.addEventListener("click", () => {
    burger.classList.remove("active");
    navmenu.classList.remove("active");
  }))


export let burgerExpo = burger

