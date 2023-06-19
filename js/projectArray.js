const project = [
  {
    imgUrl: "https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?w=2000",

    imgUrl: "Google",

    text: "Google Images — специальный сервис Google для поиска картинок в Интернете.    Googlebot- Image, поисковый робот, сканирующий страницы для индекса картинок, производит поиск изображений различных форматов.Аналогичные сервисы есть и у других поисковых систем - конкурентов Google.",
  },
  {
    imgUrl: "https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?w=2000",

    imgUrl: "Google",

    text: "Google Images — специальный сервис Google для поиска картинок в Интернете.    Googlebot- Image, поисковый робот, сканирующий страницы для индекса картинок, производит поиск изображений различных форматов.Аналогичные сервисы есть и у других поисковых систем - конкурентов Google.",
  },
  {
    imgUrl: "https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?w=2000",

    imgUrl: "Google",

    text: "Google Images — специальный сервис Google для поиска картинок в Интернете.    Googlebot- Image, поисковый робот, сканирующий страницы для индекса картинок, производит поиск изображений различных форматов.Аналогичные сервисы есть и у других поисковых систем - конкурентов Google.",
  },

];
const content = document.querySelector(".project__content");

project.map(item => {
  content.innerHTML += `
  <div class="project__item">
  <img class="project__img" src="${item.imgUrl}"alt="img google">
  <h2 class="project__title">${item.title}</h2>
  <p class="project__text">${item.text}</p>
  </div>
  `
})
export let projectExpo = content