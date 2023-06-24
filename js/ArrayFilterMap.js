// const names = [
//   "Nick",
//   "jhones",
//   "Alex",
//   "Nelly",
// ]

// Просто рисуем html li 

// const list = document.querySelector(".add__list");
// -----------------------------------------------------
// for (let i = 0; i < names.length; i++) {
//   list.innerHTML += `
//   <li class="add__item">
//   <a href="#" class="add__link">${names[i]}</a>
//   </li>
//   `
// }
// -----------------------------------------------------
// Альтернатива цыклу (for) это (map)
// names.map(item => {
//   list.innerHTML += `
//   <li class="add__item">
//   <a href="#" class="add__link">${item}</a>
//   </li>
//   `
// });
// -----------------------------------------------------
// теперь мы хотим фильтровать элементы
// работа с filter в For 
// const list = document.querySelector(".add__list");
// const filtredName = names.filter(item => item[0] === "N")
// for (let i = 0; i < filtredName.length; i++) {
//   list.innerHTML += `
//   <li class="add__item">
//   <a href="#" class="add__link">${filtredName[i]}</a>
//   </li>
//   `
// }
// -----------------------------------------------------
// работа с filter в map 

// const list = document.querySelector(".add__list");
// const filtredName = names.filter(item => item[0] === "N");
// filtredName.map(item => {
//   list.innerHTML += `
//   <li class="add__item">
//   <a href="#" class="add__link">${item}</a>
//   </li>
//   `
// });
// -----------------------------------------------------
// задание филтровать по букве
const names = [
  "Nick",
  "Jhones",
  "Alex",
  "Nelly",
]

const list = document.querySelector(".add__list");
const addbtn = document.querySelector(".add__btn");
const addinput = document.querySelector(".add__input");

// ------------------ рисуем html эдементы -------------
names.map(item => {
  list.innerHTML += `
  <li class="add__item">
  <a href="#" class="add__link">${item}</a>
  </li>
  `
});

addbtn.addEventListener("click", () => {
  list.innerHTML = ""
  const filtredName = names.filter(item => item.toLowerCase().includes(addinput.value.toLowerCase()));
  filtredName.map(item => {
    list.innerHTML += `
  <li class="add__item">
  <a href="#" class="add__link">${item}</a>
  </li>
  `});
});
console.log([document.querySelector(".input__add-file")]);
// -----------------------------------------------------

export let addListExpo = 0;