import { getDataFromLocalStorage, createCard } from "./function.js";

const wrapper = document.getElementById("product-list");



document.addEventListener("DOMContentLoaded", function () {
  let data = getDataFromLocalStorage();
  if (data.length) {
    data.forEach((phone) => {
      let card = createCard(phone);
      wrapper.innerHTML += card;
    });
  }
});
