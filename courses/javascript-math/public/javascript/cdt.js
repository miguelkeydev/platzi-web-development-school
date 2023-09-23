// --------------------------- Functions ---------------------------
function createCdtForm(containerToAppend) {
  // --------- HTML Elements ---------
  // CDT Form
  const cdtForm = document.createElement('form');
  cdtForm.setAttribute('id', 'cdt-form');
  cdtForm.classList.add('Grid-center');
  // Amount to Invest Container
  const amountToInvestContainer = document.createElement('div');
  amountToInvestContainer.setAttribute('id', 'amount-to-invest-container');
  amountToInvestContainer.classList.add('Grid-center');
  // Amount to Invest Label
  const amountToInvestLabel = document.createElement('label');
  amountToInvestLabel.setAttribute('for', 'amount-to-invest-input');
  amountToInvestLabel.classList.add('font-semibold', 'md:text-3xl');
  amountToInvestLabel.innerText = `Amount to Invest`;
  // Amount to Invest Input
  const amountToInvest = document.createElement('input');
  amountToInvest.setAttribute('id', 'amount-to-invest-input'); amountToInvest.setAttribute('type', 'number');
  amountToInvest.setAttribute('placeholder', '$20000');
  amountToInvest.classList.add('Activity-input');
  // Amount to Invest Submit
  const amountToInvestSubmit = document.createElement('input');
  amountToInvestSubmit.setAttribute('id', 'amount-to-invest-submit');
  amountToInvestSubmit.setAttribute('type', 'submit');
  amountToInvestSubmit.classList.add('Activity-submit');
  // Amount to Invest Invalid
  const amounToInvestInvalid = document.createElement('p');
  amounToInvestInvalid.setAttribute('id', 'amount-to-invest-invalid');
  amounToInvestInvalid.classList.add('Activity-output');
  // Term to Invest Container
  const termToInvestContainer = document.createElement('div');
  termToInvestContainer.setAttribute('id', 'term-container');
  termToInvestContainer.classList.add('hidden', 'Grid-center');
  // Term to Invest Subtitle
  const termToInvestSubtitle = document.createElement('h2');
  termToInvestSubtitle.classList.add('Activity-subtitle', 'w-3/4');
  termToInvestSubtitle.innerText = `Select the term for which you want to invest`;
  // Term to Invest Options Container
  const termToInvestOptionsContaier = document.createElement('div');
  termToInvestOptionsContaier.setAttribute('id', 'term-options-container');
  termToInvestOptionsContaier.classList.add('Flex-wrap', 'gap-1', 'p-0.5');
  // Term to Invest Submit
  const termToInvestSubmit = document.createElement('input');
  termToInvestSubmit.setAttribute('id', 'term-submit');
  termToInvestSubmit.setAttribute('type', 'submit');
  termToInvestSubmit.classList.add('Activity-submit');
  // Term to Invest Customized
  const termToInvestCustomized = document.createElement('p');
  termToInvestCustomized.setAttribute('id', 'term-customized');
  termToInvestCustomized.classList.add('text-xs', 'underline', 'md:text-2xl', 'lg:cursor-pointer');
  termToInvestCustomized.innerText = `Customized term`;
  // Term to Invest Invalid
  const termToInvestInvalid = document.createElement('p');
  termToInvestInvalid.setAttribute('id', 'term-invalid');
  termToInvestInvalid.classList.add('Activity-output');
  // Close Term to Invest Button
  const termToInvestClose = document.createElement('img');
  termToInvestClose.setAttribute('id', 'close-term-container');
  termToInvestClose.setAttribute('src', 'https://res.cloudinary.com/dziyyutwr/image/upload/v1693489975/Math/close-icon_ejx6qw.png');
  termToInvestClose.setAttribute('alt', 'Close Icon');
  termToInvestClose.classList.add('Close-button');
  
  // --------- HTML Layout ---------
  containerToAppend.appendChild(cdtForm);
  cdtForm.append(amountToInvestContainer, termToInvestContainer);
  amountToInvestContainer.append(amountToInvestLabel, amountToInvest, amountToInvestSubmit, amounToInvestInvalid);
  termToInvestContainer.append(termToInvestSubtitle, termToInvestOptionsContaier, termToInvestSubmit, termToInvestCustomized, termToInvestInvalid, termToInvestClose);
}

