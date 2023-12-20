// let header = document.querySelector("header");

// window.addEventListener("scroll", () => {
//   header.classList.toggle("sticky", window.scrollY > 0);
// });

// updatet version for the new header
let header = document.querySelector("body > header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});
