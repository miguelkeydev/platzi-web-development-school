const headerAccountMenu = document.querySelector('.account__container');
const accountMenu = document.querySelector('.desktop-menu');

headerAccountMenu.addEventListener('click', toggleAccountMenu);

function toggleAccountMenu() {
  accountMenu.classList.toggle('inactive');
}