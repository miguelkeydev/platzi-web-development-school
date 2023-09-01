const discountButton = document.getElementById('discount-button');
const product = document.getElementById('product');
const productPrice = document.getElementById('product-price');
const productCoupon = document.getElementById('product-coupon');
const priceMessage = document.getElementById('price-message');

const couponsList = [];

couponsList.push({
  name: 'siu7',
  discount: 7,
})

couponsList.push({
  name: 'lm10',
  discount: 10,
})

couponsList.push({
  name: 'aa66',
  discount: 66,
})

function calculateDiscount(event) {
  function validateCoupon(element) {
    return element.name === coupon;
  }
    
  event.preventDefault();
  // Calculating Discount and Final Price
  const price = productPrice.value;
  const coupon = productCoupon.value;
  let finalPrice;

  // Validating if the form is filled correctly
  if (!product.value || !price) {
    return priceMessage.innerText = "You must fill out the form!";
  } else if (!coupon) {
    return priceMessage.innerText = "You didn't enter a coupon. Go and find one!";
  }

  const couponInArray = couponsList.find(validateCoupon);

  if (couponInArray) {
    finalPrice = (price * (100 - couponInArray.discount)) / 100;
    return priceMessage.innerText = `The discount is ${couponInArray.discount}% and the final price for your ${product.value} is ${finalPrice}$`;
  } else {
    return priceMessage.innerText = `Your coupon ${coupon} isn't valid. The final price for your ${product.value} is ${productPrice.value}$`
  }
}

discountButton.addEventListener('click', calculateDiscount);