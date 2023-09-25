// --------------------------- Functions ---------------------------
function createAnalysisOptionsContainer(containerToAppend) {
  // --------- HTML Elements ---------
  // Analysis Options Parent Container
  const analysisOptionsParentContainer = document.createElement('div');
  analysisOptionsParentContainer.setAttribute('id', 'analysis-options-parent-container');
  analysisOptionsParentContainer.classList.add('Grid-center');
  // Heading
  const analysisOptionsHeading = document.createElement('h2');
  analysisOptionsHeading.classList.add('Activity-subtitle', 'w-full');
  analysisOptionsHeading.innerText = `Choose how do you want to analyze the information`;
  // Analysis Options  Container
  const analysisOptionsContainer = document.createElement('div');
  analysisOptionsContainer.setAttribute('id', 'analysis-options-container');
  analysisOptionsContainer.classList.add('Flex-wrap');
  
  // --------- HTML Layout ---------
  // Analysis Options Parent Container into Salaries Activity
  containerToAppend.appendChild(analysisOptionsParentContainer);
  // Analysis Options Heading and Container into Analysis Options Parent Container
  analysisOptionsParentContainer.append(analysisOptionsHeading, analysisOptionsContainer);
}

function createSalariesInfoParagraph(containerToAppend) {
  // --------- HTML Elements ---------
  // Salaries Info Paragraph
  const salariesInfoParagraph = document.createElement('p');
  salariesInfoParagraph.setAttribute('id', 'salaries-info');
  salariesInfoParagraph.classList.add('text-center', 'leading-4', 'p-2', 'rounded-md', 'bg-tertiary', 'md:text-3xl', 'md:leading-8', 'md:p-3');
  salariesInfoParagraph.innerText = `Here's a database with information from several people and their jobs and annual salaries`;
  // Salaries Info Download
  const salariesInfoDownload = document.createElement('a');
  salariesInfoDownload.setAttribute('href', './javascript/salaries-data.js');
  salariesInfoDownload.setAttribute('download', '');
  salariesInfoDownload.classList.add('block', 'text-sm', 'font-semibold', 'md:text-2xl');
  salariesInfoDownload.innerText = `(Click here to download the database)`;
  
  // --------- HTML Layout ---------
  // Salaries Info into Salaries Activity
  containerToAppend.prepend(salariesInfoParagraph);
  // Salaries Info Download into Salaries Info
  salariesInfoParagraph.appendChild(salariesInfoDownload);
}

function addAnalysisOptionsInfo(elementsInfoArray) {
  // By Person
  elementsInfoArray.push({
    id: "analysis-person",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693844284/Math/person_fzuyo4.png",
    imageAlt: "Person Drawing",
    name: "By person"
  });
  // By Company
  elementsInfoArray.push({
    id: "analysis-company",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693844284/Math/company_ilyg69.png",
    imageAlt: "Company Drawing",
    name: "By Company"
  });
  // Others
  elementsInfoArray.push({
    id: "analysis-others",
    image: "https://res.cloudinary.com/dziyyutwr/image/upload/v1693844284/Math/others_xsmczg.png",
    imageAlt: "Other Options Icon",
    name: "Others"
  });
}

function addAnalysisContainersInfo(elementsInfoArray) {
  // By Person
  elementsInfoArray.push({
    id: "person-analysis-container",
    subtitle: "By person",
    optionsId: "person-options-container",
    activityContainerId: "person-activity-container",
    activitySubtitle: "Working Information",
    tableContainerId: "person-table-container",
    talbeSubtitleId: "person-name"
  });
  // By Company
  elementsInfoArray.push({
    id: "company-analysis-container",
    subtitle: "By company",
    optionsId: "company-options-container",
    activityContainerId: "company-activity-container",
    activitySubtitle: "Salaries Information",
    tableContainerId: "company-table-container",
    talbeSubtitleId: "company-name"
  });
  // Others
  elementsInfoArray.push({
    id: "others-analysis-container",
    subtitle: "Others",
    optionsId: "others-options-container",
    activityContainerId: "others-activity-container",
    activitySubtitle: "",
    tableContainerId: "others-table-container",
    talbeSubtitleId: "others-name"
  });
}

