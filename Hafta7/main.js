import { product, category } from "./Product.js";

const select = document.querySelector("#selectId");
document.addEventListener("DOMContentLoaded", () => {
  let options = "";
  category.forEach((cat) => {
    options += `<option value="${cat.id}">${cat.name}</option>`;
  });
  select.innerHTML = options;
});

const searchInput = document.querySelector("#search");
const products = document.querySelector("#products");

searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value;
  const filteredProducts = product.filter((prod) => {
    return prod.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  displayProducts(filteredProducts);
  console.log(filteredProducts);
});

const displayProducts = (product) => {
  let output = "";
  product.forEach((prod) => {
    output += `
      <div class="product">
        <h2>${prod.name}</h2>
        <p>${prod.category}</p>
        <p>${prod.price}</p>
      </div>
    `;
  });
  products.innerHTML = output;
};
