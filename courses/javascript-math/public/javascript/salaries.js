function addSalariesOptionsCards(array) {
  // By Person
  array.push({
    id: "salaries-person",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693844284/Math/person_fzuyo4.png",
    imageAlt: "Person Drawing",
    name: "By person"
  });
  // By Company
  array.push({
    id: "salaries-company",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693844284/Math/company_ilyg69.png",
    imageAlt: "Company Drawing",
    name: "By Company"
  });
  // Others
  array.push({
    id: "salaries-others",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693844284/Math/others_xsmczg.png",
    imageAlt: "Other Options Image",
    name: "Others"
  });
}

function addActivitiesContainers(array) {
  // By Person
  array.push({
    id: "person-analysis",
    closeId: "close-person-analysis",
    subtitle: "By person",
    optionsId: "person-options",
    infoContainerId: "person-information",
    closeInfoId: "close-person-information",
    subtitleInfo: "Working Information",
    tableContainerId: "person-table-container",
    talbeContainerInfoId: "person-name"
  })
  // By Company
  array.push({
    id: "company-analysis",
    closeId: "close-company-analysis",
    subtitle: "By company",
    optionsId: "company-options",
    infoContainerId: "company-information",
    closeInfoId: "close-company-information",
    subtitleInfo: "Salaries Information",
    tableContainerId: "company-table-container",
    talbeContainerInfoId: "company-name"
  })
  // Others
  array.push({
    id: "others-analysis",
    closeId: "close-others-analysis",
    subtitle: "Others",
    optionsId: "others-options",
    infoContainerId: "others-information",
    closeInfoId: "close-others-information",
    subtitleInfo: "",
    tableContainerId: "others-table-container",
    talbeContainerInfoId: "others-name"
  })
}

function createActivitiesContainers(array, container, elementsList, closeButtons, optionsContainers, activitiesInfoContainers, closeActivityInfoButtons, activitiesTableContainers, activitiesTableSubtitles) {
  for (element of array) {
    // HTML Elements
    // Activity Container
    const activityContainer = document.createElement('div');
    activityContainer.setAttribute('id', element.id);
    activityContainer.classList.add('hidden', 'Grid-center');
    const closeActivityContainerButton = document.createElement('img');
    closeActivityContainerButton.setAttribute('id', element.closeId);
    closeActivityContainerButton.setAttribute('src', "https://res.cloudinary.com/dziyyutwr/image/upload/v1693489975/Math/close-icon_ejx6qw.png");
    closeActivityContainerButton.setAttribute('alt', 'Close icon');
    closeActivityContainerButton.classList.add('Close-button');
    const subtitle = document.createElement('h2');
    subtitle.classList.add('Activity-subtitle');
    subtitle.innerText = element.subtitle;
    // Options Container
    const optionsContainer = document.createElement('div');
    optionsContainer.setAttribute('id', element.optionsId);
    optionsContainer.classList.add('Grid-center');
    // Activity Info Container
    const activityInfoContainer = document.createElement('div');
    activityInfoContainer.setAttribute('id', element.infoContainerId)
    activityInfoContainer.classList.add('hidden', 'Grid-center', 'gap-3');
    const closeActivityInfoContainerButton = document.createElement('img');
    closeActivityInfoContainerButton.setAttribute('id', element.closeInfoId);
    closeActivityInfoContainerButton.setAttribute('src', "https://res.cloudinary.com/dziyyutwr/image/upload/v1693489975/Math/close-icon_ejx6qw.png");
    closeActivityInfoContainerButton.setAttribute('alt', 'Close icon');
    closeActivityInfoContainerButton.classList.add('Close-button');
    const infoSubtitle = document.createElement('h2');
    infoSubtitle.classList.add('Activity-subtitle');
    infoSubtitle.innerText = element.subtitleInfo;
    // Activity Info Table Container
    const tableContainer = document.createElement('div');
    tableContainer.setAttribute('id', element.tableContainerId);
    tableContainer.classList.add('Flex-center', 'p-2', 'rounded-md', 'bg-tertiary', 'overflow-auto', 'Scrollbar-hide');
    const tableContainerSubtitle = document.createElement('h2');
    tableContainerSubtitle.setAttribute('id', element.talbeContainerInfoId);
    tableContainerSubtitle.classList.add('Activity-subtitle');

    // HTML Layout
    container.append(activityContainer);
    activityContainer.append(closeActivityContainerButton, subtitle, optionsContainer, activityInfoContainer);
    activityInfoContainer.append(closeActivityInfoContainerButton, infoSubtitle, tableContainer);
    tableContainer.appendChild(tableContainerSubtitle);

    // Elements Arrays
    elementsList.push(activityContainer);
    closeButtons.push(closeActivityContainerButton);
    optionsContainers.push(optionsContainer);
    activitiesInfoContainers.push(activityInfoContainer);
    closeActivityInfoButtons.push(closeActivityInfoContainerButton);
    activitiesTableContainers.push(tableContainer);
    activitiesTableSubtitles.push(tableContainerSubtitle);
  }
}