function createActivitiesContainers(elementsInfoArray, containerToAppend, analysisContainers, analysisOptionsContainers, analysisActivitiesContainers, analysisActivitiesTableContainers, analysisActivitiesTableSubtitles) {
  // Creating the Analysis Activities Container
  const analysisActivitiesContainer = document.createElement('div');
  analysisActivitiesContainer.setAttribute('id', 'analysis-activities-container');
  analysisActivitiesContainer.classList.add('Grid-center');
  // Adding the Analysis Activities Container into the Salaries Activity Container
  containerToAppend.appendChild(analysisActivitiesContainer);

  for (element of elementsInfoArray) {
    // --------- HTML Elements ---------
    // Analysis Container
    const analysisContainer = document.createElement('div');
    analysisContainer.setAttribute('id', element.id);
    analysisContainer.classList.add('hidden', 'Grid-center', 'md:gap-4');
    // Analysis Subtitle
    const analysisSubtitle = document.createElement('h2');
    analysisSubtitle.classList.add('Activity-subtitle');
    analysisSubtitle.innerText = element.subtitle;
    // Analysis Options Container
    const analysisOptionsContainer = document.createElement('div');
    analysisOptionsContainer.setAttribute('id', element.optionsId);
    analysisOptionsContainer.classList.add('Grid-center');
    // Analysis Activity Container
    const analysisActivityContainer = document.createElement('div');
    analysisActivityContainer.setAttribute('id', element.activityContainerId)
    analysisActivityContainer.classList.add('hidden', 'Grid-center', 'gap-3', 'md:gap-8');
    // Close Analysis Container button
    const closeAnalysisContainerButton = document.createElement('img');
    closeAnalysisContainerButton.setAttribute('src', "https://res.cloudinary.com/dziyyutwr/image/upload/v1693489975/Math/close-icon_ejx6qw.png");
    closeAnalysisContainerButton.setAttribute('alt', 'Close Icon');
    closeAnalysisContainerButton.classList.add('Close-button', 'close-analysis-container');
    // Analysis Activity Subtitle
    const analysisActivitySubtitle = document.createElement('h2');
    analysisActivitySubtitle.classList.add('Activity-subtitle');
    analysisActivitySubtitle.innerText = element.activitySubtitle;
    // Analysis Activity Table Container
    const analysisActivityTableContainer = document.createElement('div');
    analysisActivityTableContainer.setAttribute('id', element.tableContainerId);
    analysisActivityTableContainer.classList.add('Flex-center', 'p-2', 'rounded-md', 'bg-tertiary', 'overflow-auto', 'Scrollbar-hide', 'md:gap-5', 'md:p-4', 'md:rounded-xl');
    // Table Container Subtitle
    const analysisActivityTableSubtitle = document.createElement('h2');
    analysisActivityTableSubtitle.setAttribute('id', element.talbeSubtitleId);
    analysisActivityTableSubtitle.classList.add('Activity-subtitle');
    // Close Analysis Activity Container button
    const closeAnalysisActivityContainerButton = document.createElement('img');
    closeAnalysisActivityContainerButton.setAttribute('src', "https://res.cloudinary.com/dziyyutwr/image/upload/v1693489975/Math/close-icon_ejx6qw.png");
    closeAnalysisActivityContainerButton.setAttribute('alt', 'Close Icon');
    closeAnalysisActivityContainerButton.classList.add('Close-button', 'close-analysis-activity-container');

  // --------- HTML Layout ---------
    analysisActivitiesContainer.append(analysisContainer);
    analysisContainer.append(analysisSubtitle, analysisOptionsContainer, analysisActivityContainer,closeAnalysisContainerButton);
    analysisActivityContainer.append(analysisActivitySubtitle, analysisActivityTableContainer, closeAnalysisActivityContainerButton);
    analysisActivityTableContainer.appendChild(analysisActivityTableSubtitle);

    // Storing the Elements in Arrays
    analysisContainers.push(analysisContainer);
    analysisOptionsContainers.push(analysisOptionsContainer);
    analysisActivitiesContainers.push(analysisActivityContainer);
    analysisActivitiesTableContainers.push(analysisActivityTableContainer);
    analysisActivitiesTableSubtitles.push(analysisActivityTableSubtitle);
  }
}

