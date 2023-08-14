const hamburgerMenuContainer = document.querySelector('.left-side__hamburger');
const hamburgerMenuIcon = document.querySelector('#hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCart = document.querySelector('.right-side__shopping-cart');
const shoppingCartIcon = document.querySelector('#shopping-cart-icon');
const shoppingCartMenu = document.querySelector('.shopping-cart');

const accountEmail = document.querySelector('.right-side__account');
const accountArrow = document.querySelector('#account-arrow');
const accountMenu = document.querySelector('.right-side__account-menu');

const productDetailContainer = document.querySelector('.product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail__close');
const mainContainer = document.querySelector('main');

const cardsContainer = document.querySelector('.cards');
const productList = [];

// Changing Color Functions
function burgerMenuColor() {
  hamburgerMenuIcon.classList.toggle('light-golden');
}

function shoppingCartColor() {
  shoppingCartIcon.classList.toggle('light-golden')
}

function arrowColor() {
  accountArrow.classList.toggle('light-golden');
}

// Show and Hide Components
function toggleMobileMenu() {
  mobileMenu.classList.toggle('mobile-menu--inactive');
  shoppingCartMenu.classList.add('shopping-cart--inactive');
}

function toggleShoppingCartMenu() {
  shoppingCartMenu.classList.toggle('shopping-cart--inactive');
  mobileMenu.classList.add('mobile-menu--inactive');
  productDetailContainer.classList.add('product-detail--inactive');
}

function toggleAccountMenu() {
  accountMenu.classList.toggle('right-side__account-menu--inactive');
}

function openProductDetail() {
  productDetailContainer.classList.remove('product-detail--inactive');
}

function closeProductDetail() {
  productDetailContainer.classList.add('product-detail--inactive');
}

function closeMenus() {
  shoppingCartMenu.classList.add('shopping-cart--inactive');
  accountMenu.classList.add('right-side__account-menu--inactive');
}

// Rendering the products in productList to HTML
function renderProducts(array) {
  for (product of array) {
    // Creating elements and setting their attributes
    const productCard = document.createElement('div');
    productCard.classList.add('cards__product-card');
  
    const productImage = document.createElement('img');
    productImage.classList.add('cards__product-image');
    productImage.setAttribute('src', product.image);
    productImage.setAttribute('alt', product.imageDescription);
    productImage.addEventListener('click', openProductDetail);
  
    const productInfoContainer = document.createElement('div');
    productInfoContainer.classList.add('cards__product-info');
  
    const productDescriptionContainer = document.createElement('div');
    productDescriptionContainer.classList.add('cards__product-description');
  
    const productPrice = document.createElement('p');
    productPrice.classList.add('cards__product-price');
    productPrice.innerText = `COP ${product.price}`;
  
    const productName = document.createElement('p');
    productName.classList.add('cards__product-name');
    productName.innerText = product.name;
  
    const productAddToCartContainer = document.createElement('figure');
  
    const productTooltip = document.createElement('span');
    productTooltip.classList.add('cards__tooltip');
  
    if (product.isInCart === true) {
      productAddToCartContainer.innerHTML = '<svg width="44" height="44" viewBox="0 0 48 48" fill="#fff"><circle cx="24" cy="24" r="20" fill="#242321"/></g><path d="M13 14C12.4477 14 12 14.4477 12 15C12 15.5523 12.4477 16 13 16V14ZM15.2222 15L16.2026 14.8029C16.1087 14.3359 15.6985 14 15.2222 14V15ZM14.6863 17.4076C14.7952 17.9491 15.3223 18.2997 15.8638 18.1909C16.4052 18.082 16.7559 17.5548 16.647 17.0134L14.6863 17.4076ZM17.4444 25.0525C16.8922 25.0525 16.4444 25.5002 16.4444 26.0525C16.4444 26.6048 16.8922 27.0525 17.4444 27.0525V25.0525ZM28.5556 26.0525V27.0525C28.9336 27.0525 29.2793 26.8394 29.449 26.5016L28.5556 26.0525ZM33 17.2105L33.8935 17.6596C34.0493 17.3496 34.0333 16.981 33.8512 16.6857C33.6691 16.3903 33.347 16.2105 33 16.2105V17.2105ZM15.6667 16.2105C15.1144 16.2105 14.6667 16.6582 14.6667 17.2105C14.6667 17.7628 15.1144 18.2105 15.6667 18.2105V16.2105ZM16.4641 26.2496C16.5729 26.7911 17.1001 27.1418 17.6416 27.0329C18.183 26.924 18.5337 26.3969 18.4248 25.8554L16.4641 26.2496ZM16.647 17.0134C16.5382 16.4719 16.011 16.1213 15.4696 16.2301C14.9281 16.339 14.5774 16.8662 14.6863 17.4076L16.647 17.0134ZM18.1497 26.7615C18.5412 26.372 18.5429 25.7388 18.1534 25.3473C17.7639 24.9557 17.1308 24.9541 16.7392 25.3436L18.1497 26.7615ZM14.8967 28.5869L14.1914 27.8779L14.8967 28.5869ZM28.5556 31.4735C29.1078 31.4735 29.5556 31.0258 29.5556 30.4735C29.5556 29.9213 29.1078 29.4735 28.5556 29.4735V31.4735ZM28.5556 30.4735H27.5556C27.5556 30.7397 27.6616 30.9948 27.8503 31.1825L28.5556 30.4735ZM30.7778 32.684L30.0725 33.393C30.2599 33.5794 30.5135 33.684 30.7778 33.684V32.684ZM19.6667 32.684L18.8018 32.1821C18.7133 32.3345 18.6667 32.5077 18.6667 32.684H19.6667ZM19.6667 34.8945H18.6667C18.6667 35.0709 18.7133 35.244 18.8018 35.3965L19.6667 34.8945ZM13 16H15.2222V14H13V16ZM14.2418 15.1971L14.6863 17.4076L16.647 17.0134L16.2026 14.8029L14.2418 15.1971ZM17.4444 27.0525H28.5556V25.0525H17.4444V27.0525ZM29.449 26.5016L33.8935 17.6596L32.1065 16.7614L27.6621 25.6034L29.449 26.5016ZM33 16.2105H15.6667V18.2105H33V16.2105ZM18.4248 25.8554L16.647 17.0134L14.6863 17.4076L16.4641 26.2496L18.4248 25.8554ZM16.7392 25.3436L14.1914 27.8779L15.6019 29.2958L18.1497 26.7615L16.7392 25.3436ZM14.1914 27.8779C12.8511 29.2111 13.811 31.4735 15.6822 31.4735V29.4735C15.6421 29.4735 15.6255 29.4635 15.6173 29.4578C15.6047 29.4489 15.5894 29.4322 15.5789 29.407C15.5684 29.3817 15.5678 29.3602 15.57 29.3471C15.5714 29.3395 15.5748 29.3228 15.6019 29.2958L14.1914 27.8779ZM15.6822 31.4735H28.5556V29.4735H15.6822V31.4735ZM29.5556 30.4735C29.5556 29.81 30.0978 29.263 30.7778 29.263V27.263C29.0032 27.263 27.5556 28.6954 27.5556 30.4735H29.5556ZM30.7778 29.263C31.4578 29.263 32 29.81 32 30.4735H34C34 28.6954 32.5524 27.263 30.7778 27.263V29.263ZM32 30.4735C32 31.1371 31.4578 31.684 30.7778 31.684V33.684C32.5524 33.684 34 32.2516 34 30.4735H32ZM31.483 31.9751L29.2608 29.7646L27.8503 31.1825L30.0725 33.393L31.483 31.9751ZM20.5315 33.186C20.8068 32.7119 21.3711 32.4771 21.9088 32.6204L22.4239 30.6878C21.0185 30.3133 19.5324 30.9233 18.8018 32.1821L20.5315 33.186ZM21.9088 32.6204C22.4456 32.7635 22.8134 33.2451 22.8134 33.7893H24.8134C24.8134 32.3325 23.8301 31.0627 22.4239 30.6878L21.9088 32.6204ZM22.8134 33.7893C22.8134 34.3335 22.4456 34.8151 21.9088 34.9582L22.4239 36.8907C23.8301 36.5159 24.8134 35.2461 24.8134 33.7893H22.8134ZM21.9088 34.9582C21.3711 35.1015 20.8068 34.8667 20.5315 34.3926L18.8018 35.3965C19.5324 36.6553 21.0185 37.2653 22.4239 36.8907L21.9088 34.9582ZM20.6667 34.8945V32.684H18.6667V34.8945H20.6667Z" fill="#fff"/><circle cx="32" cy="16" r="6" fill="#d6aa69"/><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5228 14.2423C34.2877 14.032 33.9261 14.0514 33.7157 14.2872L31.1181 17.1905L29.9786 16.0355C29.7569 15.8107 29.3949 15.8083 29.1701 16.0302C28.9455 16.252 28.9429 16.614 29.1648 16.8388L30.7316 18.4266C30.8391 18.5356 30.9858 18.5966 31.1387 18.5966C31.1432 18.5966 31.1478 18.5966 31.1528 18.5966C31.3105 18.5928 31.4596 18.5238 31.5646 18.406L34.5678 15.0492C34.7782 14.8142 34.7579 14.4525 34.5228 14.2423Z" fill="white" stroke="white" stroke-width="0.8"/><defs><filter id="filter0_d" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>';
      productAddToCartContainer.classList.add('cards__product-added-to-cart');
      productTooltip.innerText = 'Added to Cart';
    } else {
      productAddToCartContainer.innerHTML = '<svg width="36" height="36" viewBox="0 0 40 40" fill="none"><circle style="width: 36px; height: 36px;" cx="20" cy="20" r="20" fill="#d6aa69"/><path d="M9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12V10ZM11.2222 11L12.2026 10.8029C12.1087 10.3359 11.6985 10 11.2222 10V11ZM10.6863 13.4076C10.7952 13.9491 11.3223 14.2997 11.8638 14.1909C12.4052 14.082 12.7559 13.5548 12.647 13.0134L10.6863 13.4076ZM13.4444 21.0525C12.8922 21.0525 12.4444 21.5002 12.4444 22.0525C12.4444 22.6048 12.8922 23.0525 13.4444 23.0525V21.0525ZM24.5556 22.0525V23.0525C24.9336 23.0525 25.2793 22.8394 25.449 22.5016L24.5556 22.0525ZM29 13.2105L29.8935 13.6596C30.0493 13.3496 30.0333 12.981 29.8512 12.6857C29.6691 12.3903 29.347 12.2105 29 12.2105V13.2105ZM11.6667 12.2105C11.1144 12.2105 10.6667 12.6582 10.6667 13.2105C10.6667 13.7628 11.1144 14.2105 11.6667 14.2105V12.2105ZM12.4641 22.2496C12.5729 22.7911 13.1001 23.1418 13.6416 23.0329C14.183 22.924 14.5337 22.3969 14.4248 21.8554L12.4641 22.2496ZM12.647 13.0134C12.5382 12.4719 12.011 12.1213 11.4696 12.2301C10.9281 12.339 10.5774 12.8662 10.6863 13.4076L12.647 13.0134ZM14.1497 22.7615C14.5412 22.372 14.5429 21.7388 14.1534 21.3473C13.7639 20.9557 13.1308 20.9541 12.7392 21.3436L14.1497 22.7615ZM10.8967 24.5869L10.1914 23.8779L10.8967 24.5869ZM24.5556 27.4735C25.1078 27.4735 25.5556 27.0258 25.5556 26.4735C25.5556 25.9213 25.1078 25.4735 24.5556 25.4735V27.4735ZM24.5556 26.4735H23.5556C23.5556 26.7397 23.6616 26.9948 23.8503 27.1825L24.5556 26.4735ZM26.7778 28.684L26.0725 29.393C26.2599 29.5794 26.5135 29.684 26.7778 29.684V28.684ZM15.6667 28.684L14.8018 28.1821C14.7133 28.3345 14.6667 28.5077 14.6667 28.684H15.6667ZM15.6667 30.8945H14.6667C14.6667 31.0709 14.7133 31.244 14.8018 31.3965L15.6667 30.8945ZM9 12H11.2222V10H9V12ZM10.2418 11.1971L10.6863 13.4076L12.647 13.0134L12.2026 10.8029L10.2418 11.1971ZM13.4444 23.0525H24.5556V21.0525H13.4444V23.0525ZM25.449 22.5016L29.8935 13.6596L28.1065 12.7614L23.6621 21.6034L25.449 22.5016ZM29 12.2105H11.6667V14.2105H29V12.2105ZM14.4248 21.8554L12.647 13.0134L10.6863 13.4076L12.4641 22.2496L14.4248 21.8554ZM12.7392 21.3436L10.1914 23.8779L11.6019 25.2958L14.1497 22.7615L12.7392 21.3436ZM10.1914 23.8779C8.85112 25.2111 9.81103 27.4735 11.6822 27.4735V25.4735C11.6421 25.4735 11.6255 25.4635 11.6173 25.4578C11.6047 25.4489 11.5894 25.4322 11.5789 25.407C11.5684 25.3817 11.5678 25.3602 11.57 25.3471C11.5714 25.3395 11.5748 25.3228 11.6019 25.2958L10.1914 23.8779ZM11.6822 27.4735H24.5556V25.4735H11.6822V27.4735ZM25.5556 26.4735C25.5556 25.81 26.0978 25.263 26.7778 25.263V23.263C25.0032 23.263 23.5556 24.6954 23.5556 26.4735H25.5556ZM26.7778 25.263C27.4578 25.263 28 25.81 28 26.4735H30C30 24.6954 28.5524 23.263 26.7778 23.263V25.263ZM28 26.4735C28 27.1371 27.4578 27.684 26.7778 27.684V29.684C28.5524 29.684 30 28.2516 30 26.4735H28ZM27.483 27.9751L25.2608 25.7646L23.8503 27.1825L26.0725 29.393L27.483 27.9751ZM16.5315 29.186C16.8068 28.7119 17.3711 28.4771 17.9088 28.6204L18.4239 26.6878C17.0185 26.3133 15.5324 26.9233 14.8018 28.1821L16.5315 29.186ZM17.9088 28.6204C18.4456 28.7635 18.8134 29.2451 18.8134 29.7893H20.8134C20.8134 28.3325 19.8301 27.0627 18.4239 26.6878L17.9088 28.6204ZM18.8134 29.7893C18.8134 30.3335 18.4456 30.8151 17.9088 30.9582L18.4239 32.8907C19.8301 32.5159 20.8134 31.2461 20.8134 29.7893H18.8134ZM17.9088 30.9582C17.3711 31.1015 16.8068 30.8667 16.5315 30.3926L14.8018 31.3965C15.5324 32.6553 17.0185 33.2653 18.4239 32.8907L17.9088 30.9582ZM16.6667 30.8945V28.684H14.6667V30.8945H16.6667Z" fill="white"/><circle cx="29" cy="13" r="6" fill="white"/><path d="M31.5263 12.5263H29.4737V10.4737C29.4737 10.2147 29.2653 10 29 10C28.7411 10 28.5263 10.2084 28.5263 10.4737V12.5263H26.4737C26.2147 12.5263 26 12.7347 26 13C26 13.1326 26.0505 13.2463 26.1389 13.3347C26.2274 13.4232 26.3411 13.4737 26.4737 13.4737H28.5263V15.5263C28.5263 15.6589 28.5768 15.7726 28.6653 15.8611C28.7537 15.9495 28.8674 16 29 16C29.2589 16 29.4737 15.7916 29.4737 15.5263V13.4737H31.5263C31.7853 13.4737 32 13.2653 32 13C32 12.7411 31.7916 12.5263 31.5263 12.5263Z" fill="#d6aa69" stroke="#d6aa69"/></svg>';
      productAddToCartContainer.classList.add('cards__product-add-to-cart');
      productTooltip.innerText = 'Add to Cart';
    }
  
    // HTML Layout
    productCard.append(productImage, productInfoContainer);
  
    productInfoContainer.append(productDescriptionContainer, productAddToCartContainer);
  
    productDescriptionContainer.append(productPrice, productName);
  
    productAddToCartContainer.appendChild(productTooltip);
  
    cardsContainer.appendChild(productCard);
  }
}

// Switching the colors of 'hamburgerMenu' when clicking it
hamburgerMenuContainer.addEventListener('touchstart', burgerMenuColor);
hamburgerMenuContainer.addEventListener('touchend', burgerMenuColor);

// Making 'mobileMenu' visible or hidden whenever 'hamburgerMenuContainer' is clicked
hamburgerMenuContainer.addEventListener('click', toggleMobileMenu);

// Switching the colors of 'shoppingCartIcon' when clicking it
shoppingCart.addEventListener('touchstart', shoppingCartColor);
shoppingCart.addEventListener('touchend', shoppingCartColor);

// Making 'shoppingCartMenu' visible or hidden whenever 'shoppingCart' is clicked
shoppingCart.addEventListener('click', toggleShoppingCartMenu);

// Switching the colors of 'accountArrow' when hovering 'accountEmail'
accountEmail.addEventListener('mouseover', arrowColor);
accountEmail.addEventListener('mouseout', arrowColor);

// Making 'accountMenu' visible or hidden whenever 'accountEmail' is clicked
accountEmail.addEventListener('click', toggleAccountMenu);

// Closing 'productDetailContainer' when clicking the close icon
productDetailCloseIcon.addEventListener('click', closeProductDetail);

// Closing any menus when clicking outside of it
mainContainer.addEventListener('click', closeMenus);
productDetailContainer.addEventListener('click', closeMenus);

// Adding Products to productList
productList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692050084/Lamoure/product_earrings1_yy9bou.jpg",
  imageDescription: 'Earrings: Blue eyes with large eyelashes and with three pearls hanging on each of them',
  price: 15000,
  name: "Eye Earrings",
  isInCart: false
})