function addEventsToOptionsContainers(optionsCards, activitiesContainers) {
  // Setting the same eventListener for each Option Card
  for (let i = 0; i < optionsCards.length; i++) {
    optionsCards[i].addEventListener('click', () => {
      // Timeout to allow Clicked styles appear
      setTimeout(() => {
        // Hiding Salaries Information and Analysis Options Container
        // Showing the corresponding Activity Container
        salariesInfo.classList.add('hidden');
        hideShowContainers(analysisOptionsContainer, activitiesContainers[i]);
      }, 100);
    })
  };
}

function addEventsToCloseActivitiesContainers(closeButtonsList, activitiesContainers) {
  for (let i = 0; i < closeButtonsList.length; i++) {
    // Setting the same eventListener for each Close Button
    closeButtonsList[i].addEventListener('click', () => {
      // Showing Salaries Information and Analysis Options Container
      // Hiding the corresponding Activity Container
      salariesInfo.classList.remove('hidden');
      hideShowContainers(activitiesContainers[i], analysisOptionsContainer);
    });
  }
}

function addEventsToCloseActivitiesInfoContainers(closeButtonsList, activitiesInfoContainers, activitiesOptions, activitiesForms) {
  for (let i = 0; i < closeButtonsList.length; i++) {
    // Setting the same eventListener for each Close Button
    closeButtonsList[i].addEventListener('click', () => {
      // Deleting previous table
      activitiesTableContainers[i].removeChild(activitiesTableContainers[i].lastChild);
      // Showing Information Container and Showing Options Container
      hideShowContainers(activitiesInfoContainers[i], activitiesOptionsContainers[i]);
      // Showing Person options if the user chose the Random Person Option
      if (activitiesForms[i].classList.contains('hidden')) {
        // Showing Person options
        activitiesOptions[i].forEach(option => option.classList.remove('hidden'));
        // Showing Close Activity Button
        closeSalariesActivitiesContainers[i].classList.remove('hidden');
      }
    });
  }
}

function addPersonOptions(array) {
  // Enter ID
  array.push({
    id: "enter-id-option",
    text: "Enter ID"
  });
  // Random Person
  array.push({
    id: "random-person-option",
    text: "Random person"
  });
}

function addCompanyOptions(array) {
  // Enter Company
  array.push({
    id: "enter-company-option",
    text: "Enter Company"
  });
  // Random Company
  array.push({
    id: "random-company-option",
    text: "Random company"
  });
}

function addOthersOptions(array) {
  // General Median
  array.push({
    id: "general-median",
    text: "General Median"
  });
  // Top 20% Salaries
  array.push({
    id: "top-20",
    text: "Top 20% Median"
  });
  // Lowest 20% Salaries
  array.push({
    id: "lowest-20",
    text: "Lowest 20% Median"
  });
}

function createOptions(array, container, optionsList) {
  for (element of array) {
    // Creating HTML Elements
    const option = document.createElement('div');
    option.setAttribute('id', element.id);
    option.classList.add('Activity-salaries__option');
    option.innerText = element.text;

    // HTML Layout
    container.appendChild(option);

    // Elements Array
    optionsList.push(option);
  }
}

function createEnterInfoForm(formId, closeFormId, inputId, inputText, inputType, submitId, inputHint, invalidInfo, invalidText, container) {
  // HTML Elements
  // Form
  const form = document.createElement('form');
  form.setAttribute('id', formId);
  form.classList.add('hidden', 'Grid-center');
  // Close Form
  const close = document.createElement('img');
  close.setAttribute('id', closeFormId);
  close.setAttribute('src', "https://res.cloudinary.com/dziyyutwr/image/upload/v1693489975/Math/close-icon_ejx6qw.png");
  close.setAttribute('alt', 'Close icon');
  close.classList.add('Close-button');
  // Label
  const label = document.createElement('label');
  label.setAttribute('for', inputId);
  label.classList.add('Activity-subtitle');
  label.innerText = inputText;
  // Input
  const input = document.createElement('input');
  input.setAttribute('id', inputId);
  input.setAttribute('type', inputType);
  input.setAttribute('placeholder', 'XXXXXXX');
  input.setAttribute('autocomplete', 'off');
  input.classList.add('Activity-input');
  // Submit
  const submit = document.createElement('input');
  submit.setAttribute('id', submitId);
  submit.setAttribute('type', 'submit');
  submit.classList.add('Activity-submit');
  // Hint
  const hint = document.createElement('p');
  hint.classList.add('text-sm');
  hint.innerText = inputHint;
  // Invalid ID
  const invalidId = document.createElement('p');
  invalidId.setAttribute('id', invalidInfo);
  invalidId.classList.add('hidden', 'font-semibold');
  invalidId.innerText = invalidText;

  // HTML Layout
  container.appendChild(form);
  form.append(close, label, input, submit, hint, invalidId);

  return [form, close, label, input, submit, invalidId];
}