function addEventsToAnalysisOptions(analysisOptions, analysisOptionsParentContainer, analysisContainers) {
  for (let i = 0; i < analysisOptions.length; i++) {
    analysisOptions[i].addEventListener('click', () => {
      // Timeout to allow Clicked styles appear
      setTimeout(() => {
        // Hiding Analysis Options Container and Showing the corresponding Activity Container
        hideShowContainers(analysisOptionsParentContainer, analysisContainers[i]);
      }, 100);
    });
  };
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

function addPersonAnalysisOptionsInfo(elementsInfoArray) {
  // Enter ID
  elementsInfoArray.push({
    id: "enter-id-person-option",
    text: "Enter ID"
  });
  // Random Person
  elementsInfoArray.push({
    id: "random-person-option",
    text: "Random person"
  });
}

function addCompanyAnalysisOptionsInfo(elementsInfoArray) {
  // Enter Company
  elementsInfoArray.push({
    id: "enter-company-option",
    text: "Enter Company"
  });
  // Random Company
  elementsInfoArray.push({
    id: "random-company-option",
    text: "Random company"
  });
}

function addOthersAnalysisOptionsInfo(elementsInfoArray) {
  // General Median
  elementsInfoArray.push({
    id: "general-median",
    text: "General Median"
  });
  // Top 20% Salaries
  elementsInfoArray.push({
    id: "top-20",
    text: "Top 20% Median"
  });
  // Lowest 20% Salaries
  elementsInfoArray.push({
    id: "lowest-20",
    text: "Lowest 20% Median"
  });
}

function createAnalysisOptions(elementsInfoArray, containerToAppend, analysisOptionsArray, allAnalysisOptionsArray) {
  for (element of elementsInfoArray) {
    // --------- HTML Elements ---------
    const option = document.createElement('div');
    option.setAttribute('id', element.id);
    option.classList.add('Activity-analysis-option');
    option.innerText = element.text;

  // --------- HTML Layout ---------
    containerToAppend.appendChild(option);

    // Elements Array
    analysisOptionsArray.push(option);
    allAnalysisOptionsArray.push(option);
  }
}

function createEnterInfoForm(formId, inputId, inputText, inputType, inputPlaceholder, submitId, inputHint, invalidId, invalidText, containerToAppend, analysisOptionsForms, analysisOptionsFormsInputs) {
  // --------- HTML Elements ---------
  // Form
  const form = document.createElement('form');
  form.setAttribute('id', formId);
  form.setAttribute('autocomplete', 'off');
  form.classList.add('hidden', 'Grid-center');
  // Label
  const label = document.createElement('label');
  label.setAttribute('for', inputId);
  label.classList.add('Activity-subtitle');
  label.innerText = inputText;
  // Input
  const input = document.createElement('input');
  input.setAttribute('id', inputId);
  input.setAttribute('type', inputType);
  input.setAttribute('placeholder', inputPlaceholder);
  input.classList.add('Activity-input');
  // Submit
  const submit = document.createElement('input');
  submit.setAttribute('id', submitId);
  submit.setAttribute('type', 'submit');
  submit.classList.add('Activity-submit');
  // Hint
  const hint = document.createElement('p');
  hint.classList.add('text-sm', 'md:text-2xl');
  hint.innerText = inputHint;
  // Invalid ID
  const invalidInfo = document.createElement('p');
  invalidInfo.setAttribute('id', invalidId);
  invalidInfo.classList.add('hidden', 'font-semibold', 'md:text-3xl');
  invalidInfo.innerText = invalidText;
  // Close Form
  const close = document.createElement('img');
  close.setAttribute('src', "https://res.cloudinary.com/dziyyutwr/image/upload/v1693489975/Math/close-icon_ejx6qw.png");
  close.setAttribute('alt', 'Close Icon');
  close.classList.add('Close-button', 'close-form');

  // --------- HTML Layout ---------
  containerToAppend.appendChild(form);
  form.append(label, input, submit, hint, invalidInfo, close);

  // Storing Options Forms and Inputs in an array
  analysisOptionsForms.push(form);
  analysisOptionsFormsInputs.push(input);
}

function addEventsToEnterInfoOption(optionsToHide, closeButtonToHide, enterInfoForm) {
  // Timeout to allow Clicked styles appear
  setTimeout(() => {
    // Hiding the Options
    optionsToHide.forEach(option => option.classList.add('hidden'));
    // Hiding Close Activity Button and Showing the Form
    hideShowContainers(closeButtonToHide, enterInfoForm);
  }, 100);
}

function addEventsToSubmitEnterInfoForm(submitForm, formType, inputForm, invalidId) {
  submitForm.addEventListener('click', () => {
    event.preventDefault();

    // Validating the type of the form
    if (formType === 'enter-id') {
      // Taking the ID typed
      const id = Number(inputForm.value);

      // Timeout to allow Clicked styles appear
      setTimeout(() => {
        // Validating if the ID is correct
        if (id < 1042671 || id > 1042690) {
          // Showing the Invalid output
          invalidId.classList.remove('hidden');
        } else {
          // Resetting Form values
          inputForm.value = ``;
          invalidId.classList.add('hidden');
          // Taking the person information to display it
          createSalariesInfo(id);
        }
      }, 200);
    } else {
      // Taking the Company typed
      const company = inputForm.value;
  
      // Timeout to allow Clicked styles appear
      setTimeout(() => {
        if (!companies[company]) {
          invalidId.classList.remove('hidden');
        } else {
          // Resetting Form values
          inputForm.value = "";
          invalidId.classList.add('hidden');
          // Taking the company information to display it
          createSalariesInfo(company);
        }
      }, 200)
    }
  });
}

function addEventsToCloseEnterInfoFormButtons(closeButtonsArray, inputsToReset, containerToHideArray, containerToShowArray, closeButtonsToShowArray) {
  // Hiding the Form and Showing the Analysis Options
  addEventsToCloseButtons(closeButtonsArray, containerToHideArray, containerToShowArray);

  closeButtonsArray.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
      setTimeout(() => {
        // Showing the correspoding "Close Analysis Container" button
        closeButtonsToShowArray.forEach(closeButtonToShow => {
          if (closeButtonToShow.classList.contains('hidden')) {
            closeButtonToShow.classList.remove('hidden');
          }
          
          // Resetting the Forms Inputs
          inputsToReset.forEach(inputToReset => {
            inputToReset.value = ``;
          });
        });
      }, 75);
    });
  });
}

