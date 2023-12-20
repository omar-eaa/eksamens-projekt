// let header = document.querySelector("header");

// window.addEventListener("scroll", () => {
//   header.classList.toggle("sticky", window.scrollY > 0);
// });

// updatet version for the new header
let header = document.querySelector(".new-header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Get the button element
var productButton = document.getElementById("productButton");

// Add a click event listener
productButton.addEventListener("click", function () {
  // Navigate to the desired URL when the button is clicked
  window.location.href = "./page-html/produkt.html";
});