function addEventsToEnterInfoOption(formElements, optionsToHide, closeButtonToHide, submitEventsFunction) {
  const enterInfoForm = formElements[0];
  const closeForm = formElements[1];
  const inputForm = formElements[3];
  const submitForm = formElements[4];
  const invalidId = formElements[5];

  // Timeout to allow Clicked styles appear
  setTimeout(() => {
    // Hiding Options
    optionsToHide.forEach(option => option.classList.add('hidden'));
    // Hiding Close Activity Button
    closeButtonToHide.classList.add('hidden');
    // Showing Form
    enterInfoForm.classList.remove('hidden');
  }, 100);

  // Adding Events to Close Enter Info Form
  addEventsToCloseEnterInfoForm(closeForm, optionsToHide, closeButtonToHide, enterInfoForm, inputForm, invalidId);

  // Adding eventsListeners to Submit Enter Info Form
  submitEventsFunction(submitForm, inputForm, invalidId);
}

function addEventsToCloseEnterInfoForm(closeForm, optionsToShow, closeButtonToShow, enterInfoForm, inputForm, invalidId) {
  closeForm.addEventListener('click', () => {
    // Showing options
    optionsToShow.forEach(option => option.classList.remove('hidden'));
    // Showing Close Activity Button
    closeButtonToShow.classList.remove('hidden');
    // Hiding Enter ID Form
    enterInfoForm.classList.add('hidden');
    // Resetting Form Values
    inputForm.value = "";
    invalidId.classList.add('hidden');
  })
}

function addEventsToSubmitEnterIdForm(submitForm, inputForm, invalidId) {
  // Avoiding running the function if it has been alredy executed
  if (eventListenersEnterIdSubmit > 0) {
    return
  } else {
    submitForm.addEventListener('click', () => {
      event.preventDefault();
      // Taking the ID typed
      const id = Number(inputForm.value);

      // Timeout to allow Clicked styles appear
      setTimeout(() => {
        // Validating if the ID is correct
        if (id < 1042671 || id > 1042690) {
          invalidId.classList.remove('hidden');
        } else {
          // Resseting Form values
          inputForm.value = "";
          invalidId.classList.add('hidden');
          // Taking the person information to display it
          createSalariesInfo(id);
        }
      }, 200);
    });
    eventListenersEnterIdSubmit = 1;
  }
}

function addEventsToSubmitEnterCompanyForm(submitForm, inputForm, invalidId) {
  // Avoiding running the function if it has been alredy executed
  if (eventListenersEnterCompanySubmit > 0) {
    return
  } else {
    submitForm.addEventListener('click', () => {
      event.preventDefault();
      // Taking the Company typed
      const company = inputForm.value;

      // Timeout to allow Clicked styles appear
      setTimeout(() => {
        if (!companies[company]) {
          invalidId.classList.remove('hidden');
        } else {
          // Resseting Form values
          inputForm.value = "";
          invalidId.classList.add('hidden');
          // Taking the ccompany information to display it
          createSalariesInfo(company);
        }
      }, 200)
    });
    eventListenersEnterCompanySubmit = 1;
  }
}

function addEventsToRandomEntityOption(closeButtonToHide, randomEntity) {
  // Timeout to allow Clicked styles appear
  setTimeout(() => {
    // Hiding Close Activity Button
    closeButtonToHide.classList.add('hidden');
    // Taking the information to display it
    createSalariesInfo(randomEntity);
  }, 100);
}

function addEventsToOtherOptions(closeButtonToHide, subtitle, optionInfo) {
  // Timeout to allow Clicked styles appear
  setTimeout(() => {
    // Hiding "Other options" container and making the "Calculation Result" appear
    hideShowContainers(activitiesOptionsContainers[2], activitiesInfoContainers[2]);
    // Hiding the "Close Button" of the Others Activity Container and Table Container
    closeButtonToHide.classList.add('hidden');
    // Moving Others Activity Information "Close Button" and adding eventListener to show Others Activity Container "Close Button"
    closeActivitiesInfoContainers[2].classList.add('top-[-28px]');
    closeActivitiesInfoContainers[2].addEventListener('click', () => closeButtonToHide.classList.remove('hidden'));
    // Assigning Option Subtitle
    activitiesTableSubtitles[2].innerText = subtitle;
    // Creating Result Paragraph
    const resultOption = document.createElement('p');
    resultOption.classList.add('text-xl', 'font-bold');
    resultOption.innerText = optionInfo();
    // Adding Result Paragraph
    activitiesTableContainers[2].appendChild(resultOption);
  }, 100);
}

