const discountPrice = document.getElementById('price');
const discountRate = document.getElementById('discount');
const discountSubmit = document.getElementById('submit');
const discountOutput = document.getElementById('discount-output');

const couponPrice = document.getElementById('coupon-price');
const couponDiscount = document.getElementById('coupon-discount');
const couponSubmit = document.getElementById('coupon-submit');
const couponOutput = document.getElementById('coupon-output');

function calculateDiscount(price, discount, message) {
  event.preventDefault();
  let discountAmount;
  let finalPrice;
  // Validating if the required information has been given correctly
  if (price > -1 && price < 1 || discount > -1 && discount < 1) {
    return message.innerText = "You didn't fill out the form!";
  } else if (price < 0 || discount < 0) {
    return message.innerText = "You typed negative numbers!";
  } else if (discount > 99 && discount < 1900 || discount > 2023) {
    return message.innerText = "You can't type a discount larger than 99%!";
  } else if (price > 0 && discount >= 1900 && discount < 1995 || price > 0 && discount > 1995 && discount < 2023) {
    return message.innerText = "Invalid coupon. Try again!";
  } // If the coupon is right
    else if (price > 1 && discount == 1995) {
    discount = randomNumber(1, 96);
    discountAmount = ((price * discount) / 100).toFixed(2);
    finalPrice = (price - discountAmount).toFixed(2);
    return message.innerText = `You got a ${discount}% discount which deducted $${discountAmount}. The final price is $${finalPrice}`
  } // If there's a normal discount
    else {
    discountAmount = ((price * discount) / 100).toFixed(2);
    finalPrice = (price - discountAmount).toFixed(2);
    return message.innerText = `The discount is $${discountAmount} and the final price is $${finalPrice}`
  }
}

// Event Listener for Discount activity
discountSubmit.addEventListener('click', () => {
  calculateDiscount(discountPrice.value, discountRate.value, discountOutput);
});

// Event Listener for Discount activity using a coupon
couponSubmit.addEventListener('click', () => {
  calculateDiscount(couponPrice.value, couponDiscount.value, couponOutput);
})