productList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692050084/Lamoure/product_earrings2_tx3e3g.jpg",
  imageDescription: 'Earrings: Golden sea starts with one pearl hanging on each of them',
  price: 15000,
  name: "Sea Star Earrings",
  isInCart: false
})

productList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692050084/Lamoure/product_earrings3_jrqqbf.jpg",
  imageDescription: 'Earrings: Golden Shells',
  price: 15000,
  name: "Shell Earrings",
  isInCart: true
})

productList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692050085/Lamoure/product_necklace3_fotydm.jpg",
  imageDescription: 'Necklace: Black Quartz',
  price: 25000,
  name: "Black Quartz Necklace",
  isInCart: true
})

productList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692050085/Lamoure/product_earrings4_eybpce.jpg",
  imageDescription: 'Earrings: Silver vertical rectangles with a hole in the middle',
  price: 15000,
  name: "Silver Earrings",
  isInCart: false
})

productList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692050085/Lamoure/product_earrings5_tbmzlt.jpg",
  imageDescription: 'Earrings: Yellow circles with three smaller yellow circles above forming a triangle',
  price: 15000,
  name: "Yellow Earrings",
  isInCart: false
})

productList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692050085/Lamoure/product_earrings6_je9tzi.jpg",
  imageDescription: 'Earrings: Pink circles with a circled hole in the middle and a smaller pink circle above',
  price: 15000,
  name: "Pink Earrings",
  isInCart: true
})

