// =============================== методы массива =========================================

// = = = = = = = = = = = = = =  = ----- Push -----= = = = = = = = = = = = = = = = =\
// const max = ["qerty", 123, false, null];
// const items = [
//   {
//     name: "bananana",
//     price: 200,
//     category: "food",
//   },
//   {
//     name: "fish",
//     price: 1200,
//     category: "food",
//   },
//   {
//     name: "pen",
//     price: 20,
//     category: "office",
//   },
//   {
//     name: "pencil",
//     price: 20,
//     category: "office",
//   },
//   {
//     name: "cola",
//     price: 80,
//     category: "drinks",
//   },
//   {
//     name: "fanta",
//     price: 80,
//     category: "drinks",
//   },
// ];
// const list = document.querySelector("ul");
// console.log(items);
// items.push({
//   name: "laptop",
//   price: 30000,
//   category: "techno",
// });
// console.log(items);
// for (let i = 0; i < items.length; i++) {
//   list.innerHTML += "<li>" + items[i].name + "</li>"
// }
// = = ----- особенности поведения в console.log после добовления елемента -----  = =  \

//  = = -----и это нормальное явление -----  = =  \

//= = = = = = = ----- Push добавляем объекты с помощью кнопок-----= = = = = = =\

// const max = ["qerty", 123, false, null];
// const items = [
//   {
//     name: "bananana",
//     price: 200,
//     category: "food",
//   },
//   {
//     name: "fish",
//     price: 1200,
//     category: "food",
//   },
//   {
//     name: "pen",
//     price: 20,
//     category: "office",
//   },
//   {
//     name: "pencil",
//     price: 20,
//     category: "office",
//   },
//   {
//     name: "cola",
//     price: 80,
//     category: "drinks",
//   },
//   {
//     name: "fanta",
//     price: 80,
//     category: "drinks",
//   },
// ];

// const list = document.querySelector("ul");

// for (let i = 0; i < items.length; i++) {
//   list.innerHTML += "<li>" + items[i].name + "</li>"
// }
// const btn = document.querySelector("button")
// const input = document.querySelector("input")

// btn.addEventListener("click", () => {

//   list.innerHTML = "";

//   items.push({
//     name: input.value,
//     price: 30000,
//     category: "techno",
//   });

//   for (let i = 0; i < items.length; i++) {
//     list.innerHTML += "<li>" + items[i].name + "</li>"
//   }

// })

//= = = = = = = ----- задание -----= = = = = = =\
//  создать input с добалением категории и цен
// const max = ["qerty", 123, false, null];
// const items = [
//   {
//     name: "bananana",
//     price: 200,
//     category: "food",
//   },
//   {
//     name: "fish",
//     price: 1200,
//     category: "food",
//   },
//   {
//     name: "pen",
//     price: 20,
//     category: "office",
//   },
//   {
//     name: "pencil",
//     price: 20,
//     category: "office",
//   },
//   {
//     name: "cola",
//     price: 80,
//     category: "drinks",
//   },
//   {
//     name: "fanta",
//     price: 80,
//     category: "drinks",
//   },
// ];

// const list = document.querySelector("ul");

// for (let i = 0; i < items.length; i++) {
//   list.innerHTML += "<li>" + items[i].name + " " + items[i].category + " " + items[i].price + "</li>"
// }
// const btn = document.querySelector("button")
// const inName = document.querySelector(".in_name")
// const inPrice = document.querySelector(".in_price")
// const inCategory = document.querySelector(".in_category")

// btn.addEventListener("click", () => {

//   list.innerHTML = " "

//   items.push({
//     name: inName.value,
//     price: inPrice.value,
//     category: inCategory.value,
//   });

//   inName.value = " ";
//   inPrice.value = " ";
//   inCategory.value = " ";

//   console.log(items);

//   for (let i = 0; i < items.length; i++) {
//     list.innerHTML += "<li>" + items[i].name + " " + items[i].category + " " + items[i].price + "</li>"
//   }

// })


// ========================================================================+

//= = = = = = = ----- домашка создать дроп даун на минималках -----= = = = = = =\

const outBtn = document.querySelector(".out-block__btn")
const block = document.querySelector(".in-block")
console.log(block);
outBtn.addEventListener("click", () => {
  if (block.className == "in-block none") {
    block.className = "in-block"
  } else { block.className += " none" }
});

const max = ["qerty", 123, false, null];
const items = [
  {
    name: "bananana",
    price: 200,
    category: "food",
  },
  {
    name: "fish",
    price: 1200,
    category: "food",
  },
  {
    name: "pen",
    price: 20,
    category: "office",
  },
  {
    name: "pencil",
    price: 20,
    category: "office",
  },
  {
    name: "cola",
    price: 80,
    category: "drinks",
  },
  {
    name: "fanta",
    price: 80,
    category: "drinks",
  },
];

const list = document.querySelector(".in-block__list");

for (let i = 0; i < items.length; i++) {
  list.innerHTML += "<li>" + items[i].name + " " + items[i].category + " " + items[i].price + "</li>"
}
const inBtn = document.querySelector(".in-block__btn")
const inName = document.querySelector(".in-name")
const inPrice = document.querySelector(".in-price")
const inCategory = document.querySelector(".in-category")

inBtn.addEventListener("click", () => {

  list.innerHTML = " "

  items.push({
    name: inName.value,
    price: inPrice.value,
    category: inCategory.value,
  });

  inName.value = " ";
  inPrice.value = " ";
  inCategory.value = " ";

  console.log([inCategory]);
  console.log(items);

  for (let i = 0; i < items.length; i++) {
    list.innerHTML += "<li>" + items[i].name + " " + items[i].category + " " + items[i].price + "</li>"
  }

})



// ========================================================================+