function addEventsToSubmitAmountToInvest(submitButton, output, containerToHide, containerToShow) {
  submitButton.addEventListener('click', () => {
    event.preventDefault();
    amountToInvest = Number(amountToInvestInput.value);
    // Validating if the given amount is correct
    switch (true) {
      case amountToInvest < 1:
        return output.innerText = `You typed an invalid amount of money`;
      
      case amountToInvest >= 1 && amountToInvest < 1000:
        return output.innerText = `$1000 is the minimum amount of money to invest`;
      
      case amountToInvest > 1000000000:
        return output.innerText = `$1000000000 is the maximum amount of money to invest`;
      
      default:
        // Resetting "Amount to Invest Input" value
        output.innerText = ``;
        // Hiding the Amount to Invest container and Showing the Term to Invest Container
        hideShowContainers(containerToHide, containerToShow);
        break;
    }
    // Resetting "Amount to Invest Input" value
    amountToInvestInput.value = ``;
  });
}

function addTermToInvestOptionsInfo(elementsInfoArray) {
  // 1 Month
  elementsInfoArray.push({
    labelId: 'term-1-label',
    inputId: 'term-1',
    term: '1 Month',
    rate: '12.8%'
  });
  // 2 Months
  elementsInfoArray.push({
    labelId: 'term-2-label',
    inputId: 'term-2',
    term: '2 Months',
    rate: '13.1%'
  });
  // 3 Months
  elementsInfoArray.push({
    labelId: 'term-3-label',
    inputId: 'term-3',
    term: '3 Months',
    rate: '13.3%'
  });
  // 4 Months
  elementsInfoArray.push({
    labelId: 'term-4-label',
    inputId: 'term-4',
    term: '4 Months',
    rate: '13.75%'
  });
  // 6 Months
  elementsInfoArray.push({
    labelId: 'term-6-label',
    inputId: 'term-6',
    term: '6 Months',
    rate: '13.9%'
  });
  // 9 Months
  elementsInfoArray.push({
    labelId: 'term-9-label',
    inputId: 'term-9',
    term: '9 Months',
    rate: '14.1%'
  });
  // 12 Months
  elementsInfoArray.push({
    labelId: 'term-12-label',
    inputId: 'term-12',
    term: '12 Months',
    rate: '14.4%'
  });
  // 18 Months
  elementsInfoArray.push({
    labelId: 'term-18-label',
    inputId: 'term-18',
    term: '18 Months',
    rate: '14.8%'
  });
  // 24 Months
  elementsInfoArray.push({
    labelId: 'term-24-label',
    inputId: 'term-24',
    term: '24 Months',
    rate: '15.2%'
  });
}

function createTermToInvestOptions(elementsInfoArray, containerToAppend, optionsLabelsArray) {
  for (element of elementsInfoArray) {
    // --------- HTML Elements ---------
    const label = document.createElement('label');
    label.setAttribute('id', element.labelId);
    label.setAttribute('for', element.inputId);
    label.classList.add('Activity-label__cdt');
    const term = document.createElement('p');
    term.classList.add('font-semibold', 'leading-4', 'md:text-3xl');
    term.innerText = element.term;
    const rate = document.createElement('p');
    rate.classList.add('text-xs', 'font-semibold', 'leading-4', 'md:text-2xl');
    rate.innerText = element.rate;
    const input = document.createElement('input');
    input.setAttribute('id', element.inputId);
    input.setAttribute('name', 'term');
    input.setAttribute('type', 'radio');
    input.classList.add('hidden');
  
    // --------- HTML Layout ---------
    containerToAppend.append(label, input);
    label.append(term, rate); 

    // Storing Labels in an array
    optionsLabelsArray.push(label);
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
    });
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

function addEventsToCustomizedTermToInvest(customizedTermButton, labelsArray, outputToHide) {
  customizedTermButton.addEventListener('click', () => {
    // Resetting "Term to Invest" label selected
    labelsArray.forEach(label => {
      if (label.classList.contains('Checked-term')) {
        label.classList.remove('Checked-term');
      }
    });

    // Hiding the "Term to Invest" container 
    termToInvestContainer.classList.add('hidden');

    // Resseting Invalid Output
    outputToHide.innerText = ``;

    // Creating the "Customized Term" form
    createCustomizedTermToInvestForm();

    // Customized Term Elements
    const customizedTermSubmit = document.getElementById('customized-submit');
    const customizedTermInvalid = document.getElementById('customized-invalid');
    const customizedTermClose = document.getElementById('customized-term-close');

    // Creating array for the valid months the user can type
    const validMonthsArray = [1, 2, 3, 4, 6, 9, 12, 18, 24];

    // Adding eventListener to the "Customized Term Submit" button
    addEventsToCustomizedTermSubmit(customizedTermSubmit, customizedTermInvalid, validMonthsArray);

    // Adding eventListener to the "Close Customized Term" button
    addEventsToCloseCustomizedTermForm(customizedTermClose);
  });
}

