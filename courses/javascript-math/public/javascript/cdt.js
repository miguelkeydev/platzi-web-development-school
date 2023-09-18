function addEventsToSubmitAmountToInvest(submitButton, invalidMessage) {
  submitButton.addEventListener('click', () => {
    event.preventDefault();
    amountToInvest = Number(amountToInvestInput.value);
    // Validating if the amount is valid
    switch (true) {
      case amountToInvest < 1:
        amounToInvestInvalid.innerText = "You typed an invalid amount of money";
        break;
      case amountToInvest >= 1 && amountToInvest < 1000:
        amounToInvestInvalid.innerText = "$1000 is the minimum amount of money to invest";
        break;
      case amountToInvest > 1000000000:
        amounToInvestInvalid.innerText = "$10000000 is the maximum amount of money to invest";
        break;
      default:
        invalidMessage.innerText = ``;
        hideShowContainers(amountToInvestContainer, termToInvestContainer);
        break;
    }
    // Resetting "Amount to Invest Input" value
    amountToInvestInput.value = "";
  });
}

function addTermToInvestOptions(array) {
  // 1 Month
  array.push({
    labelId: 'term-1-label',
    inputId: 'term-1',
    term: '1 Month',
    rate: '12.8%'
  });
  // 2 Months
  array.push({
    labelId: 'term-2-label',
    inputId: 'term-2',
    term: '2 Months',
    rate: '13.1%'
  });
  // 3 Months
  array.push({
    labelId: 'term-3-label',
    inputId: 'term-3',
    term: '3 Months',
    rate: '13.3%'
  });
  // 4 Months
  array.push({
    labelId: 'term-4-label',
    inputId: 'term-4',
    term: '4 Months',
    rate: '13.75%'
  });
  // 6 Months
  array.push({
    labelId: 'term-6-label',
    inputId: 'term-6',
    term: '6 Months',
    rate: '13.9%'
  });
  // 9 Months
  array.push({
    labelId: 'term-9-label',
    inputId: 'term-9',
    term: '9 Months',
    rate: '14.1%'
  });
  // 12 Months
  array.push({
    labelId: 'term-12-label',
    inputId: 'term-12',
    term: '12 Months',
    rate: '14.4%'
  });
  // 18 Months
  array.push({
    labelId: 'term-18-label',
    inputId: 'term-18',
    term: '18 Months',
    rate: '14.8%'
  });
  // 24 Months
  array.push({
    labelId: 'term-24-label',
    inputId: 'term-24',
    term: '24 Months',
    rate: '15.2%'
  });
}

function createTermToInvestOptions(array, containerToAppend, arrayOptionsLabels) {
  for (element of array) {
    // HTML Elements
    const label = document.createElement('label');
    label.setAttribute('id', element.labelId);
    label.setAttribute('for', element.inputId);
    label.classList.add('Activity-label__cdt');
    const text = document.createElement('p');
    text.classList.add('font-semibold', 'leading-4');
    text.innerText = element.term;
    const rate = document.createElement('p');
    rate.classList.add('text-xs', 'font-semibold', 'leading-4');
    rate.innerText = element.rate;
    const input = document.createElement('input');
    input.setAttribute('id', element.inputId);
    input.setAttribute('name', 'term');
    input.setAttribute('type', 'radio');
    input.classList.add('hidden');
    // HTML Layout
    containerToAppend.append(label, input);
    label.append(text, rate);
    // Adding Labels into an array
    arrayOptionsLabels.push(label);
  }
}

function addEventsToTermToInvestOptions(labelsArray) {
  labelsArray.forEach(label => {
    label.addEventListener('click', () => {
      // Removing the "Checked-term" class from previous selected labels
      labelsArray.forEach(label => {
        if (label.classList.contains('Checked-term')) {
          label.classList.remove('Checked-term');
        }
      });
      // Adding the "Checked-term" class to the selected label
      label.classList.add('Checked-term');
    })
  });
}

