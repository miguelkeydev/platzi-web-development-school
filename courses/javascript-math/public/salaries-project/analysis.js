// Personal Analysis
function findPerson(id) {
  return salaries.find(person => person.id === id);
}

function personSalaryMedian(id) {
  const jobs = findPerson(id).jobs;
  const salaries = jobs.map(job => job.salary);
  
  const salariesMedian = PlatziMath.medianFormula(salaries);
  return salariesMedian;
}

function personSalaryProjections(id) {
  const person = findPerson(id).name;
  const jobs = findPerson(id).jobs;
  const salaryIncreases = [];

  for (let i = 1; i < jobs.length; i++) {
    const actualSalary = jobs[i].salary;
    const previousSalary = jobs[i - 1].salary;
    const increase = actualSalary - previousSalary;
    const perecentageIncrease = increase / previousSalary;
    salaryIncreases.push(perecentageIncrease);
  }

  const salaryIncreasesMedian = PlatziMath.medianFormula(salaryIncreases);

  const lastSalary = jobs[jobs.length - 1].salary;
  const salaryIncrease = lastSalary * salaryIncreasesMedian
  const newSalary = Math.floor(salaryIncrease + lastSalary);

  return `The new salary for ${person} could be ${newSalary}$`
}

// Restructuring the Salaries object into 'companies' object that contains the companies where people worked, and these companies will contain the years when people worked there and how much they earned
const companies = {};

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

function companyYearMedian(company, year) {
  if (!companies[company] || !companies[company][year]) {
    return console.warn(`The given information is wrong`);
  } else {
    const median = PlatziMath.medianFormula(companies[company][year]);
    return `${company}'s salaries median in ${year} was ${median}$`;
  }
}

function companySalaryProjections(company) {
  const annualSalaryMedians = [];
  const companyAnnualSalaries = Object.values(companies[company]);

  companyAnnualSalaries.forEach(year => {
    const annualSalaryMedian = PlatziMath.medianFormula(year);
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

  const annualSalaryIncreasesMedian = PlatziMath.medianFormula(annualSalaryIncreases);
  const lastAnnualSalaryMedian = annualSalaryMedians[annualSalaryMedians.length - 1];
  const annualSalaryMedianIncrease = annualSalaryIncreasesMedian * lastAnnualSalaryMedian;
  const newAnnualSalaryMedian = Math.floor(lastAnnualSalaryMedian + annualSalaryMedianIncrease);

  return `The projections for the annual salary median in ${company} for the next is ${newAnnualSalaryMedian}$`;
}

function rangeSalariesProjections(company) {
  // Storing the Lowest and Highest salaries of the company per year
  const annualSalaries = Object.values(companies[company]);
  const annualSalariesSorted = [];

  for (annualSalary of annualSalaries) {
    annualSalary.sort((a, b) => a - b);
    annualSalariesSorted.push(annualSalary)
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

    const increasePercentageProjections = PlatziMath.medianFormula(increasePercentages);
    const lastAnnualSalary = annualSalaryList[annualSalaryList.length - 1];
    const annualSalaryIncreaseProjections = lastAnnualSalary * increasePercentageProjections;
    const annualSalaryProjections = Math.floor(lastAnnualSalary + annualSalaryIncreaseProjections);
    rangeAnnualSalariesProjections.push(annualSalaryProjections);
  });
  
  return `The range of salaries in ${company} for the next year is ${rangeAnnualSalariesProjections[0]}$-${rangeAnnualSalariesProjections[1]}$`
}

// General Analysis
function generalMedian() {
  const peopleMediansList = salaries.map(person => personSalaryMedian(person.id));
  const median = PlatziMath.medianFormula(peopleMediansList);
  return median
}

function top10Median() {
  const peopleMedians = salaries.map(person => personSalaryMedian(person.id));
  const peopleMediansSorted = peopleMedians.sort((a, b) => b - a);

  const top10PeopleAmount = peopleMediansSorted.length / 10;

  const top10PeopleMedians = peopleMediansSorted.slice(0, top10PeopleAmount);

  return PlatziMath.medianFormula(top10PeopleMedians);
}