function createCustomizedTermToInvestForm() {
  // --------- HTML Elements ---------
  const form = document.createElement('form');
  form.setAttribute('id', 'customized-term-container');
  form.classList.add('Grid-center', 'gap-1', 'md:gap-4');
  // Months Label
  const monthsLabel = document.createElement('label');
  monthsLabel.setAttribute('for', 'customized-months');
  monthsLabel.classList.add('Grid-center', 'gap-0', 'font-semibold', 'leading-4', 'md:text-3xl');
  monthsLabel.innerText = `Months`;
  // Months Label Hint
  const monthsLabelHint = document.createElement('p');
  monthsLabelHint.classList.add('text-xs', 'md:text-2xl');
  monthsLabelHint.innerText = `(1-24)`;
  // Months Input
  const monthsInput = document.createElement('input');
  monthsInput.setAttribute('id', 'customized-months');
  monthsInput.setAttribute('type', 'number');
  monthsInput.setAttribute('placeholder', '18');
  monthsInput.classList.add('Activity-input');
  // Rate Label
  const rateLabel = document.createElement('label');
  rateLabel.setAttribute('for', 'customized-rate');
  rateLabel.classList.add('font-semibold', 'md:text-3xl');
  rateLabel.innerText = `Effective Rate`;
  // Rate Input
  const rateInput = document.createElement('input');
  rateInput.setAttribute('id', 'customized-rate');
  rateInput.setAttribute('type', 'number');
  rateInput.setAttribute('step', '0.001');
  rateInput.setAttribute('placeholder', '13.5%');
  rateInput.classList.add('Activity-input');
  // Submit Form
  const submit = document.createElement('input');
  submit.setAttribute('id', 'customized-submit');
  submit.setAttribute('type', 'submit');
  submit.classList.add('Activity-submit', 'mt-2');
  // Invalid Term to Invest
  const invalidTerm = document.createElement('p');
  invalidTerm.setAttribute('id', 'customized-invalid');
  invalidTerm.classList.add('Activity-output');
  // Close Form
  const close = document.createElement('img');
  close.setAttribute('id', 'customized-term-close');
  close.setAttribute('src', "https://res.cloudinary.com/dziyyutwr/image/upload/v1693489975/Math/close-icon_ejx6qw.png");
  close.setAttribute('alt', 'Close icon');
  close.classList.add('Close-button');
  
  // --------- HTML Layout ---------
  cdtForm.appendChild(form);
  form.append(close, monthsLabel, monthsInput, rateLabel, rateInput, submit, invalidTerm);
  monthsLabel.appendChild(monthsLabelHint);
}