function addEventsToSubmitTermToInvest(submitButton, labelsArray) {
  submitButton.addEventListener('click', () => {
    event.preventDefault();
    let selectedLabel;
    // Saving the selected label
    labelsArray.forEach(label => {
      if (label.classList.contains('Checked-term')) {
        selectedLabel = label;
      }
    })
    // Showing a warn if there's no selected label
    if (selectedLabel === undefined) {
      termToInvestInvalid.innerText = "You must select a term to invest";
    } else {
      // Resetting "Term to Invest" label selected
      termToInvestOptionsLabels.forEach(label => {
        if (label.classList.contains('Checked-term')) {
          label.classList.remove('Checked-term');
        }
      });
      // Hiding "Term to Invest" Container
      termToInvestContainer.classList.add('hidden');
      // Calculating the CDT
      createCDTInfo(selectedLabel);
    }
  });
}

function addEventsToCloseTermToInvestContainer(closeButton, labelsArray) {
  closeButton.addEventListener('click', () => {
  hideShowContainers(termToInvestContainer, amountToInvestContainer);
    // Resetting "Term to Invest" label selected
    labelsArray.forEach(label => {
      if (label.classList.contains('Checked-term')) {
        label.classList.remove('Checked-term');
      }
    });
  })
}

function addEventsToCustomizedTermToInvest(customizedTermButton, labelsArray) {
  customizedTermButton.addEventListener('click', () => {
    // Resetting "Term to Invest" label selected
    labelsArray.forEach(label => {
      if (label.classList.contains('Checked-term')) {
        label.classList.remove('Checked-term');
      }
    });

    // Hiding the "Term to Invest" container
    termToInvestContainer.classList.add('hidden');

    // Creating the "Customized Term" form
    createCustomizedTermToInvestForm();

    // Getting the "Submit" button, "Invalid Output" paragraph, and "Close" button
    const customizedTermSubmit = document.getElementById('customized-submit');
    const customizedTermInvalid = document.getElementById('customized-invalid');
    const customizedTermClose = document.getElementById('customized-term-close');

    // Creating array for the valid months the user can type
    const validMonths = [1, 2, 3, 4, 6, 9, 12, 18, 24];

    // Adding eventListener to the "Customized Term Submit" button
    addEventsToCustomizedTermSubmit(customizedTermSubmit, customizedTermInvalid, validMonths);

    // Adding eventListener to the "Close Customized Term" button
    addEventsToCloseCustomizedTermForm(customizedTermClose);
  });
}

function createCustomizedTermToInvestForm() {
  // Creating the HTML elements
  const form = document.createElement('form');
  form.setAttribute('id', 'customized-term-container');
  form.classList.add('Grid-center', 'gap-1');
  // Close Form
  const close = document.createElement('img');
  close.setAttribute('id', 'customized-term-close');
  close.setAttribute('src', "https://res.cloudinary.com/dziyyutwr/image/upload/v1693489975/Math/close-icon_ejx6qw.png");
  close.setAttribute('alt', 'Close icon');
  close.classList.add('Close-button');
  const monthsLabel = document.createElement('label');
  monthsLabel.setAttribute('for', 'customized-months');
  monthsLabel.classList.add('Grid-center', 'gap-0', 'font-semibold', 'leading-4');
  monthsLabel.innerText = `Months`;
  const monthsLabelHint = document.createElement('p');
  monthsLabelHint.classList.add('text-xs');
  monthsLabelHint.innerText = `(1-24)`;
  const monthsInput = document.createElement('input');
  monthsInput.setAttribute('id', 'customized-months');
  monthsInput.setAttribute('type', 'number');
  monthsInput.setAttribute('placeholder', '18');
  monthsInput.classList.add('Activity-input');
  const rateLabel = document.createElement('label');
  rateLabel.setAttribute('for', 'customized-rate');
  rateLabel.classList.add('font-semibold');
  rateLabel.innerText = `Effective Rate`;
  const rateInput = document.createElement('input');
  rateInput.setAttribute('id', 'customized-rate');
  rateInput.setAttribute('type', 'number');
  rateInput.setAttribute('step', '0.001');
  rateInput.setAttribute('placeholder', '13.5%');
  rateInput.classList.add('Activity-input');
  const submit = document.createElement('input');
  submit.setAttribute('id', 'customized-submit');
  submit.setAttribute('type', 'submit');
  submit.classList.add('Activity-submit', 'mt-2');
  const invalidTerm = document.createElement('p');
  invalidTerm.setAttribute('id', 'customized-invalid');
  invalidTerm.classList.add('Activity-output');
  
  // HTML Layout
  cdtFormContainer.appendChild(form);
  form.append(close, monthsLabel, monthsInput, rateLabel, rateInput, submit, invalidTerm);
  monthsLabel.appendChild(monthsLabelHint);
}

