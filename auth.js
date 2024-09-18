import { authHandler } from "./utils/Autherization.js";
import { RequestLogin } from "./utils/HttpReques.js";
import { getCookie, setCookie } from "./utils/cookie.js";
import { validationForm } from "./utils/validation.js";

const input = document.querySelectorAll("input");
const button = document.querySelector("button");

const eventHandler = async (event) => {
  const userName = input[0].value;
  const password = input[1].value;
  const valid=validationForm(userName,password);
  if(!valid)return;
  const data = {
    userName,
    password,
  };
  const response = await RequestLogin("auth/login");
  setCookie(response.token);
  console.log(response);
  location.assign("index.html")
};


button.addEventListener("click", eventHandler);
document.addEventListener("DOMContentLoaded", authHandler);
