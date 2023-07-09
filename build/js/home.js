"use strict";
let productList = document.querySelector(".products-list");
document.addEventListener("DOMContentLoaded", function () {
	ListProducst();
});
function ListProducst() {
	productList.innerHTML = "";
	fetch("https://fakestoreapi.com/products")
		.then(res => res.json())
		.then(products => {
			products.forEach(product => {
				productList.innerHTML += `	<article class="card">
                <img
                    src=${product.image}
                    class="card-img"
                />
                <h3 class="card-title">${product.title}</h3>
                <p class="card-description">
                ${product.description}
                </p>
                <a href='/pages/productItem.html?productId=${product.id}' class="card-btn">Show details</a>
            </article>`;
			});
		});
}