function addEventsToCustomizedTermSubmit(submitButton, outputMessage, validMonths) {
  submitButton.addEventListener('click', () => {
    event.preventDefault();
    // Getting the "Months" and "Effective Rate" values typed by the user
    const customizedTermMonths = Number(document.getElementById('customized-months').value);
    const customizedTermRate = Number(document.getElementById('customized-rate').value);
    
    // Validating if the form was filled
    if (customizedTermMonths === 0 || customizedTermRate === 0) {
      outputMessage.innerText = `You must fill out the form!`;
    } // Validating if the form was filled correctly
    else if (customizedTermMonths < 0 || customizedTermRate < 0) {
      outputMessage.innerText = `You can't type negative numbers!`;
    }
    else if (isFloat(customizedTermMonths) === true) {
      outputMessage.innerText = `You must type entire months`;
    } // Validating if the amount of months is valid
    else if (validMonths.includes(customizedTermMonths) === false) {
      outputMessage.innerText = `The amount of months you typed is not valid`;
    }
    else {
      // Deleting the "Customized Term" form
      cdtFormContainer.removeChild(cdtFormContainer.lastChild);
      // Creating the "CDT Information" container
      createCDTInfo([customizedTermMonths, customizedTermRate]);
    }
  });
}

function addEventsToCloseCustomizedTermForm(closeButton) {
  closeButton.addEventListener('click', () => {
    // Showing the "Term to Invest" container
    termToInvestContainer.classList.remove('hidden');

    // Deleting the "Customized Term" form
    cdtFormContainer.removeChild(cdtFormContainer.lastChild);
  });
}

