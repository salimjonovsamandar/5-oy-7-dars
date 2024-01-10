import { validate, getDataFromLocalStorage } from "./function.js";

const name = document.getElementById("name");
const price = document.getElementById("price");
const color = document.getElementById("color");
const type = document.getElementById("type");
const picture = document.getElementById("picture");
const description = document.getElementById("description");
const button = document.getElementById("button");
const form = document.getElementById("form");

button.addEventListener("click", function () {
  if (validate(name, price, color, type, picture, description)) {
    let phone = {
      name: name.value,
      price: price.value,
      color: color.value,
      type: type.value,
      picture: picture.value,
      description: description.value,
    };

    const data = getDataFromLocalStorage();
    data.push(phone);
    localStorage.setItem("phones", JSON.stringify(data));
    
    form.reset();
  } else {
    console.log("Validation error!");
  }
});
