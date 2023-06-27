const nav = document.querySelector('nav');
const navButton = document.querySelector('nav button');
const navLinks = document.querySelectorAll('nav a');
const mainContent = document.querySelector('.main-content');

function showNav() {
  nav.classList.add('full-fixed-screen');
  navButton.classList.add('hide');
  for(let link of navLinks) {
      link.classList.add('show');
  }
  mainContent.classList.add('hide');
}