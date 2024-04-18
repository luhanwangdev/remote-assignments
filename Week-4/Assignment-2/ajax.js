function ajax(src, callback) {
  // your code here
  fetch(src)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => callback(product));
    })
    .catch((err) => console.log(err));
}
function render(data) {
  // your code here
  // document.createElement() and appendChild() methods are preferred.
  const products = document.querySelector(".products");
  const product = document.createElement("div");
  product.className = "product";
  product.innerHTML = `
  <h2>Product name: ${data.name} </h2>
  <h3>price: ${data.price} </h3>
  <p>description: ${data.description} </p>
  `;
  products.appendChild(product);
}
ajax(
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page
