function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup"); 
const blackout = document.querySelector("#blackout__menu")
const body = document.querySelector("body");
const popup__close__button = document.querySelector("#popup__close__button");

hamb.addEventListener("click", function () {
  menuOpen();
});
popup__close__button.addEventListener("click", popupClose);
blackout.addEventListener("click", popupClose);
document.addEventListener("DOMContentLoaded", isMobileAny);

let scrollPosition = 0;
const menuOpen = function () {
  scrollPosition = window.pageYOffset;
  popup.classList.add("open");
  body.classList.add("noscroll");
  blackout.classList.add("active");
  window.scrollTo(0, 0);
}

const menuClose = function () {
  popup.classList.remove("open");
  body.classList.remove("noscroll");
  blackout.classList.remove("active");
  window.scrollTo(0, 0);
};


document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    menuClose();
  }
});

function popupOpen() {
  menuOpen();
}

function popupClose() {
  menuClose();
}

const menuLists = document.querySelectorAll(".dropper__nav__menu__list");

menuLists.forEach(menuList => {
  const subMenu = menuList.querySelector('.dropper__nav__menu');
  const thisArrow = menuList.querySelector('._icon-arrow');

  thisArrow.addEventListener("click", () => {
    thisArrow.classList.toggle("active");
    if (subMenu.style.maxHeight) {
      subMenu.style.maxHeight = null;
    } else {
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
  });
});




function isMobileAny() {
  let isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  if (isMobile.any()) {
    document.querySelector("body").classList.add("touch");
  } else {
    document.querySelector("body").classList.add("mouse");
  }
}

// function loadNewsPictures(data) {
//   const sliderPictures = document.querySelector(".slides");
//   data.newsimage.forEach((item) => {
//     const newsimageId = item.id;
//     const newsimageName = item.name;
//     const newsimageUrl = item.url;
//     const newsimageImage = item.image;

//     let newsTemplateStart = `<a href="${newsimageUrl}" class="slide">`;
//     let newsTemplateEnd = "</a>";

//     let newsTemplateImage = `
//       <img id="slide-${newsimageId}" src="img/news/${newsimageImage}" alt="${newsimageName}"/>
//     `;

//     let newsTemplate = "";
//     newsTemplate += newsTemplateStart;
//     newsTemplate += newsTemplateImage;
//     newsTemplate += newsTemplateEnd;

//     sliderPictures.insertAdjacentHTML("beforeend", newsTemplate);
//   });
// }

// // function loadNewsNav(data) {
// //   const sliderNav = document.querySelector(".slider-nav");
// //   data.newsnavcircle.forEach((item) => {
// //     const newsnavcircleUrl = item.url;

// //     let newsTemplateStart = `<a href="${newsnavcircleUrl}" class="news-nav-circle">`;
// //     let newsTemplateEnd = "</a>";

// //     let newsTemplate = "";
// //     newsTemplate += newsTemplateStart;
// //     newsTemplate += newsTemplateEnd;

// //     sliderNav.insertAdjacentHTML("beforeend", newsTemplate);
// //   });
// // }

// // Fetch and load news data
// function loadNewsData() {
//   // Fetch the news data from the JSON file for news pictures
//   fetch("json/newsimage.json")
//     .then((response) => response.json())
//     .then((data) => {
//       // Call the function to create HTML elements using the news data
//       loadNewsPictures(data);
//     })
//     .catch((error) => {
//       console.error("Error fetching news pictures data:", error);
//     });

//   // Fetch the news data from the JSON file for news nav
// //   fetch("json/news-nav.json")
// //     .then((response) => response.json())
// //     .then((data) => {
// //       // Call the function to create HTML elements using the news data
// //       loadNewsNav(data);
// //     })
// //     .catch((error) => {
// //       console.error("Error fetching news nav data:", error);
// //     });
// }

// // Call the function to load news data and create HTML elements
//   loadNewsData();