function createSalariesInfo(identifier) {
  let tableType;
  let entity;
  let companyName;
  // Assigning the given information
  if (typeof identifier === "number") {
    // Assigning the Person info according to the given ID
    entity = findPerson(identifier);
    tableType = 'person';
  } else if (identifier === "random-person") {
    // Assigning the Person info of a random Person
    entity = findPerson(randomNumber(1042671, 1042691));
    tableType = 'person';
  } else if (typeof identifier === "string" && identifier !== "random-company") {
    // Assigning the Company info according to the given Company
    companyName = identifier;
    entity = findCompany(identifier);
    tableType = 'company';
    // Assigning the Company Name to Company
    company = companyName;
  } else {
    // Assigning the Company info of a random Company
    const companiesNames = Object.keys(companies);
    companyName = companiesNames[randomNumber(0, (companiesNames.length - 1))];
    entity = findCompany(companyName)
    tableType = 'company';
    // Assigning the Company Name to Company
    company = companyName;
  }

  // Creating table in case the given information is a Person or a company
  if (tableType === "person") {
    personSalaries = entity.jobs.map(job => job.salary);
    // Hiding "Person Options" container and making "Person Information" container appear
    hideShowContainers(activitiesOptionsContainers[0], activitiesInfoContainers[0]);
    // Assigning person name
    activitiesTableSubtitles[0].innerText = entity.name;
    // Creating Person Jobs Information table
    createPersonTable(entity);
  } else {
    // Hiding "Company Options" container and making "Company Information" container appear
    hideShowContainers(activitiesOptionsContainers[1], activitiesInfoContainers[1]);
    // Assigning Company name
    activitiesTableSubtitles[1].innerText = companyName + ' Salaries';
    // Creating Company Salaries Information table
    createCompanyTable(entity);
  }
}

function findPerson(id) {
  return salaries.find(person => person.id === id);
}

function findCompany(companyName) {
  return companies[companyName];
}

function createPersonTable(person) {
  // Creating the table
  const table = document.createElement('table');
  table.setAttribute('id', 'person-table');
  table.classList.add('Activity-table');
  const rowHeading = document.createElement('tr');
  rowHeading.classList.add('bg-secondary');
  const yearHeading = document.createElement('th');
  yearHeading.classList.add('Activity-table-cell');
  yearHeading.innerText = "Year";
  const companyHeading = document.createElement('th');
  companyHeading.classList.add('Activity-table-cell');
  companyHeading.innerText = "Company";
  const salaryHeading = document.createElement('th');
  salaryHeading.classList.add('Activity-table-cell');
  salaryHeading.innerText = "Salary";
  // HTML Layout
  activitiesTableContainers[0].append(table);
  table.appendChild(rowHeading);
  rowHeading.append(yearHeading, companyHeading, salaryHeading);

  // Creating the table information
  for (job of person.jobs) {
    const tableRow = document.createElement('tr');
    const year = document.createElement('td');
    year.classList.add('Activity-table-cell');
    year.innerText = job.year;
    const company = document.createElement('td');
    company.classList.add('Activity-table-cell');
    company.innerText = job.company;
    const salary = document.createElement('td');
    salary.classList.add('Activity-table-cell');
    salary.innerText = "$" + job.salary;
    // HTML Layout
    tableRow.append(year, company, salary);
    table.appendChild(tableRow);
  }
}

