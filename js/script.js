let cart = JSON.parse(localStorage.getItem("cart")) || [];
/* =====================
   Dark Mode Toggle
   ===================== */

const darkBtn = document.createElement("button");
darkBtn.textContent = "Toggle Dark Mode";
darkBtn.style.marginTop = "10px";

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    if (header) header.appendChild(darkBtn);

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
/* Add to cart */
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart");
}

/* Display cart */
function displayCart() {
    const cartDiv = document.getElementById("cartItems");
    if (!cartDiv) return;

    cartDiv.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        cartDiv.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
        total += item.price;
    });

    cartDiv.innerHTML += `<h3>Total: ₹${total}</h3>`;
}

displayCart();