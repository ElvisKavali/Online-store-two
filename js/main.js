const products = [
    { id: 1, name: "Product 1", price: "ksh12000.00" },
    { id: 2, name: "Product 2", price: "ksh16000.00" },
    { id: 3, name: "Product 3", price: "ksh20000.00" },
    { id: 4, name: "Product 4", price: "ksh25000.00" },
    { id: 5, name: "Product 5", price: "ksh30000.00" },
    { id: 6, name: "product 6", price: "ksh45000.oo" },
    { id: 7, name: "Product 7", price: "ksh120.00" },
    { id: 8, name: "Product 8", price: "ksh16000.00" },
    { id: 9, name: "Product 9", price: "ksh2000.00" },
    { id: 10, name: "Product 10", price: "ksh25000.00" },
    { id: 11, name: "Product 11", price: "ksh10000.00" },
    { id: 12, name: "product 12", price: "ksh40000.oo" },
    { id: 13, name: "Product 13", price: "ksh12000.00" },
    { id: 14, name: "Product 14", price: "ksh13000.00" },
    { id: 15, name: "Product 15", price: "ksh30000.00" },
    { id: 16, name: "Product 16", price: "ksh19000.00" },
    { id: 17, name: "Product 17", price: "ksh700000.00" },
    { id: 18, name: "product 18", price: "ksh8000.oo" },
];

const productList = document.getElementById("product-list");

products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
});

function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}