function createCompanyTable(company) {
  const years = Object.keys(company);
  const annualSalaries = Object.values(company);

  // Creating the salaries table
  const table = document.createElement('table');
  table.setAttribute('id', 'company-table');
  table.classList.add('self-start', 'Activity-table');
  const rowHeading = document.createElement('tr');
  rowHeading.classList.add('bg-secondary');
  const yearHeading = document.createElement('th');
  yearHeading.classList.add('Activity-table-cell', 'text-lg');
  yearHeading.innerText = 'Year';
  const salariesHeading = document.createElement('th');
  salariesHeading.setAttribute('colspan', '10');
  salariesHeading.classList.add('Activity-table-cell', 'text-lg');
  salariesHeading.innerText = 'Salaries';
  // HTML Layout
  table.appendChild(rowHeading);
  rowHeading.append(yearHeading, salariesHeading);
  
  // Creating the annual medians table
  const mediansTableSubtitle = document.createElement('h2');
  mediansTableSubtitle.classList.add('Activity-subtitle');
  mediansTableSubtitle.innerText = 'Annual Salary Medians';
  const mediansTable = document.createElement('table');
  mediansTable.setAttribute('id', 'company-annual-medians');
  mediansTable.classList.add('self-start', 'Activity-table');
  const rowYearsMedians = document.createElement('tr');
  const yearMediansHeading = document.createElement('th');
  yearMediansHeading.classList.add('Activity-table-cell', 'text-lg', 'bg-secondary');
  yearMediansHeading.innerText = 'Year';
  const rowAnnualMedians = document.createElement('tr');
  const annualMediansHeading = document.createElement('th');
  annualMediansHeading.classList.add('Activity-table-cell', 'text-lg', 'bg-secondary')
  annualMediansHeading.classList.add('Activity-table-cell', 'text-lg');
  annualMediansHeading.innerText = 'Median';
  // HTML Layout
  activitiesTableContainers[1].append(table, mediansTableSubtitle, mediansTable);
  mediansTable.append(rowYearsMedians, rowAnnualMedians);
  rowYearsMedians.appendChild(yearMediansHeading);
  rowAnnualMedians.appendChild(annualMediansHeading);

  // Adding elements to the tables for each Year of the Company Salaries
  for (let i = 0; i < years.length; i++) {
    // Adding the Years to the salaries table
    const yearSalaries = annualSalaries[i];
    const yearRow = document.createElement('tr');
    const yearHeading = document.createElement('th');
    yearHeading.classList.add('Activity-table-cell');
    yearHeading.innerText = years[i];
    // HTML Layout
    table.appendChild(yearRow);
    yearRow.appendChild(yearHeading);

    // Adding the Years and Annual Medians to the annual medians table
    const annualSalariesYear = yearHeading.cloneNode(true);
    const annualSalariesMedian = document.createElement('td');
    annualSalariesMedian.classList.add('Activity-table-cell');
    annualSalariesMedian.innerText = `$${medianFormula(yearSalaries)}`;
    // HTML Layout
    rowYearsMedians.appendChild(annualSalariesYear);
    rowAnnualMedians.appendChild(annualSalariesMedian);

    // Adding the Salaries to the Year Row
    for (let j = 0; j < yearSalaries.length; j++) {
      const salary = document.createElement('td');
      salary.classList.add('Activity-table-cell');
      salary.innerText = `$${yearSalaries[j]}`;
      // HTML Layout
      yearRow.appendChild(salary);
    }
  }

  // Adding eventListeners to Close Company Info Button to delete the annual medians table and its subtitle
  if (eventListenersCloseCompanyInformation > 0) {
    return
  } else {
    closeActivitiesInfoContainers[1].addEventListener('click', () => {
      // Deleting Subtitle
      activitiesTableContainers[1].removeChild(activitiesTableContainers[1].childNodes[1]);
      // Deleting Table
      activitiesTableContainers[1].removeChild(activitiesTableContainers[1].childNodes[2]);
      eventListenersCloseCompanyInformation = 1;
    })
  }
}

function addPersonCalculationOptions(array) {
  // Salary Median
  array.push({
    id: "person-median",
    name: 'salary median',
    result: "person-median-result"
  });
  // Salary Projections
  array.push({
    id: "person-projections",
    name: 'salary projections',
    result: "person-projections-result"
  });
}

function addCompanyCalculationOptions(array) {
  // Salaries Projections Median
  array.push({
    id: 'company-projections-median',
    name: 'Company projections median',
    result: 'company-projections-median'
  });
  // Salaries Projections Range
  array.push({
    id: 'company-projections-range',
    name: 'Company projections range',
    result: 'company-projections-range'
  });
}

function createCalculationOptions(id, array, container, optionsList, optionsResultsList) {
  // Creating Calculation Options Container
  const optionsContainer = document.createElement('div');
  optionsContainer.setAttribute('id', id);
  optionsContainer.classList.add('Grid-center', 'grid-cols-2');

  // HTML Layout
  container.appendChild(optionsContainer);
  
  for (element of array) {
    // Creating HTML Elements
    const calculationOption = document.createElement('button');
    calculationOption.setAttribute('id', element.id);
    calculationOption.classList.add('Activity-button', 'Clicked--dark', 'min-h-[48px]');
    const calculationName = document.createElement('p');
    calculationName.innerText = element.name;
    const calculationResult = document.createElement('p');
    calculationResult.setAttribute('id', element.result);

    // HTML Layout
    optionsContainer.appendChild(calculationOption);
    calculationOption.append(calculationName, calculationResult);

    // Elements Array
    optionsList.push(calculationOption);
    optionsResultsList.push(calculationResult);
  }
}

