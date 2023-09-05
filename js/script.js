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

//CONST
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup__menu"); 
const blackout = document.querySelector("#blackout")
const body = document.querySelector("body");
const popupCloseButton = document.querySelector("#popup__menu__header__close__button");
const popupCatalogButton = document.querySelector("#popup__menu__catalog")
const popupBasketButton = document.querySelector("#popup__menu__basket");
const headerBasketButton = document.querySelector("#header__basket__button");
const menuLists = document.querySelectorAll(".dropper__nav__menu__list");
const popupBasket = document.querySelector("#popup__basket");
const popupBasketCloseButton = document.querySelector("#popup__basket__close__button");
const popupProfileCloseButton = document.querySelector("#popup__profile__close__button");
const popupProfile = document.querySelector("#popup__profile");
const headerProfileButton = document.querySelector("#header__profile__button");


//ADDEVENTLISTENER
hamb.addEventListener("click", function () {
  popupOpen();
});

popupCloseButton.addEventListener("click", function () {
  popupClose();
});

blackout.addEventListener("click", function () {
  popupClose();
  popupBasketClose();
  popupProfileClose();
});

document.addEventListener("DOMContentLoaded", function () {
  isMobileAny();
});

popupCatalogButton.addEventListener("click", function () {
  popupClose();
  setTimeout(function () {
    catalogOpen();
  }, 500);
  
});

popupBasketButton.addEventListener("click", function () {
  popupClose();
  setTimeout(function () {
    popupBasketOpen();
  }, 500);
});
headerBasketButton.addEventListener("click", function () {
  popupBasketOpen();
});

popupBasketCloseButton.addEventListener("click", function () {
  popupBasketClose();
});

headerProfileButton.addEventListener("click", function () {
  popupProfileOpen();
});

popupProfileCloseButton.addEventListener("click", function () {
  popupProfileClose();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    popupClose();
    popupBasketClose();
    popupProfileClose();
  }
});

