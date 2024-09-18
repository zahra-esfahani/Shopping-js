import { authHandler } from "./utils/Autherization.js";
import { userResponse } from "./utils/HttpReques.js";
import { getCookie } from "./utils/cookie.js";
const userParent = document.getElementById("user");
const Out= document.getElementById("situation");
const showUsers = (data) => {
  data.forEach((element) => {
    userParent.innerHTML += `
    <div class="parent">
    <span class="id-child">${element.id}</span>
    <div class="child">
    <i class="fa fa-user fa-fw"></i> Name:
    <p  class="p-color">${element.name.firstname} ${element.name.lastname} </p>
    </div>
    <div class="child">
    <i class="fa-solid fa-envelope"></i> Username:
    <p class="p-color">${element.username} </p>
    </div>
    <div class="child child-mail">
    <i class="fa-solid fa-envelope"></i> Email:
    <p class="p-color">${element.email} </p>
    </div>
    <div class="child">
    <i class="fa-solid fa-phone"></i> Phone:
    <p class="p-color">${element.phone} </p>
    </div>
    <div class="child child-address">
    <i class="fa-solid fa-envelope"></i> Address:
    <p class="p-color">${element.address.city}-${element.address.street}-${element.address.number}</p>
    </div>
   
    </div>
    
    `;
  });
};
const logOut=(event)=>{
  event.preventDefault();
 document.cookie="token=; max-age=0;"
}
const init = async () => {
  authHandler();
  const data = await userResponse("users?limit=5");
  console.log(data);
  showUsers(data);
};

document.addEventListener("DOMContentLoaded", init);
Out.addEventListener("click",logOut)
