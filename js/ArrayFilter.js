const names = [
  "Nick",
  "jhones",
  "Alex",
]

// Просто рисуем html li 

// const list = document.querySelector(".add__list");
// for (let i = 0; i < names.length; i++) {
//   list.innerHTML += `
//   <li class="add__item">
//   <a href="#" class="add__link">${names[i]}</a>
//   </li>
//   `
// }

// теперь мы хотим фильтровать элементы

// работа с filter 

const list = document.querySelector(".add__list");

const filtredName = names.filter(item => item[0] === "N")

for (let i = 0; i < filtredName.length; i++) {
  list.innerHTML += `
  <li class="add__item">
  <a href="#" class="add__link">${filtredName[i]}</a>
  </li>
  `
}

export let addListExpo = 0;