function addEventsToRandomEntityOption(closeButtonToHide, randomEntity) {
  // Timeout to allow Clicked styles appear
  setTimeout(() => {
    // Hiding Close Analysis Container Button
    closeButtonToHide.classList.add('hidden');

    // Taking the information to display it
    createSalariesInfo(randomEntity);
  }, 100);
}

function addEventsToOthersAnalysisOptions(closeButtonToHide, subtitle, optionFunction) {
  // Timeout to allow Clicked styles appear
  setTimeout(() => {
    // Hiding "Other options" container and making the "Calculation Result" appear
    hideShowContainers(analysisOptionsContainersElements[2], analysisActivitiesContainersElements[2]);

    // Hiding the "Close Button" of the Others Activity Container and Table Container
    closeButtonToHide.classList.add('hidden');

    // Moving Others Activity Information "Close Button" 
    closeAnalysisActivitiesContainersButtons[2].classList.add('top-[-28px]');

    // Adding eventListener to show Others Activities Container "Close Button"
    closeAnalysisActivitiesContainersButtons[2].addEventListener('click', () => {
      setTimeout(() => {
        closeButtonToHide.classList.remove('hidden');
      }, 75);
    });

    // Assigning Option Subtitle
    analysisActivitiesTableSubtitlesElements[2].innerText = subtitle;

    // Creating Result Paragraph
    const resultOption = document.createElement('p');
    resultOption.classList.add('text-xl', 'font-bold', 'md:text-4xl');
    resultOption.innerText = optionFunction();

    // Adding Result Paragraph
    analysisActivitiesTableContainersElements[2].appendChild(resultOption);
  }, 100);
}

function createSalariesInfo(identifier) {
  let tableType;
  let entity;
  let companyName;

  // Assigning the given information
  switch (true) {
    // Assigning the Person info according to the given ID
    case typeof identifier === "number":
      entity = findPerson(identifier);
      tableType = 'person';
      break;
    
    // Assigning the Person info of a random Person
    case identifier === "random-person":
      entity = findPerson(randomNumber(1042671, 1042691));
      tableType = 'person';
      break;

    // Assigning the Company info according to the given Company
    case typeof identifier === "string" && identifier !== "random-company":
      companyName = identifier;
      entity = findCompany(identifier);
      tableType = 'company';
      break;

    // Assigning the Company info of a random Company
    default:
      const companiesNames = Object.keys(companies);
      companyName = companiesNames[randomNumber(0, (companiesNames.length - 1))];
      entity = findCompany(companyName)
      tableType = 'company';
      // Assigning the Company Name to Company
      company = companyName;
      break;
  }

  // Creating the table 
  switch (true) {
    // In case the selection was a Person
    case tableType === "person":
      // Storing the Person salaries
      personSalaries = entity.jobs.map(job => job.salary);

      // Hiding "Person Options" container and making "Person Information" container appear
      hideShowContainers(analysisOptionsContainersElements[0], analysisActivitiesContainersElements[0]);

      // Assigning the Person name
      analysisActivitiesTableSubtitlesElements[0].innerText = entity.name;

      // Creating Person Jobs Information table
      createPersonTable(entity);
      break;
  
    // In case the selection was a Company
    default:
      // Hiding "Company Options" container and making "Company Information" container appear
      hideShowContainers(analysisOptionsContainersElements[1], analysisActivitiesContainersElements[1]);

      // Assigning Company name
      analysisActivitiesTableSubtitlesElements[1].innerText = companyName + ' Salaries';

      // Creating Company Salaries Information table
      createCompanyTable(entity);
      break;
  }
}

