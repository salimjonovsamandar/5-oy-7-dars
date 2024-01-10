function isValidHttpUrl(string) {
  try {
    const newUrl = new URL(string);
    return newUrl.protocol === "http:" || newUrl.protocol === "https:";
  } catch (err) {
    return false;
  }
}

const validate = (name, price, color, type, picture, description) => {
  if (!name.value) {
    name.focus();
    alert("Please enter a name");
    return false;
  }
  if (name.value.trim().lenght <= 3) {
    name.focus();
    alert("At least 3 characters must be used in the name");
    return false;
  }

  if (!price.value) {
    price.focus();
    alert("Please enter a price");
    return false;
  }
  if (!Number(price.value)) {
    price.focus();
    alert("Price should be a number");
    return false;
  }

  if (price.value <= 10 || price.value >= 10000000) {
    price.focus();
    alert("Price very big or small");
    return false;
  }
  if (!type.value) {
    type.focus();
    alert("Please enter a type");
    return false;
  }

  if (!color.value) {
    color.focus();
    alert("Please select a color");
    return false;
  }
  if (!picture.value) {
    picture.focus();
    alert("Please enter a picture");
    return false;
  }
    if (!description.value) {
    description.focus();
    alert("Please enter a description");
    return false;
  }

  return true;
};

function getDataFromLocalStorage() {
  let data = [];
  if (localStorage.getItem("phones")) {
    data = JSON.parse(localStorage.getItem("phones"));
  }
  return data;
}

function createCard(phone) {
  return `
    <div class="row_main col-4 mb-5">
    <img width="200" height="300"
      src="${phone.picture}"
      class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="my-4 card-title">Name: ${phone.name}</h4>
      <div class="row">
        <h6 class="my-3 card-title text-danger fs-5 col-6">Color: ${phone.color}</h6>
        <h6 class="my-3 card-title text-primary fs-5 col-6">Price: ${phone.price} $</h6>
      </div>
      <p class="card-text">Description: ${phone.description}</p>
      <p class="card-text"><small class="text-muted">Type: ${phone.type}</small></p>
    </div>
  </div>
    `;
}

export { validate, isValidHttpUrl, getDataFromLocalStorage, createCard };
