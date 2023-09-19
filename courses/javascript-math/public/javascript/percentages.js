// --------------------------- Functions ---------------------------
function createDiscountForm(containerToAppend) {
  // --------- HTML Elements ---------
  // Discount Form
  const discountForm = document.createElement('form');
  discountForm.setAttribute('autocomplete', 'off');
  discountForm.classList.add('Grid-center', 'gap-1', 'w-4/5');
  // Price Label
  const discountPriceLabel = document.createElement('label');
  discountPriceLabel.setAttribute('for', 'discount-price');
  discountPriceLabel.innerText = `Type a price`;
  // Price Input
  const discountPriceInput = document.createElement('input');
  discountPriceInput.setAttribute('id', 'discount-price');
  discountPriceInput.setAttribute('type', 'number');
  discountPriceInput.setAttribute('placeholder', '$2000');
  discountPriceInput.classList.add('Activity-input');
  // Rate Label
  const discountRateLabel = document.createElement('label');
  discountRateLabel.setAttribute('for', 'discount-rate');
  discountRateLabel.innerText = `Type the discount rate`;
  // Rate Input
  const discountRateInput = document.createElement('input');
  discountRateInput.setAttribute('id', 'discount-rate');
  discountRateInput.setAttribute('type', 'number');
  discountRateInput.setAttribute('placeholder', '8%');
  discountRateInput.classList.add('Activity-input');
  // Submit
  const discountSubmit = document.createElement('input');
  discountSubmit.setAttribute('id', 'discount-submit');
  discountSubmit.setAttribute('type', 'submit');
  discountSubmit.classList.add('Activity-submit', 'mt-2');

  // Output
  const discountOutput = document.createElement('p');
  discountOutput.setAttribute('id', 'discount-output');
  discountOutput.classList.add('Activity-output');

  // --------- HTML Layout ---------
  // Discount Form and Output into Percentages Activity
  containerToAppend.append(discountForm, discountOutput);
  // Discount Price Label, Price Input, Rate Label, Rate Input, and Submit into Discount Form
  discountForm.append(discountPriceLabel, discountPriceInput, discountRateLabel, discountRateInput, discountSubmit);
}

function createDiscountCouponForm(containerToAppend) {
  // --------- HTML Elements ---------
  // Discount with Coupon Form
  const discountCouponForm = document.createElement('form');
  discountCouponForm.setAttribute('autocomplete', 'off');
  discountCouponForm.classList.add('Grid-center', 'gap-1', 'w-4/5', 'border-t-2', 'border-primary-900', 'pt-3');
  // Discount with Coupon Heading
  const discountCouponHeading = document.createElement('h2');
  discountCouponHeading.classList.add('Activity-subtitle', 'w-full', 'font-bold');
  discountCouponHeading.innerText = `Discount using a coupon`;
  // Price Label
  const discountCouponPriceLabel = document.createElement('label');
  discountCouponPriceLabel.setAttribute('for', 'discount-coupon-price');
  discountCouponPriceLabel.innerText = `Type a price`;
  // Price Input
  const discountCouponPriceInput = document.createElement('input');
  discountCouponPriceInput.setAttribute('id', 'discount-coupon-price');
  discountCouponPriceInput.setAttribute('type', 'number');
  discountCouponPriceInput.setAttribute('placeholder', '$5000');
  discountCouponPriceInput.classList.add('Activity-input');
  // Rate Label
  const discountCouponLabel = document.createElement('label');
  discountCouponLabel.setAttribute('for', 'discount-coupon');
  discountCouponLabel.classList.add('text-center', 'leading-4');
  discountCouponLabel.innerText = `Type a coupon to get a discount up to 95%`;
  // Coupon Hint
  const discountCouponHint = document.createElement('p');
  discountCouponHint.classList.add('text-xs');
  discountCouponHint.innerText = `Hint: JavaScript release year`;
  // Rate Input
  const discountCouponInput = document.createElement('input');
  discountCouponInput.setAttribute('id', 'discount-coupon');
  discountCouponInput.setAttribute('type', 'number');
  discountCouponInput.setAttribute('placeholder', '0000');
  discountCouponInput.classList.add('Activity-input');
  // Submit
  const discountCouponSubmit = document.createElement('input');
  discountCouponSubmit.setAttribute('id', 'discount-coupon-submit');
  discountCouponSubmit.setAttribute('type', 'submit');
  discountCouponSubmit.classList.add('Activity-submit', 'mt-2');

  // Output
  const discountCouponOutput = document.createElement('p');
  discountCouponOutput.setAttribute('id', 'discount-coupon-output');
  discountCouponOutput.classList.add('Activity-output');

  // --------- HTML Layout ---------
  // Discount with Coupon Form and Output into Percentages Activity
  containerToAppend.append(discountCouponForm, discountCouponOutput);
  // Discount Heading, Price Label, Price Input, Coupont Label, Coupon Hint, Coupon Input, and Submit into Discount with Coupon Form
  discountCouponForm.append(discountCouponHeading, discountCouponPriceLabel, discountCouponPriceInput, discountCouponLabel, discountCouponHint, discountCouponInput, discountCouponSubmit);
}

