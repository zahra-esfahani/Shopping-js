import { getCookie } from "./utils/cookie.js";
import { products } from "./utils/requestLogin.js";
import { stringFunction } from "./utils/stringText.js";

const login = document.getElementById("situation");
const dashboard = document.getElementById("dashboard");
const productsParent = document.getElementById("element");
const search = document.getElementById("search");
const inputBox = document.getElementById("inpute-title");
const Items = document.querySelectorAll(".parent");
let data = null;
let inputValue="";
let Value="all";
// const title = document.querySelector(".title");
// const parent = document.querySelectorAll(".pro-element");

const showProducts = (products) => {
  productsParent.innerHTML = "";
  products.forEach((element) => {
    productsParent.innerHTML += `<div class="pro-element">
    <div class="price-parent">
    <div class="rate"><i class="fa fa-star" aria-hidden="true"></i>${
      element.rating.rate
    }</div>
    <div class="count"><i class="fa fa-user fa-fw"></i>${
      element.rating.count
    }</div>
    </div>
    <img class="img" src="${element.image}"/>
    <p class="title">${stringFunction(element.title)}</p>
    <div class="price-parent buy">
    <div class=""> $ ${element.price}</div>
    <div class="shop" onclick="BuyHandler('${element.id}')">Buy <i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
    </div>
    </div>
    `;
  });
  
};


const showTitle = () => {
   inputValue = inputBox.value.toLowerCase().trim();
 
  eventHandler()
};
const showidProduct = (event) => {
   Value = event.target.innerText.toLowerCase();

  eventHandler()
};

const eventHandler=()=>{
  let filterProducts=null;
  filterProducts=data.filter((product)=>{
    if(Value==="all"){
    return stringFunction(product.title).toLowerCase().includes(inputValue);
    }
    else{
      return stringFunction(product.title).toLowerCase().includes(inputValue) &&
      product.category.includes(Value);
    }
  })
 
  showProducts(filterProducts);
  }
  


const init = async () => {
  const cookie = getCookie();
  console.log(cookie);
  if (cookie) {
    login.style.display = "none";
  } else {
    dashboard.style.display = "none";
  }
  data = await products();
  showProducts(data);
};
const BuyHandler=()=>{

}

document.addEventListener("DOMContentLoaded", init);
search.addEventListener("click", showTitle);
Items.forEach((i) => {
  i.addEventListener("click", showidProduct);
});
