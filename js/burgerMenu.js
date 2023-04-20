let menu = document.getElementById("burger-menu");
let navButton = document.getElementById("nav-click");
navButton.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
  // menu.display = block;
});

//burger-menu

const burgerButton = document.querySelector("#nav-button");
const popup = document.querySelector("#popup");
const navList = document.getElementById("nav-list");
//const navItem = document.querySelectorAll(".nav-item");

burgerButton.addEventListener("click", menuHandler);

function menuHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  navList.classList.toggle("show-nav");
}