function findPerson(id) {
  return salaries.find(person => person.id === id);
}

function findCompany(companyName) {
  return companies[companyName];
}

function createPersonTable(person) {
  // --------- HTML Elements ---------
  // Table
  const table = document.createElement('table');
  table.setAttribute('id', 'person-table');
  table.classList.add('Activity-table');
  // Row for Headings
  const rowHeading = document.createElement('tr');
  rowHeading.classList.add('bg-secondary');
  // Year Heading
  const yearHeading = document.createElement('th');
  yearHeading.classList.add('Activity-table-cell');
  yearHeading.innerText = "Year";
  // Company Heading
  const companyHeading = document.createElement('th');
  companyHeading.classList.add('Activity-table-cell');
  companyHeading.innerText = "Company";
  // Salary Heading
  const salaryHeading = document.createElement('th');
  salaryHeading.classList.add('Activity-table-cell');
  salaryHeading.innerText = "Salary";
  
  // --------- HTML Layout ---------
  analysisActivitiesTableContainersElements[0].append(table);
  table.appendChild(rowHeading);
  rowHeading.append(yearHeading, companyHeading, salaryHeading);

  // Creating the table information
  for (job of person.jobs) {
    // --------- HTML Elements ---------
    // A new row for the table
    const tableRow = document.createElement('tr');
    // Year for the row
    const year = document.createElement('td');
    year.classList.add('Activity-table-cell');
    year.innerText = job.year;
    // Company for the row
    const company = document.createElement('td');
    company.classList.add('Activity-table-cell');
    company.innerText = job.company;
    // Salary for the row
    const salary = document.createElement('td');
    salary.classList.add('Activity-table-cell');
    salary.innerText = "$" + job.salary;
    
    // --------- HTML Layout ---------
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
  rowHeading.classList.add('bg-secondary', 'text-lg', 'md:text-3xl');
  const yearHeading = document.createElement('th');
  yearHeading.classList.add('Activity-table-cell');
  yearHeading.innerText = 'Year';
  const salariesHeading = document.createElement('th');
  salariesHeading.setAttribute('colspan', '10');
  salariesHeading.classList.add('Activity-table-cell');
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
  yearMediansHeading.classList.add('Activity-table-cell', 'text-lg', 'bg-secondary', 'md:text-3xl');
  yearMediansHeading.innerText = 'Year';
  const rowAnnualMedians = document.createElement('tr');
  const annualMediansHeading = document.createElement('th');
  annualMediansHeading.classList.add('Activity-table-cell', 'text-lg', 'bg-secondary', 'md:text-3xl')
  annualMediansHeading.classList.add('Activity-table-cell', 'text-lg');
  annualMediansHeading.innerText = 'Median';
  // HTML Layout
  analysisActivitiesTableContainersElements[1].append(table, mediansTableSubtitle, mediansTable);
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
}

function addEventsToCloseAnalysisActivitiesContainersButtons(closeButtonsArray, containerToHideArray, containerToShowArray, closeButtonsToShowArray) {
  // Hiding the Analysis Activities Containers and Showing the Analysis Options Containers
  addEventsToCloseButtons(closeButtonsArray, containerToHideArray, containerToShowArray);

  for (let i = 0; i < closeButtonsArray.length; i++) {
    closeButtonsArray[i].addEventListener('click', () => {
      setTimeout(() => {
        // Deleting previous table
        analysisActivitiesTableContainersElements[i].removeChild(analysisActivitiesTableContainersElements[i].lastChild);

        // Showing the Close Analysis Container button only if the Random Option was chosen
        if (analysisOptionsFormsElements[i].classList.contains('hidden')) {
          closeButtonsToShowArray[i].classList.remove('hidden');
        }
      }, 75);
    });
  }
}

function addPersonCalculationOptions(elementsInfoArray) {
  // Salary Median
  elementsInfoArray.push({
    id: "person-median",
    name: 'salary median',
    result: "person-median-result"
  });
  // Salary Projections
  elementsInfoArray.push({
    id: "person-projections",
    name: 'salary projections',
    result: "person-projections-result"
  });
}

function addCompanyCalculationOptions(elementsInfoArray) {
  // Salaries Projections Median
  elementsInfoArray.push({
    id: 'company-projections-median',
    name: 'Company projections median',
    result: 'company-projections-median'
  });
  // Salaries Projections Range
  elementsInfoArray.push({
    id: 'company-projections-range',
    name: 'Company projections range',
    result: 'company-projections-range'
  });
}

function createCalculationOptions(calculationOptionsId, elementsInfoArray, containerToAppend, calculationOptionsArray, calculationOptionsResultsArray) {
  
  // --------- HTML Elements ---------
  // Calculation Options Container
  const optionsContainer = document.createElement('div');
  optionsContainer.setAttribute('id', calculationOptionsId);
  optionsContainer.classList.add('Grid-center', 'grid-cols-2');

  // --------- HTML Layout ---------
  containerToAppend.appendChild(optionsContainer);
  
  for (element of elementsInfoArray) {
    // --------- HTML Elements ---------
    // Calculation Option
    const calculationOption = document.createElement('button');
    calculationOption.setAttribute('id', element.id);
    calculationOption.classList.add('Activity-button', 'Clicked__dark', 'min-h-[48px]');
    // Calculation Name
    const calculationName = document.createElement('p');
    calculationName.innerText = element.name;
    // Calculation Result
    const calculationResult = document.createElement('p');
    calculationResult.setAttribute('id', element.result);
    calculationResult.classList.add('text-lg', 'md:text-4xl');

    // --------- HTML Layout ---------
    optionsContainer.appendChild(calculationOption);
    calculationOption.append(calculationName, calculationResult);

    // Elements Array
    calculationOptionsArray.push(calculationOption);
    calculationOptionsResultsArray.push(calculationResult);
  }
}

function addEventsToCalculationButtons(calculationButton, calculationButtonResult, calculationFunction, elementToCalculate, closeButtonsArray) {
  // Removing Clicked styles
  setTimeout(() => {
    calculationButton.classList.remove('Clicked__dark');
  }, 500);

  // Making the Calculation and showing it in the Button Result
  calculationButtonResult.innerHTML = `$${calculationFunction(elementToCalculate)}`;

  // Adding eventListeners to "closeButtonsArray" to reset the "Calculation Buttons" values
  closeButtonsArray.forEach(closeButton => closeButton.addEventListener('click', () => {
    setTimeout(() => {
      calculationButton.classList.add('Clicked__dark');
      calculationButtonResult.innerHTML = "";
    }, 75);
  }));
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

function addEventsToCloseCompanyActivityContainerButton(closeButton, companyTableContainer) {
  closeButton.addEventListener('click', () => {
    setTimeout(() => {
      // Deleting Subtitle
      companyTableContainer.removeChild(companyTableContainer.childNodes[1]);
      // Deleting Table
      companyTableContainer.removeChild(companyTableContainer.lastChild);
    }, 75);
  });
}

// ------------------------- Procedure -------------------------
const salariesActivityContainer = activitiesContainersElements[3];

// -------------- Analysis Options -------------- 
// Creating the Analysis Options container
createAnalysisOptionsContainer(salariesActivityContainer);

// Analysis Options elements
const analysisOptionsParentContainer = document.getElementById('analysis-options-parent-container');
const analysisOptionsContainer = document.getElementById('analysis-options-container');

// Creating the Salaries Info Paragraph
createSalariesInfoParagraph(analysisOptionsParentContainer);

// Adding Analysis Options information
const analysisOptionsInfo = [];
addAnalysisOptionsInfo(analysisOptionsInfo);

// Creating Analysis Options elements 
const analysisOptionsElements = [];
createCardElements(analysisOptionsInfo, analysisOptionsContainer, analysisOptionsElements);

// -------------- Activities Containers -------------- 
// Adding Activities Containers
const analysisContainersInfo = [];
addAnalysisContainersInfo(analysisContainersInfo);

// Creating and Storing Analysis Containers, Analysis Options Containers, Analysis Activities Containers, Analysis Activities Table Containers, and Analysis Activities Subtitles for every Analysis
const analysisContainersElements = [];
const analysisOptionsContainersElements = [];
const analysisOptionsFormsElements = [];
const analysisOptionsFormsInputsElements = [];
const analysisActivitiesContainersElements = [];
const analysisActivitiesTableContainersElements = [];
const analysisActivitiesTableSubtitlesElements = [];
createActivitiesContainers(analysisContainersInfo, salariesActivityContainer, analysisContainersElements, analysisOptionsContainersElements, analysisActivitiesContainersElements, analysisActivitiesTableContainersElements, analysisActivitiesTableSubtitlesElements);

// Saving all the Options of every Analysis Option
const analysisOptionsContainersOptionsElements = [];

// Adding eventListeners to every Analysis Option
addEventsToAnalysisOptions(analysisOptionsElements, analysisOptionsParentContainer, analysisContainersElements);

// ------------ Analysis by Person Activity Container ------------
let personSalaries; 

// Adding Person Analysis Options information
const personAnalysisOptionsInfo = [];
addPersonAnalysisOptionsInfo(personAnalysisOptionsInfo);

// Creating and Storing Person Analysis Options elements
const personAnalysisOptionsElements = [];
createAnalysisOptions(personAnalysisOptionsInfo, analysisOptionsContainersElements[0], personAnalysisOptionsElements, analysisOptionsContainersOptionsElements);

// Enter ID Option
// Creating and Storing the "Enter ID" person option form
createEnterInfoForm("enter-id-form", "enter-id-input", "Enter an ID", "number", "XXXXXXX", "enter-id-submit", "(1042671 - 1042690)", "enter-id-invalid", "Invalid ID", analysisOptionsContainersElements[0], analysisOptionsFormsElements, analysisOptionsFormsInputsElements);

// Enter ID Form Elements
const enterIdForm = document.getElementById('enter-id-form');
const enterIdInput = document.getElementById('enter-id-input');
const enterIdSubmit = document.getElementById('enter-id-submit');
const enterIdInvalid = document.getElementById('enter-id-invalid');

// Adding eventListeners to Enter ID Option
personAnalysisOptionsElements[0].addEventListener('click', () => addEventsToEnterInfoOption(personAnalysisOptionsElements, closeAnalysisContainerButtons[0], enterIdForm));

// Adding eventsListeners to Submit Enter ID Form
addEventsToSubmitEnterInfoForm(enterIdSubmit, 'enter-id', enterIdInput, enterIdInvalid);

// Random Person Option
// Adding eventListeners to Random Person Option
personAnalysisOptionsElements[1].addEventListener('click', () => addEventsToRandomEntityOption(closeAnalysisContainerButtons[0], 'random-person'));

// Person Calculation Options
// Adding the Person Calculation Options information
const personCalculationOptionsInfo = [];
addPersonCalculationOptions(personCalculationOptionsInfo);

// Creating and Storing the Person Calculation Options and Results
const personCalculationOptionsElements = [];
const personCalculationOptionsResultsElements = [];
createCalculationOptions('person-calculation-options', personCalculationOptionsInfo, analysisActivitiesContainersElements[0], personCalculationOptionsElements, personCalculationOptionsResultsElements);

// Adding eventListeners to Person Median Button
personCalculationOptionsElements[0].addEventListener('click', () => addEventsToCalculationButtons(personCalculationOptionsElements[0], personCalculationOptionsResultsElements[0], medianFormula, personSalaries, closeAnalysisActivitiesContainersButtons));

// Adding eventListeners to Person Projections Button
personCalculationOptionsElements[1].addEventListener('click', () => addEventsToCalculationButtons(personCalculationOptionsElements[1], personCalculationOptionsResultsElements[1], salaryProjections, personSalaries, closeAnalysisActivitiesContainersButtons));

// ------------ Analysis by Company Activity Container ------------ 
const companies = {};
let company;

// Restructuring "Salaries" object into "Companies"
restructuringSalariesInformation(salaries);

// Adding Company Options
const companyAnalysisOptionsInfo = [];
addCompanyAnalysisOptionsInfo(companyAnalysisOptionsInfo);

// Creating Company Options
const companyAnalysisOptionsElements = [];
createAnalysisOptions(companyAnalysisOptionsInfo, analysisOptionsContainersElements[1], companyAnalysisOptionsElements, analysisOptionsContainersOptionsElements);

// Enter Company Option
// Creating a Form to receive the Company and saving its elements in an array
createEnterInfoForm("enter-company-form", "enter-company-input", "Type the Company", "text", "Company name", "enter-company-submit", "", "enter-company-invalid", "Company doesn't exist", analysisOptionsContainersElements[1], analysisOptionsFormsElements, analysisOptionsFormsInputsElements);

// Enter Company Form Elements
const enterCompanyForm = document.getElementById('enter-company-form');
const enterCompanyInput = document.getElementById('enter-company-input');
const enterCompanySubmit = document.getElementById('enter-company-submit');
const enterCompanyInvalid = document.getElementById('enter-company-invalid');

// Adding eventListeners to Enter Company Option
companyAnalysisOptionsElements[0].addEventListener('click', () => addEventsToEnterInfoOption(companyAnalysisOptionsElements, closeAnalysisContainerButtons[1], enterCompanyForm));

// Adding eventsListeners to Submit Enter Company Form
addEventsToSubmitEnterInfoForm(enterCompanySubmit, "enter-company", enterCompanyInput, enterCompanyInvalid);

// Random Company Option
// Adding eventListeners to Random Company Option
companyAnalysisOptionsElements[1].addEventListener('click', () => addEventsToRandomEntityOption(closeAnalysisContainerButtons[1], 'random-company'));

// Company Calculation Options
// Adding Company Calculation Options information
const companyCalculationOptionsInfo = [];
addCompanyCalculationOptions(companyCalculationOptionsInfo);

// Creating and Storing the Company Calculation Options and Results
const companyCalculationOptionsElements = [];
const companyCalculationOptionsResultsElements = [];
createCalculationOptions('company-calculation-options', companyCalculationOptionsInfo, analysisActivitiesContainersElements[1], companyCalculationOptionsElements, companyCalculationOptionsResultsElements);

// Adding eventListeners to Company Projections Median Button
companyCalculationOptionsElements[0].addEventListener('click', () => addEventsToCalculationButtons(companyCalculationOptionsElements[0], companyCalculationOptionsResultsElements[0], companySalaryProjections, company, closeAnalysisActivitiesContainersButtons));

// Adding eventListeners to Company Projections Range Button
companyCalculationOptionsElements[1].addEventListener('click', () => addEventsToCalculationButtons(companyCalculationOptionsElements[1], companyCalculationOptionsResultsElements[1], rangeSalariesProjections, company, closeAnalysisActivitiesContainersButtons));

// ------------ Others Analysis Activity Container ------------ 
// Adding Others Analysis Options
const othersAnalysisOptionsInfo = [];
addOthersAnalysisOptionsInfo(othersAnalysisOptionsInfo);

// Creating Others Analysis Options
const othersAnalysisOptionsElements = [];
createAnalysisOptions(othersAnalysisOptionsInfo, analysisOptionsContainersElements[2], othersAnalysisOptionsElements, analysisOptionsContainersOptionsElements);

// General Median Option
// Adding eventListeners to General Median Option
othersAnalysisOptionsElements[0].addEventListener('click', () => addEventsToOthersAnalysisOptions(closeAnalysisContainerButtons[2], 'General Salaries Median', generalMedian));

// Adding eventListeners to Top 20% Median Option
othersAnalysisOptionsElements[1].addEventListener('click', () => addEventsToOthersAnalysisOptions(closeAnalysisContainerButtons[2], 'Top 20% Salaries Median', top20Median));

// Adding eventListeners to Lowest 20% Median Option
othersAnalysisOptionsElements[2].addEventListener('click', () => addEventsToOthersAnalysisOptions(closeAnalysisContainerButtons[2], 'Lowest 20% Salaries Median', lowest20Median));

// ----------------------- Close Buttons -----------------------
// Adding eventListeners to every Close Analysis Container Button
const closeAnalysisContainerButtons = document.querySelectorAll('.close-analysis-container');
addEventsToCloseButtons(closeAnalysisContainerButtons, analysisContainersElements, analysisOptionsParentContainer);

// Adding eventListeners to every Close Enter Information Form Button
const closeEnterInfoFormButtons = document.querySelectorAll('.close-form');
addEventsToCloseEnterInfoFormButtons(closeEnterInfoFormButtons, analysisOptionsFormsInputsElements, analysisOptionsFormsElements, analysisOptionsContainersOptionsElements, closeAnalysisContainerButtons);

// Adding eventListeners to every Close Analysis Activity Container Button
const closeAnalysisActivitiesContainersButtons = document.querySelectorAll('.close-analysis-activity-container');
addEventsToCloseAnalysisActivitiesContainersButtons(closeAnalysisActivitiesContainersButtons, analysisActivitiesContainersElements, analysisOptionsContainersElements, closeAnalysisContainerButtons);

// Adding eventListeners to Close Company Activity Container Button to delete the annual medians table and its subtitle
addEventsToCloseCompanyActivityContainerButton(closeAnalysisActivitiesContainersButtons[1], analysisActivitiesTableContainersElements[1]);