function createCDTInfo(termOption) {
  // Declaring the CDT given information
  let cdtMonthsLabel
  let cdtRateValueLabel

  // Validating where does the "termOption" parameter come from
  if (Array.isArray(termOption)) {
    // Saving the Customized Term information
    cdtMonthsLabel = termOption[0];
    cdtRateValueLabel = termOption[1];
  } else {
    // Saving the Label information
    cdtMonthsLabel = parseInt(termOption.firstChild.innerText);
    cdtRateValueLabel = parseFloat(termOption.lastChild.innerText);
  }

  const cdtTermLabel = `${cdtMonthsLabel} Months`;
  const cdtRateLabel = `${cdtRateValueLabel}%`;
  cdtRateValueLabel /= 100;

  // Creating "CDT Calculation Information" HTML elements
  const cdtContainer = document.createElement('div');
  cdtContainer.classList.add('Grid-center', 'gap-0', 'w-3/4', 'rounded-md', 'border-2', 'border-primary-800', 'my-2', 'bg-tertiary', 'overflow-hidden');
  const cdtTerm = document.createElement('p');
  cdtTerm.classList.add('text-sm', 'text-center', 'w-full', 'py-0.5', 'bg-primary-800', 'text-tertiary');
  cdtTerm.innerText = cdtTermLabel;
  const cdtInvestmentContainer = document.createElement('div');
  cdtInvestmentContainer.classList.add('Grid-center', 'gap-0', 'py-1');
  const cdtInvestmentHeading = document.createElement('h3');
  cdtInvestmentHeading.classList.add('text-sm');
  cdtInvestmentHeading.innerText = "Initial Investment";
  const cdtInvestmentAmount = document.createElement('p');
  cdtInvestmentAmount.classList.add('text-lg', 'font-semibold', 'leading-4');
  cdtInvestmentAmount.innerText = `$${amountToInvest}`;
  const cdtProfitsContainer = document.createElement('div');
  cdtProfitsContainer.classList.add('Grid-center', 'gap-0', 'py-1', 'border-t-[1px]', 'border-b-[1px]', 'border-secondary', 'bg-primary-50');
  const cdtProfitsHeading = document.createElement('h2');
  cdtProfitsHeading.innerText = "Possible Profits";
  const cdtProfitsAmount = document.createElement('p');
  cdtProfitsAmount.classList.add('text-2xl', 'font-bold');
  cdtProfitsAmount.innerText = `$${cdtCalculation(amountToInvest, cdtMonthsLabel, cdtRateValueLabel)[0]}`;
  const cdtRatesFeesContainer = document.createElement('div');
  cdtRatesFeesContainer.classList.add('grid', 'gap-1', 'w-full', 'py-1', 'px-3');
  const cdtRatesFeesHeading = document.createElement('h4');
  cdtRatesFeesHeading.classList.add('text-sm', 'font-semibold');
  cdtRatesFeesHeading.innerText = `Rates and Fees`;
  const cdtRatesFeesInfoContainer = document.createElement('div');
  cdtRatesFeesInfoContainer.classList.add('grid', 'gap-0.5');
  const cdtRatesFeesInfoEffectiveRateContainer = document.createElement('div');
  cdtRatesFeesInfoEffectiveRateContainer.classList.add('Rate-fee__element-container');
  const cdtRatesFeesInfoEffectiveRateText = document.createElement('p');
  cdtRatesFeesInfoEffectiveRateText.innerText = `Effective rate`;
  const cdtRatesFeesInfoEffectiveRateValue = document.createElement('p');
  cdtRatesFeesInfoEffectiveRateValue.innerText = cdtRateLabel;
  const cdtRatesFeesInfoTaxContainer = document.createElement('div');
  cdtRatesFeesInfoTaxContainer.classList.add('Rate-fee__element-container');
  const cdtRatesFeesInfoTaxText = document.createElement('p');
  cdtRatesFeesInfoTaxText.innerText = `Withholding tax`;
  const cdtRatesFeesInfoTaxValue = document.createElement('p');
  cdtRatesFeesInfoTaxValue.innerText = `$${cdtCalculation(amountToInvest, cdtMonthsLabel, cdtRateValueLabel)[1]}`;
  const cdtRatesFeesInfoGracePeriodContainer = document.createElement('div');
  cdtRatesFeesInfoGracePeriodContainer.classList.add('Rate-fee__element-container');
  const cdtRatesFeesInfoGracePeriodText = document.createElement('p');
  cdtRatesFeesInfoGracePeriodText.innerText = `Grace period`;
  const cdtRatesFeesInfoGracePeriodValue = document.createElement('p');
  cdtRatesFeesInfoGracePeriodValue.innerText = `14 calendar days`;
  const cdtResetContainer = document.createElement('div');
  cdtResetContainer.classList.add('Grid-center', 'py-1', 'border-t-[1px]', 'border-secondary');
  const cdtResetButton = document.createElement('button');
  cdtResetButton.setAttribute('id', 'reset-cdt')
  cdtResetButton.classList.add('Activity-submit');
  cdtResetButton.innerText = `Reset CDT`;

  // HTML Layout
  cdtFormContainer.appendChild(cdtContainer);
  cdtContainer.append(cdtTerm, cdtInvestmentContainer, cdtProfitsContainer, cdtRatesFeesContainer, cdtResetContainer);
  cdtInvestmentContainer.append(cdtInvestmentHeading, cdtInvestmentAmount);
  cdtProfitsContainer.append(cdtProfitsHeading, cdtProfitsAmount);
  cdtRatesFeesContainer.append(cdtRatesFeesHeading, cdtRatesFeesInfoContainer);
  cdtRatesFeesInfoContainer.append(cdtRatesFeesInfoEffectiveRateContainer, cdtRatesFeesInfoTaxContainer, cdtRatesFeesInfoGracePeriodContainer);
  cdtRatesFeesInfoEffectiveRateContainer.append(cdtRatesFeesInfoEffectiveRateText, cdtRatesFeesInfoEffectiveRateValue);
  cdtRatesFeesInfoTaxContainer.append(cdtRatesFeesInfoTaxText, cdtRatesFeesInfoTaxValue);
  cdtRatesFeesInfoGracePeriodContainer.append(cdtRatesFeesInfoGracePeriodText, cdtRatesFeesInfoGracePeriodValue);
  cdtResetContainer.appendChild(cdtResetButton);

  // Setting Reset Button
  resetButton = document.getElementById('reset-cdt');

  // Adding eventListeners to the "Reset CDT" button
  resetButton.addEventListener('click', () => {
    event.preventDefault();
    // Showing "Amount to Invest" container
    amountToInvestContainer.classList.remove('hidden');
    // Deleting "CDT Calculation Information" container
    cdtFormContainer.removeChild(cdtFormContainer.lastChild);
  });
}