function addEventsToCustomizedTermSubmit(submitButton, output, validMonthsArray) {
  submitButton.addEventListener('click', () => {
    event.preventDefault();
    // Getting the "Months" and "Effective Rate" values typed by the user
    const customizedTermMonths = Number(document.getElementById('customized-months').value);
    const customizedTermRate = Number(document.getElementById('customized-rate').value);
    
    // Validating if the form was filled correctly
    switch (true) {
      case customizedTermMonths === 0 || customizedTermRate === 0:
        return output.innerText = `You must fill out the form`;
    
      case customizedTermMonths < 0 || customizedTermRate < 0:
        return output.innerText = `You can't type negative numbers`;
      
      case isFloat(customizedTermMonths) === true:
        return output.innerText = `You must type entire months`;

      case validMonthsArray.includes(customizedTermMonths) === false:
        return output.innerText = `The amount of months you typed is not valid`;
      
      default:
        // Deleting the "Customized Term" form
        cdtForm.removeChild(cdtForm.lastChild);

        // Creating the "CDT Information" container
        createCDTInfo([customizedTermMonths, customizedTermRate]);
        break;
    }
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

  // Storing the CDT Rate Label and Value
  const cdtRateLabel = `${cdtRateValueLabel}%`;
  cdtRateValueLabel /= 100;

  // --------- HTML Elements ---------
  // CDT Container
  const cdtContainer = document.createElement('div');
  cdtContainer.classList.add('Grid-center', 'gap-0', 'w-3/4', 'rounded-md', 'border-2', 'border-primary-800', 'my-2', 'bg-tertiary', 'overflow-hidden', 'md:rounded-xl');
  // CDT Term
  const cdtTerm = document.createElement('p');
  cdtTerm.classList.add('text-sm', 'text-center', 'w-full', 'py-0.5', 'bg-primary-800', 'text-tertiary', 'md:text-3xl', 'md:py-2');
  cdtTerm.innerText = `${cdtMonthsLabel} Months`;
  // CDT Investment Container
  const cdtInvestmentContainer = document.createElement('div');
  cdtInvestmentContainer.classList.add('Grid-center', 'gap-0', 'py-1', 'gap-2', 'md:py-3');
  // CDT Investment Heading
  const cdtInvestmentHeading = document.createElement('h3');
  cdtInvestmentHeading.classList.add('text-sm', 'md:text-3xl');
  cdtInvestmentHeading.innerText = "Initial Investment";
  // CDT Investment Amount
  const cdtInvestmentAmount = document.createElement('p');
  cdtInvestmentAmount.classList.add('text-lg', 'font-semibold', 'leading-4', 'md:text-[2.65rem]', 'md:leading-10');
  cdtInvestmentAmount.innerText = `$${amountToInvest}`;
  // CDT Profits Container
  const cdtProfitsContainer = document.createElement('div');
  cdtProfitsContainer.classList.add('Grid-center', 'gap-0', 'py-1', 'border-t-[1px]', 'border-b-[1px]', 'border-secondary', 'bg-primary-50', 'gap-2', 'md:py-3');
  // CDT Profits Heading
  const cdtProfitsHeading = document.createElement('h2');
  cdtProfitsHeading.classList.add('md:text-3xl');
  cdtProfitsHeading.innerText = "Possible Profits";
  // CDT Profits Amount
  const cdtProfitsAmount = document.createElement('p');
  cdtProfitsAmount.classList.add('text-2xl', 'font-bold', 'md:text-5xl');
  cdtProfitsAmount.innerText = `$${cdtCalculation(amountToInvest, cdtMonthsLabel, cdtRateValueLabel)[0]}`;
  // CDT Rates and Fees Container
  const cdtRatesFeesContainer = document.createElement('div');
  cdtRatesFeesContainer.classList.add('grid', 'gap-1', 'w-full', 'py-1', 'px-3', 'md:gap-2', 'md:py-3', 'md:px-5');
  // CDT Rates and Fees Heading
  const cdtRatesFeesHeading = document.createElement('h4');
  cdtRatesFeesHeading.classList.add('text-sm', 'font-semibold', 'md:text-2xl');
  cdtRatesFeesHeading.innerText = `Rates and Fees`;
  // CDT Rates and Fees Info Container
  const cdtRatesFeesInfoContainer = document.createElement('div');
  cdtRatesFeesInfoContainer.classList.add('grid', 'gap-0.5', 'md:gap-2');
  // CDT Rates and Fees Info Effective Rate Container
  const cdtRatesFeesInfoEffectiveRateContainer = document.createElement('div');
  cdtRatesFeesInfoEffectiveRateContainer.classList.add('Rate-fee__element-container');
  // CDT Rates and Fees Info Effective Rate Text
  const cdtRatesFeesInfoEffectiveRateText = document.createElement('p');
  cdtRatesFeesInfoEffectiveRateText.innerText = `Effective rate`;
  // CDT Rates and Fees Info Effective Rate Value
  const cdtRatesFeesInfoEffectiveRateValue = document.createElement('p');
  cdtRatesFeesInfoEffectiveRateValue.innerText = cdtRateLabel;
  // CDT Rates and Fees Info Tax Container
  const cdtRatesFeesInfoTaxContainer = document.createElement('div');
  cdtRatesFeesInfoTaxContainer.classList.add('Rate-fee__element-container');
  // CDT Rates and Fees Info Tax Text
  const cdtRatesFeesInfoTaxText = document.createElement('p');
  cdtRatesFeesInfoTaxText.innerText = `Withholding tax`;
  // CDT Rates and Fees Info Tax Value
  const cdtRatesFeesInfoTaxValue = document.createElement('p');
  cdtRatesFeesInfoTaxValue.innerText = `$${cdtCalculation(amountToInvest, cdtMonthsLabel, cdtRateValueLabel)[1]}`;
  // CDT Rates and Fees Info Grace Period Container
  const cdtRatesFeesInfoGracePeriodContainer = document.createElement('div');
  cdtRatesFeesInfoGracePeriodContainer.classList.add('Rate-fee__element-container');
  // CDT Rates and Fees Info Grace Period Text
  const cdtRatesFeesInfoGracePeriodText = document.createElement('p');
  cdtRatesFeesInfoGracePeriodText.innerText = `Grace period`;
  // CDT Rates and Fees Info Grace Period Value
  const cdtRatesFeesInfoGracePeriodValue = document.createElement('p');
  cdtRatesFeesInfoGracePeriodValue.innerText = `14 calendar days`;
  // Reset CDT Container
  const cdtResetContainer = document.createElement('div');
  cdtResetContainer.classList.add('Grid-center', 'py-1', 'border-t-[1px]', 'border-secondary', 'md:py-2');
  // Reset CDT Button
  const cdtResetButton = document.createElement('button');
  cdtResetButton.setAttribute('id', 'reset-cdt')
  cdtResetButton.classList.add('Activity-submit');
  cdtResetButton.innerText = `Reset CDT`;

  // HTML Layout
  cdtForm.appendChild(cdtContainer);
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
  const resetButton = document.getElementById('reset-cdt');

  // Adding eventListeners to the "Reset CDT" button
  resetButton.addEventListener('click', () => {
    event.preventDefault();
    // Showing "Amount to Invest" container
    amountToInvestContainer.classList.remove('hidden');

    // Deleting "CDT Calculation Information" container
    cdtForm.removeChild(cdtForm.lastChild);
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

function addEventsToCloseTermToInvestContainer(closeButton, containerToHide, containerToShow, labelsArray, outputToHide) {
  closeButton.addEventListener('click', () => {
    hideShowContainers(containerToHide, containerToShow);
    
    // Resetting "Term to Invest" label selected
    labelsArray.forEach(label => {
      if (label.classList.contains('Checked-term')) {
        label.classList.remove('Checked-term');
      }
    });
    
    // Resseting Invalid Output
    outputToHide.innerText = ``;
  })
}

function addEventsToCloseCustomizedTermForm(closeButton) {
  closeButton.addEventListener('click', () => {
    // Showing the "Term to Invest" container
    termToInvestContainer.classList.remove('hidden');

    // Deleting the "Customized Term" form
    cdtForm.removeChild(cdtForm.lastChild);
  });
}

// -------------------------- Procedure --------------------------
const cdtActivityContainer = activitiesContainersElements[4];

// Creating the CDT Form
createCdtForm(cdtActivityContainer);
const cdtForm = document.getElementById('cdt-form');

// Amount to Invest Elements
let amountToInvest;
const amountToInvestContainer = document.getElementById('amount-to-invest-container');
const amountToInvestInput = document.getElementById('amount-to-invest-input');
const amountToInvestSubmit = document.getElementById('amount-to-invest-submit');
const amounToInvestInvalid = document.getElementById('amount-to-invest-invalid');

// Term to Invest Elements
const termToInvestContainer = document.getElementById('term-container');
const termToInvestOptionsContainer = document.getElementById('term-options-container');
const termToInvestSubmit = document.getElementById('term-submit');
const termToInvestCustomized = document.getElementById('term-customized');
const termToInvestInvalid = document.getElementById('term-invalid');

// Adding eventListener to Submit Button
addEventsToSubmitAmountToInvest(amountToInvestSubmit, amounToInvestInvalid, amountToInvestContainer, termToInvestContainer);

// Adding the Term to Invest Options information
const termToInvestOptionsInfo = [];
addTermToInvestOptionsInfo(termToInvestOptionsInfo);

// Creating and Storing the "Term to Invest" Options
const termToInvestOptionsLabels = [];
createTermToInvestOptions(termToInvestOptionsInfo, termToInvestOptionsContainer, termToInvestOptionsLabels);

// Adding eventListeners to every "Term to Invest" Option
addEventsToTermToInvestOptions(termToInvestOptionsLabels);

// Adding eventListeners to "Term to Invest" Submit button
addEventsToSubmitTermToInvest(termToInvestSubmit, termToInvestOptionsLabels);

// Adding eventListeners to "Customized Term" option
addEventsToCustomizedTermToInvest(termToInvestCustomized, termToInvestOptionsLabels, termToInvestInvalid);

// Adding eventListeners to "Term to Invest" Close Button
const termToInvestCloseContainer = document.getElementById('close-term-container');
addEventsToCloseTermToInvestContainer(termToInvestCloseContainer, termToInvestContainer, amountToInvestContainer, termToInvestOptionsLabels, termToInvestInvalid);