menuLists.forEach(menuList => {
  const subMenu = menuList.querySelector('.dropper__nav__menu');
  const arrow = menuList.querySelector('._icon-arrow');

  arrow.addEventListener("click", () => {
    arrow.classList.toggle("active");
    if (subMenu.style.maxHeight) {
      subMenu.style.maxHeight = null;
    } else {
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
  });
});

//FUNCTION
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

function popupOpen() {
  popup.scrollTo(0, 0);
  popup.classList.add("open");
  body.classList.add("noscroll");
  blackout.classList.add("active");
}

function popupClose() {
  popup.classList.remove("open");
  body.classList.remove("noscroll");
  blackout.classList.remove("active");
}

function popupBasketOpen() {
  blackout.classList.add("active");
  body.classList.add("noscroll");
  popupBasket.classList.add("active");
}

function popupBasketClose() {
  blackout.classList.remove("active");
  body.classList.remove("noscroll");
  popupBasket.classList.remove("active");
}

function popupProfileOpen() {
  blackout.classList.add("active");
  body.classList.add("noscroll");
  popupProfile.classList.add("active");
}

function popupProfileClose() {
  blackout.classList.remove("active");
  body.classList.remove("noscroll");
  popupProfile.classList.remove("active");
}
// async function getProducts() {
//   const file = "json/products.json";
//   try {
//     let response = await fetch(file, {
//       method: "GET",
//     });
//     if (response.ok) {
//       let result = await response.json();
//       loadProducts(result);
//     } else {
//       alert("Ошибка");
//     }
//   } catch (error) {
//     console.error("Произошла ошибка:", error);
//   }
// }

// function loadProducts(data) {
//   const productsContainer = document.getElementById("products");
//   data.products.forEach((item) => {
//     const productId = item.id;
//     const productName = item.name;
//     const productTitle = item.title;
//     const productImage1 = item.image1;
//     const productImage2 = item.image2;
//     const productAlt = item.alt;
//     const productUrl = item.url;
//     const productOldPrice = item.oldprice;
//     const productPrice = item.price;

//     let productsTemplateStart = `<div class="product__box__wrap" id="${productId}">`;
//     let productsTemplateEnd = "</div>";

//     let productsTemplateContent = `
//       <div class="product__box">
//           <button class="product__box__favourite__button"><img src="img/favourite.svg" alt="" class="product__box__favourite__img"></button>
//           <a href="" class="product__box__img__link">
//               <div class="product__box__img__wrap" title="${productTitle}">
//                   <img src="img/${productImage1}" alt="${productAlt}" class="product__box__img" title="${productTitle}">
//               </div>
//               <div class="product__box__img__wrap">
//                   <img src="img/${productImage2}" alt="${productAlt}" class="product__box__img" title="${productTitle}">
//               </div>
//           </a>
//           <a href="${productUrl}" title="${productTitle}" class="product__box__title">${productName}</a>
//           <div class="product__box__prices">
//               <div class="product__box__old__price"><span class="product__box__old__price__number">${productOldPrice}</span><span class="product__box__old__price__currency">₴</span></div>
//               <div class="product__box__price"><span class="product__box__price__number">${productPrice}</span><span class="product__box__price__currency">₴</span></div>
//           </div> 
//       </div>
//     `;

//     let productsTemplate = "";
//     productsTemplate += productsTemplateStart;
//     productsTemplate += productsTemplateContent;
//     productsTemplate += productsTemplateEnd;

//     productsContainer.insertAdjacentHTML("beforeend", productsTemplate);
//   });
//   productsContainer.forEach((productContainer) => {
//     const productContainer = productsContainer.lastChild;
//     const oldPrice = productContainer.querySelector(
//       ".product__box__old__price"
//     );
//     const oldPriceNumber = oldPrice.querySelector(
//       ".product__box__old__price__number"
//     );
//     const oldPriceCurrency = oldPrice.querySelector(
//       ".product__box__old__price__currency"
//     );
//     if (
//       !oldPriceNumber.textContent.trim() ||
//       !oldPriceCurrency.textContent.trim()
//     ) {
//       oldPrice.classList.add("empty");
//     }
//   });
// }
// getProducts();

async function getProducts() {
  const file = "json/products.json";
  try {
    let response = await fetch(file, {
      method: "GET",
    });
    if (response.ok) {
      let result = await response.json();
      loadProducts(result);
    } else {
      alert("Ошибка");
    }
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

function loadProducts(data) {
  const productsContainer = document.getElementById("products");
  let productsTemplate = "";

  data.products.forEach((item) => {
    const productId = item.id;
    const productName = item.name;
    const productTitle = item.title;
    const productImage1 = item.image1;
    const productImage2 = item.image2;
    const productAlt = item.alt;
    const productUrl = item.url;
    const productOldPrice = item.oldprice;
    const productPrice = item.price;

    let productsTemplateStart = `<div class="product__box__wrap" id="${productId}">`;
    let productsTemplateEnd = "</div>";

    const formattedPrice = formatPrice(productPrice);
    const formattedOldPrice = formatPrice(productOldPrice);

    let productsTemplateContent = `
      <div class="product__box">
          <button class="product__box__favourite__button"><img src="img/favourite.svg" alt="" class="product__box__favourite__img"></button>
          <a href="${productUrl}" class="product__box__img__link">
              <div class="product__box__img__wrap" title="${productTitle}">
                  <img src="img/${productImage1}" alt="${productAlt}" class="product__box__img" title="${productTitle}">
              </div>
              <div class="product__box__img__wrap">
                  <img src="img/${productImage2}" alt="${productAlt}" class="product__box__img" title="${productTitle}">
              </div>
          </a>
          <a href="${productUrl}" title="${productTitle}" class="product__box__title">${productName}</a>
          <div class="product__box__prices">
              <div class="product__box__old__price"><span class="product__box__old__price__number">${formattedOldPrice}</span><span class="product__box__old__price__currency">₴</span></div>
              <div class="product__box__price"><span class="product__box__price__number">${formattedPrice}</span><span class="product__box__price__currency">₴</span></div>
          </div> 
      </div>
    `;

    productsTemplate += productsTemplateStart;
    productsTemplate += productsTemplateContent;
    productsTemplate += productsTemplateEnd;
  });
  productsContainer.innerHTML = productsTemplate;

  data.products.forEach((item) => {
    const productContainer = document.getElementById(item.id);
    const oldPrice = productContainer.querySelector(
      ".product__box__old__price"
    );
    const oldPriceNumber = oldPrice.querySelector(
      ".product__box__old__price__number"
    );
    const oldPriceCurrency = oldPrice.querySelector(
      ".product__box__old__price__currency"
    );
    if (
      !oldPriceNumber.textContent.trim() ||
      !oldPriceCurrency.textContent.trim()
    ) {
      oldPrice.classList.add("empty");
    }
  });
}

function formatPrice(price) {
  const priceString = price.toString();
  const parts = priceString.split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1] || "";
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "&nbsp;"
  );
  const formattedPrice =
    formattedIntegerPart + (decimalPart ? "." + decimalPart : "");
  return formattedPrice;
}

getProducts();