productList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692050085/Lamoure/product_necklace2_tzetzr.jpg",
  imageDescription: 'Necklace: Yellow Quartz',
  price: 25000,
  name: "Yellow Quartz Necklace",
  isInCart: false
})

productList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692050084/Lamoure/product_bracelet1_pjvdqq.jpg",
  imageDescription: 'Bracelet: Owl',
  price: 10000,
  name: "Owl Bracelet",
  isInCart: false
})

productList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692050084/Lamoure/product_bracelet2_jvlbxl.jpg",
  imageDescription: 'Bargain: x3 Bracelet; Hand, Wing, and Coin',
  price: 20000,
  name: "x3 Bracelet",
  isInCart: true
})

productList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692050085/Lamoure/product_earrings7_tqrxc2.jpg",
  imageDescription: 'Earrings: Cyan circles with three smaller cyan circles above forming a triangle',
  price: 15000,
  name: "Cyan Earrings",
  isInCart: false
})

productList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692050085/Lamoure/product_earrings8_ajpoag.jpg",
  imageDescription: 'Earrings: Golden Dandelions',
  price: 15000,
  name: "Dandelion Earrings",
  isInCart: false
})

productList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692050085/Lamoure/product_earrings9_a4fdag.jpg",
  imageDescription: 'Earrings: Small circles with three black circles on the bottom',
  price: 15000,
  name: "Black Earrings",
  isInCart: false
})

productList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692050085/Lamoure/product_earrings10_ipn62k.jpg",
  imageDescription: 'Earrings: Crystal Earrings',
  price: 15000,
  name: "Crystal Earrings",
  isInCart: false
})

productList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692050085/Lamoure/product_necklace1_ajsp7k.jpg",
  imageDescription: 'Necklace: White Quartz',
  price: 25000,
  name: "White Quartz Necklace",
  isInCart: true
})

productList.push({
  image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692050441/Lamoure/product_ring3_u22mq6.png",
  imageDescription: 'Ring: Pink Quartz',
  price: 12000,
  name: "Pink Quartz Ring",
  isInCart: false
})

renderProducts(productList);