function cdtCalculation(investment, months, rate) {
  const days = (months * 30);
  const investmentTimeValue = 360 / days;
  const annualProfitWithoutTax = investment * rate;
  const profitWithoutTax = annualProfitWithoutTax / investmentTimeValue;
  const tax = profitWithoutTax * 0.04;
  const profitWithTax = profitWithoutTax - tax;
  return [profitWithTax.toFixed(2), tax.toFixed(2)];
}

// -------------------------- Procedure --------------------------
const cdtFormContainer = document.getElementById('cdt-form-container');

// ------------------ Amount to Invest ------------------
const amountToInvestContainer = document.getElementById('amount-to-invest-container');
const amountToInvestInput = document.getElementById('amount-to-invest-input');
const amountToInvestSubmit = document.getElementById('amount-to-invest-submit');
const amounToInvestInvalid = document.getElementById('invalid-amount-to-invest');
let amountToInvest;

// Adding eventListener to Submit Button
addEventsToSubmitAmountToInvest(amountToInvestSubmit, amounToInvestInvalid);

// ------------------ Term to Invest ------------------ 
const termToInvestContainer = document.getElementById('term-container');
const termToInvestOptionsContainer = document.getElementById('term-options-container');
const termToInvestOptionsList = [];
const termToInvestOptionsLabels = [];
const termToInvestSubmit = document.getElementById('term-submit');
const termToInvestInvalid = document.getElementById('term-invalid');
const termToInvestCustomized = document.getElementById('term-customized');
const termToInvestCloseContainer = document.getElementById('close-term-container');

// Adding the info for every "Term to Invest" Option
addTermToInvestOptions(termToInvestOptionsList);

// Creating the "Term to Invest" Options
createTermToInvestOptions(termToInvestOptionsList, termToInvestOptionsContainer, termToInvestOptionsLabels);

// Adding eventListeners to every "Term to Invest" Option
addEventsToTermToInvestOptions(termToInvestOptionsLabels);

// Adding eventListeners to "Term to Invest" Submit button
addEventsToSubmitTermToInvest(termToInvestSubmit, termToInvestOptionsLabels);

// Adding eventListeners to "Customized Term" option
addEventsToCustomizedTermToInvest(termToInvestCustomized, termToInvestOptionsLabels);

// Adding eventListeners to "Term to Invest" Close Button
addEventsToCloseTermToInvestContainer(termToInvestCloseContainer, termToInvestOptionsLabels);

// ------------------ CDT Calculation ------------------ 
let resetButton;