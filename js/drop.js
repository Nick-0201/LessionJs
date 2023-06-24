const dropBtn = document.querySelector(".drop-down_menu-btn")
const dropMenu = document.querySelector(".drop-down__menu")

dropBtn.addEventListener("click", () => {

  dropMenu.classList.toggle("active")
});




export let dropExpo = 0;