function calculationButton(button, buttonResult, calculation, elementToCalculate, closeButtons) {
  // Removing Clicked styles
  setTimeout(() => {
    button.classList.remove('Clicked--dark');
  }, 500);

  // Calculation Result
  buttonResult.classList.add('text-lg');
  buttonResult.innerHTML = `$${calculation(elementToCalculate)}`;

  // Adding eventListeners to "closeButtons" to reset the "Calculation Buttons" values
  closeButtons.forEach(closeButton => closeButton.addEventListener('click', () => resetCalculationButton(button, buttonResult)));
}

function resetCalculationButton(button, buttonResult) {
  buttonResult.innerHTML = "";
  button.classList.add('Clicked--dark');
}

function salaryProjections(array) {
  const salaryIncreases = [];

  for (let i = 1; i < array.length; i++) {
    const actualSalary = array[i];
    const previousSalary = array[i - 1];
    const increase = actualSalary - previousSalary;
    const perecentageIncrease = increase / previousSalary;
    salaryIncreases.push(perecentageIncrease);
  }

  const salaryIncreasesMedian = medianFormula(salaryIncreases);

  const lastSalary = array[array.length - 1];
  const salaryIncrease = lastSalary * salaryIncreasesMedian
  const newSalary = Math.floor(salaryIncrease + lastSalary);
  return newSalary
}

function companySalaryProjections(company) {
  const annualSalaryMedians = [];
  const companyAnnualSalaries = Object.values(companies[company]);

  companyAnnualSalaries.forEach(year => {
    const annualSalaryMedian = medianFormula(year);
    annualSalaryMedians.push(annualSalaryMedian);
  })

  const annualSalaryIncreases = [];

  for (let i = 1; i < annualSalaryMedians.length; i++) {
    const currentMedian = annualSalaryMedians[i];
    const previousMedian = annualSalaryMedians[i - 1];
    const increase = currentMedian - previousMedian;
    const increasePercentage = increase / previousMedian;
    annualSalaryIncreases.push(increasePercentage);
  }

  const annualSalaryIncreasesMedian = medianFormula(annualSalaryIncreases);
  const lastAnnualSalaryMedian = annualSalaryMedians[annualSalaryMedians.length - 1];
  const annualSalaryMedianIncrease = annualSalaryIncreasesMedian * lastAnnualSalaryMedian;
  const newAnnualSalaryMedian = Math.floor(lastAnnualSalaryMedian + annualSalaryMedianIncrease);

  return newAnnualSalaryMedian;
}

function rangeSalariesProjections(company) {
  // Storing the Lowest and Highest salaries of the company per year
  const annualSalaries = Object.values(companies[company]);
  const annualSalariesSorted = [];

  for (annualSalary of annualSalaries) {
    annualSalary.sort((a, b) => a - b);
    annualSalariesSorted.push(annualSalary);
  }
  
  const annualLowestSalaries = [];
  const annualHighestSalaries = [];
  const annualLowestAndHighestSalaries = [annualLowestSalaries, annualHighestSalaries];

  annualSalariesSorted.forEach(annualSalariesList => {
    annualLowestSalaries.push(annualSalariesList[0]);
    annualHighestSalaries.push(annualSalariesList[annualSalariesList.length - 1]);
  });

  // Projections
  const rangeAnnualSalariesProjections = [];
  
  annualLowestAndHighestSalaries.forEach(annualSalaryList => {
    const increasePercentages = [];
    
    for (let i = 1; i < annualSalaryList.length; i++) {
      const previousAnnualSalary = annualSalaryList[i - 1];
      const currentAnnualSalary = annualSalaryList[i];
      const annualSalaryIncrease = currentAnnualSalary - previousAnnualSalary;
      const annualSalaryIncreasePercentage = annualSalaryIncrease / previousAnnualSalary;
      increasePercentages.push(annualSalaryIncreasePercentage);
    }

    const increasePercentageProjections = medianFormula(increasePercentages);
    const lastAnnualSalary = annualSalaryList[annualSalaryList.length - 1];
    const annualSalaryIncreaseProjections = lastAnnualSalary * increasePercentageProjections;
    const annualSalaryProjections = Math.floor(lastAnnualSalary + annualSalaryIncreaseProjections);
    rangeAnnualSalariesProjections.push(annualSalaryProjections);
  });
  
  return `${rangeAnnualSalariesProjections[0]} - $${rangeAnnualSalariesProjections[1]}`
}

