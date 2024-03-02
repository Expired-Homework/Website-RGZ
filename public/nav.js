const nav = document.querySelector("nav");
const navMenu = document.getElementById("menu");
const navMenuClose = document.getElementById("close-menu");
const navLinks = document.querySelectorAll("nav a");
const mainContent = document.querySelector(".main-content");

function showNav() {
  nav.classList.add("full-nav-screen");
  navMenu.classList.add("hide");
  for (let link of navLinks) {
    link.classList.add("show-block");
  }
  navMenuClose.classList.add("show-inline-block");
  mainContent.classList.add("hide");
}

function hideNav() {
  nav.classList.remove("full-nav-screen");
  navMenu.classList.remove("hide");
  for (let link of navLinks) {
    link.classList.remove("show-block");
  }
  navMenuClose.classList.remove("show-inline-block");
  mainContent.classList.remove("hide");
}
