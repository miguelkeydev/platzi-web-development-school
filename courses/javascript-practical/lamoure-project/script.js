const hamburgerMenuContainer = document.querySelector('.left-side__hamburger');
const hamburgerMenuIcon = document.querySelector('#hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const accountEmail = document.querySelector('.right-side__account');
const accountArrow = document.querySelector('#account-arrow');
const accountMenu = document.querySelector('.right-side__account-menu');

function burgerMenuColorGolden() {
  hamburgerMenuIcon.classList.toggle('light-golden');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('mobile-menu--inactive');
}

function arrowColorGolden() {
  accountArrow.classList.toggle('light-golden');
}

function toggleAccountMenu() {
  accountMenu.classList.toggle('right-side__account-menu--inactive');
}

// Switching the colors of 'hamburgerMenu' when clicking it
hamburgerMenuContainer.addEventListener('touchstart', burgerMenuColorGolden);
hamburgerMenuContainer.addEventListener('touchend', burgerMenuColorGolden);

// Making 'mobileMenu' visible or hidden whenever 'hamburgerMenuContainer' is cliced
hamburgerMenuContainer.addEventListener('click', toggleMobileMenu);

// Switching the colors of 'accountArrow' when hovering 'accountEmail'
accountEmail.addEventListener('mouseover', arrowColorGolden);
accountEmail.addEventListener('mouseout', arrowColorGolden);

// Making 'accountMenu' visible or hidden whenever 'accountEmail' is clicked
accountEmail.addEventListener('click', toggleAccountMenu);