function getPeopleSalaryMedians() {
  // People Salary Medians List
  const peopleSalaryMedians = [];
  // Getting every person's salaries median
  salaries.forEach(person => {
    const personJobs = person.jobs;
    const personSalaries = personJobs.map(job => job.salary);
    const salaryMedian = medianFormula(personSalaries);
    peopleSalaryMedians.push(salaryMedian);
  });

  return peopleSalaryMedians;
}

function generalMedian() {
  const peopleSalaryMedians = getPeopleSalaryMedians();
  const generalMedian = medianFormula(peopleSalaryMedians);

  return `$${generalMedian}`;
}

function top20Median() {
  const peopleSalaryMedians = getPeopleSalaryMedians();
  const peopleSalaryMediansSorted = peopleSalaryMedians.sort((a, b) => b - a);
  const top20PeopleAmount = peopleSalaryMediansSorted.length * 0.2;
  const top20PeopleMedians = peopleSalaryMediansSorted.slice(0, top20PeopleAmount);

  return `$${medianFormula(top20PeopleMedians)}`;
}

function lowest20Median() {
  const peopleSalaryMedians = getPeopleSalaryMedians();
  const peopleSalaryMediansSorted = peopleSalaryMedians.sort((a, b) => a - b);
  const top20PeopleAmount = peopleSalaryMediansSorted.length * 0.2;
  const top20PeopleMedians = peopleSalaryMediansSorted.slice(0, top20PeopleAmount);

  return `$${medianFormula(top20PeopleMedians)}`;
}

function restructuringSalariesInformation(salaries) {
  salaries.forEach(person => {
    person.jobs.forEach(job => {
      if (!companies[job.company]) {
        companies[job.company] = {};
      } 
      
      if (!companies[job.company][job.year]) {
        companies[job.company][job.year] = [];
      }
  
      companies[job.company][job.year].push(job.salary);
    })
  })
}

// -------------- Salaries Options Elements -------------- 
const salariesInfo = document.getElementById('salaries-info');
const analysisOptionsContainer = document.getElementById('analysis-options-container');
const analysisOptions = document.getElementById('analysis-options');
const analysisOptionsList = [];
const analysisOptionsCards = [];

// Adding Salaries Options Cards
addSalariesOptionsCards(analysisOptionsList);

// Creating Card elements for "By person", "By company" and "Others" type of analysis
createCardElements(analysisOptionsList, analysisOptions, analysisOptionsCards);

// -------------- Activities Containers -------------- 
const salariesActivitiesList = [];
const salariesActivitiesContainers = [];
const closeSalariesActivitiesContainers = [];
const activitiesOptionsContainers = [];
const activitiesOptions = [];
const activitiesForms = [];
const activitiesInfoContainers = [];
const closeActivitiesInfoContainers = [];
const activitiesTableContainers = [];
const activitiesTableSubtitles = [];

// Adding Activities Containers
addActivitiesContainers(salariesActivitiesList);

// Creating Activities containers for "By person", "By company" and "Others" type of analysis
createActivitiesContainers(salariesActivitiesList, salariesContainer, salariesActivitiesContainers, closeSalariesActivitiesContainers, activitiesOptionsContainers, activitiesInfoContainers, closeActivitiesInfoContainers, activitiesTableContainers, activitiesTableSubtitles);
// Adding eventListeners to every Salary Option Container to display their activities
addEventsToOptionsContainers(analysisOptionsCards, salariesActivitiesContainers);

// Adding eventListeners to every Close Button to hide their Activity Container
addEventsToCloseActivitiesContainers(closeSalariesActivitiesContainers, salariesActivitiesContainers);

// Adding eventListeners to every Close Button to hide their Activity Information Container
addEventsToCloseActivitiesInfoContainers(closeActivitiesInfoContainers, activitiesInfoContainers, activitiesOptions, activitiesForms);

// ------------ Analysis by Person Activity Container ------------ 
let personSalaries;
const personOptionsList = [];
const personOptions = [];
activitiesOptions.push(personOptions);

// Adding Person Analysis Options
addPersonOptions(personOptionsList);

// Creating Person Analysis Options
createOptions(personOptionsList, activitiesOptionsContainers[0], personOptions);

// Enter ID Option
// Creating a Form to receive the Person ID and saving its elements in an array
const enterIdFormElements = createEnterInfoForm("enter-id", "close-enter-id", "enter-id-input", "Enter an ID", "number", "enter-id-submit", "(1042671 - 1042690)", "enter-id-invalid", "Invalid ID", activitiesOptionsContainers[0]);
const enterIDForm = document.getElementById('enter-id');
activitiesForms.push(enterIDForm);
let eventListenersEnterIdSubmit = 0;

// Adding eventListeners to Enter ID Option
personOptions[0].addEventListener('click', () => addEventsToEnterInfoOption(enterIdFormElements, personOptions, closeSalariesActivitiesContainers[0], addEventsToSubmitEnterIdForm));

