// const test = document.querySelectorAll("li");
// console.log(test[2].innerText);
// test[2].innerText = "44"
// ========================================================================
// const btn = document.querySelector("button")
// btn.addEventListener("click", () => {
//   console.log("win");
// })
// ========================================================================
// const btn = document.querySelector("button");
// let i = 0;
// const arr = ["nick", "nick1", "nick2", "nick3", "nick4", "nick5", "nick6", "nick7",];
// btn.addEventListener("click", () => {
//   i++
//   console.log(arr[i]);
// });
// ========================================================================
// const li = document.querySelectorAll("li");
// const btn = document.querySelector("button");

// let i = 0;

// btn.addEventListener("click", () => {
//   // console.log(li[i].innerText);

//   if (i % 2 === 0) {
//     console.log("jup san");
//   } else {
//     console.log("tak san");
//   }
//   i++
// });
// ========================================================================
// const arr = ["nick", "nick1", "nick2", "nick3", "nick4", "nick5", "nick6", "nick7"];
// const ul = document.querySelector("ul")
// for (let i = 0;)
// ========================================================================
// const h1 = header.querySelector(".header__cotent") //он рабоает на много быстрее чем 
// const h2 = document.querySelector(".header__cotent") // он работает мение быстрее так как он проверяет весь локумент  
// ========================================================================
// const Arr = ["nick", "lex", "gust"];
// for (let i = 0; i < Arr.length; i++) {
//   console.log(Arr[i] == "lex")
// }
// ========================================================================
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   console.log("ты смогменя вызвать");
// })
// ========================================================================
// const arrtext = document.querySelector("ul")
// console.log(arrtext.innerText);
// ========================================================================
// пытался выводить по одному тексту а не по буквам 
// const arrtext = document.querySelectorAll("ul")
// let i = 0
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   i++
//   console.log(arrtext[i]);
// })
// ========================================================================
// const list = document.querySelector("ul")
// console.log(list.innerText);

// const btn = document.querySelector("button")
// btn.addEventListener("click", () => {

// })
// ========================================================================
// const list = document.querySelector("ul")
// const btn = document.querySelector("button")
// btn.addEventListener("click", () => {
//   console.log(list);
// })

// const arr = [
//   {
//     name: "bananana",
//     price: 50,
//     weight: 100,
//     category: "food"
//   }, {
//     name: "myshyk",
//     price: 0,
//     weight: 10000,
//     category: "food"
//   }, {
//     name: "laptop",
//     price: 500000,
//     weight: 1000,
//     category: "office"
//   }, {
//     name: "bus",
//     price: 500000,
//     weight: 100,
//     category: "vicle"
//   },
// ]

// const list = document.querySelector("ul")

// console.log(arr[0].name);

// for (let i = 0; i < arr.length; i++) {
//   list.innerHTML += `
//     <li>${arr[i].name} - ${arr[i].price}</li>
//   `
// }
// const title = document.querySelector("h1")

// title.innerText += ", world"
// ========================================================================



// пытался создать мини попап
// const btn = document.querySelector("button")
// const block = document.querySelector(".block_nono")
// console.log([block]);
// btn.addEventListener("click", () => {
//   if (block.className == "block_nono none") {
//     block.className = "block_nono"
//   } else {
//     block.className += " none"
//   }
// })
// console.log(block.className);


// ========================================================================
// методы массива и заемодействия с ним 
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
// for (let i = 0; i < max.length; i++) {
//   list.innerHTML += "<li>" + max[i], + "</li>"
// } 
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
// он не понимет что отрисовать в данный случии в объкте и по этому нам нужно четко указать 
// что отрисовать 
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
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
// for (let i = 0; i < max.length; i++) {
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// list.innerHTML += "<li>" + items[i] + "</li>"
// в этом случии он не понимает что отприсовать и по этому нам нужно указать что отрисовать в HTML
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// list.innerHTML += "<li>" + items[i].category + "</li>"
// вот мы и указали что отрисовать из объекта. в данным случии мы указали отрисовать .caregory
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// }
// ========================================================================