function addEventsToDiscountSubmit(submitButton, price, rate, functionToExecute, output) {
  submitButton.addEventListener('click', () => {
    event.preventDefault();
    functionToExecute(price.value, rate.value, output);
  });
}

function calculateDiscount(price, discount, output) {
  let discountAmount;
  let finalPrice;

  // Validating if the given information is correct
  switch (true) {
    case price === `` || discount === ``:
      return output.innerText = `You didn't fill out the form`;
  
    case price < 0 || discount < 0:
      return output.innerText = `You typed negative numbers`;
    
    case price > 99999999:
      return output.innerText = `You can't type such large price`;
    
    case discount > 99:
      return output.innerText = `You can't type a discount larger than 99%`;
    
    default:
      discountAmount = ((price * discount) / 100).toFixed(2);
      finalPrice = (price - discountAmount).toFixed(2);
      return output.innerText = `The discount is $${discountAmount} and the final price is $${finalPrice}`
  }
}

function calculateDiscountCoupon(price, coupon, output) {
  let discountAmount;
  let finalPrice;

  // Validating if the given information is correct
  switch (true) {
    case price === `` || coupon === ``:
      return output.innerText = `You didn't fill out the form`;
  
    case price < 0 || coupon < 0:
      return output.innerText = `You typed negative numbers`;
    
    case price > 99999999:
      return output.innerText = `You can't type such large price`;
    
    case coupon === '1995':
      const discount = randomNumber(1, 96);
      discountAmount = ((price * discount) / 100).toFixed(2);
      finalPrice = (price - discountAmount).toFixed(2);
      return output.innerText = `You got a ${discount}% discount which deducted $${discountAmount}. The final price is $${finalPrice}`
    
    default:
      return output.innerText = `Invalid coupon. Try again`;
  }
}
// ------------------------- Procedure -------------------------
const percentagesActivityContainer = activitiesContainersElements[1];

// --------------- Discount Activity ---------------
// Creating Discount Form
createDiscountForm(percentagesActivityContainer);

// Discount Elements
const discountPrice = document.getElementById('discount-price');
const discountRate = document.getElementById('discount-rate');
const discountSubmit = document.getElementById('discount-submit');
const discountOutput = document.getElementById('discount-output');

// Add eventListener for Discount Submit
addEventsToDiscountSubmit(discountSubmit, discountPrice, discountRate, calculateDiscount, discountOutput);

// --------------- Discount with Coupon Activity ---------------
// Creating Discount with Coupon Form
createDiscountCouponForm(percentagesActivityContainer);

// Discount with Coupon Elements
const discountCouponPrice = document.getElementById('discount-coupon-price');
const discountCoupon = document.getElementById('discount-coupon');
const discountCouponSubmit = document.getElementById('discount-coupon-submit');
const discountCouponOutput = document.getElementById('discount-coupon-output');

// Add eventListener for Discount with Coupon Submit
addEventsToDiscountSubmit(discountCouponSubmit, discountCouponPrice, discountCoupon, calculateDiscountCoupon, discountCouponOutput);