// Random Person Option
// Adding eventListeners to Random Person Option
personOptions[1].addEventListener('click', () => addEventsToRandomEntityOption(closeSalariesActivitiesContainers[0], 'random-person'));

// Person Calculation Options
const calculationPersonOptionsList = [];
const calculationPersonOptions = [];
const calculationPersonOptionsResults = [];

// Adding Person Calculation Options
addPersonCalculationOptions(calculationPersonOptionsList);

// Creating Person Calculation Options
createCalculationOptions('person-calculation-options', calculationPersonOptionsList, activitiesInfoContainers[0], calculationPersonOptions, calculationPersonOptionsResults);

// Adding eventListeners to Person Median Button
calculationPersonOptions[0].addEventListener('click', () => calculationButton(calculationPersonOptions[0], calculationPersonOptionsResults[0], medianFormula, personSalaries, closeActivitiesInfoContainers));

// Adding eventListeners to Person Projections Button
calculationPersonOptions[1].addEventListener('click', () => calculationButton(calculationPersonOptions[1], calculationPersonOptionsResults[1], salaryProjections, personSalaries, closeActivitiesInfoContainers));

// ------------ Analysis by Company Activity Container ------------ 
const companies = {};
let company;
const companyOptionsList = [];
const companyOptions = [];
activitiesOptions.push(companyOptions);

// Restructuring "Salaries" object into "Companies"
restructuringSalariesInformation(salaries);

// Adding Company Options
addCompanyOptions(companyOptionsList);

// Creating Company Options
createOptions(companyOptionsList, activitiesOptionsContainers[1], companyOptions);

// Enter Company Option
// Creating a Form to receive the Company and saving its elements in an array
const enterCompanyFormElements = createEnterInfoForm("enter-company", "close-enter-company", "enter-company-input", "Type the Company", "text", "enter-company-submit", "", "enter-company-invalid", "Company doesn't exist", activitiesOptionsContainers[1]);
const enterCompanyForm = document.getElementById('enter-company');
activitiesForms.push(enterCompanyForm);
let eventListenersEnterCompanySubmit = 0;
let eventListenersCloseCompanyInformation = 0;

// Adding eventListeners to Enter Company Option
companyOptions[0].addEventListener('click', () => addEventsToEnterInfoOption(enterCompanyFormElements, companyOptions, closeSalariesActivitiesContainers[1], addEventsToSubmitEnterCompanyForm));

// Adding eventListeners to Random Company Option
companyOptions[1].addEventListener('click', () => addEventsToRandomEntityOption(closeSalariesActivitiesContainers[1], 'random-company'));

// Company Calculation Options
const calculationCompanyOptionsList = [];
const calculationCompanyOptions = [];
const calculationCompanyOptionsResults = [];

// Adding Company Calculation Options
addCompanyCalculationOptions(calculationCompanyOptionsList);

// Creating Company Calculation Options
createCalculationOptions('company-calculation-options', calculationCompanyOptionsList, activitiesInfoContainers[1], calculationCompanyOptions, calculationCompanyOptionsResults);

// Adding eventListeners to Company Projections Median Button
calculationCompanyOptions[0].addEventListener('click', () => calculationButton(calculationCompanyOptions[0], calculationCompanyOptionsResults[0], companySalaryProjections, company, closeActivitiesInfoContainers));

// Adding eventListeners to Company Projections Range Button
calculationCompanyOptions[1].addEventListener('click', () => calculationButton(calculationCompanyOptions[1], calculationCompanyOptionsResults[1], rangeSalariesProjections, company, closeActivitiesInfoContainers));

// ------------ Others Analysis Activity Container ------------ 
const othersOptionsList = [];
const othersOptions = [];
activitiesOptions.push(othersOptions);

// Adding Others Analysis Options
addOthersOptions(othersOptionsList);

// Creating Others Analysis Options
createOptions(othersOptionsList, activitiesOptionsContainers[2], othersOptions);

// General Median Option
// Adding eventListeners to General Median Option
othersOptions[0].addEventListener('click', () => addEventsToOtherOptions(closeSalariesActivitiesContainers[2], 'General Salaries Median', generalMedian));

// Adding eventListeners to Top 20% Median Option
othersOptions[1].addEventListener('click', () => addEventsToOtherOptions(closeSalariesActivitiesContainers[2], 'Top 20% Salaries Median', top20Median));

// Adding eventListeners to Lowest 20% Median Option
othersOptions[2].addEventListener('click', () => addEventsToOtherOptions(closeSalariesActivitiesContainers[2], 'Lowest 20% Salaries Median', lowest20Median));