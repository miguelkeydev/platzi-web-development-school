const projectsContainer = document.querySelector('.projects-container');
const projectsList = [];

function insertProject(projectsList) {
  for (project of projectsList) {
    // Creating the Card Project HTML Structure
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project', 'projects-container__project');

    const projectLink = document.createElement('a');
    projectLink.classList.add('project__link');
    projectLink.setAttribute('href', project.link);

    const projectDate = document.createElement('span');
    projectDate.classList.add('project__date');
    projectDate.innerText = project.date;

    const projectLogoContainer = document.createElement('figure');
    projectLogoContainer.classList.add('project__fig');

    const projectLogo = document.createElement('img');
    projectLogo.classList.add('project__img');
    projectLogo.setAttribute('src', project.logo);
    projectLogo.setAttribute('alt', project.logoDescription);

    const projectNameContainer = document.createElement('div');
    projectNameContainer.classList.add('project__name');

    const projectTitle = document.createElement('span');
    projectTitle.classList.add('project__title');
    projectTitle.innerText = project.title;

    const projectDescription = document.createElement('span');
    projectDescription.classList.add('project__description');
    projectDescription.innerText = project.description;

    const projectTechnologiesContainer = document.createElement('div');
    projectTechnologiesContainer.classList.add('project__technologies');

    const projectTechnologyHTMLContainer = document.createElement('figure');
    const projectTechnologyHTML = document.createElement('img');
    projectTechnologyHTML.setAttribute('src', project.html.icon);
    projectTechnologyHTML.setAttribute('alt', project.html.description);

    const projectTechnologyCSSContainer = document.createElement('figure');
    const projectTechnologyCSS = document.createElement('img');
    projectTechnologyCSS.setAttribute('src', project.css.icon);
    projectTechnologyCSS.setAttribute('alt', project.css.description);

    // HTML Layout
    projectsContainer.appendChild(projectContainer);
    
    projectContainer.appendChild(projectLink);

    projectLink.append(projectDate, projectLogoContainer,projectNameContainer, projectTechnologiesContainer);

    projectLogoContainer.appendChild(projectLogo);

    projectNameContainer.append(projectTitle, projectDescription);

    projectTechnologiesContainer.append(projectTechnologyHTMLContainer, projectTechnologyCSSContainer);

    projectTechnologyHTMLContainer.appendChild(projectTechnologyHTML);
    projectTechnologyCSSContainer.appendChild(projectTechnologyCSS);
    // Only when the project uses SASS
    if (project.sass.used === true) {
      // Creating the Elements
      const projectTechnologySASSContainer = document.createElement('figure');
      const projectTechnologySASS = document.createElement('img');
      projectTechnologySASS.setAttribute('src', project.sass.icon);
      projectTechnologySASS.setAttribute('alt', project.sass.description);
      // Layout
      projectTechnologiesContainer.appendChild(projectTechnologySASSContainer);
      projectTechnologySASSContainer.appendChild(projectTechnologySASS);
    }
    // Only when the project uses Tailwind
    if (project.tailwind.used === true) {
      // Creating the Elements
      const projectTechnologyTailwindContainer = document.createElement('figure');
      const projectTechnologyTailwind = document.createElement('img');
      projectTechnologyTailwind.setAttribute('src', project.tailwind.icon);
      projectTechnologyTailwind.setAttribute('alt', project.tailwind.description);
      // Layout
      projectTechnologiesContainer.appendChild(projectTechnologyTailwindContainer);
      projectTechnologyTailwindContainer.appendChild(projectTechnologyTailwind);
    }
  }
}

// Front End Developer - Practical Course - Lamoure
projectsList.push({
  link: "./courses/frontend-developer-practical/index.html",
  date: "19/04/23",
  logo: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692049906/Platzi%20Portfolio/logo-icon_gbdekb.png",
  logoDescription: "Lamoure Logo",
  title: "LAMOURE",
  description: "JEWELRY & ACCESSORIES STORE",
  html: {
    icon: "./assets/icons/html_logo.svg",
    description: "HTML Logo"
  },
  css: {
    icon: "./assets/icons/css_logo.svg",
    description: "CSS Logo"
  },
  sass: {
    used: false
  },
  tailwind: {
    used: false
  },
  javascript: {
    used: false
  }
})
// HTML and CSS - Practical Course - Google Clone
projectsList.push({
  link: "./courses/html-css-practical/google-clon/pages/",
  date: "28/04/23",
  logo: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692134087/Platzi%20Portfolio/google_logo_k06tmo.svg",
  logoDescription: "Google Logo",
  title: "GOOGLE",
  description: "GOOGLE CLONE",
  html: {
    icon: "./assets/icons/html_logo.svg",
    description: "HTML Logo"
  },
  css: {
    icon: "./assets/icons/css_logo.svg",
    description: "CSS Logo"
  },
  sass: {
    used: false
  },
  tailwind: {
    used: false
  },
  javascript: {
    used: false
  }
})
// HTML and CSS - Practical Course - Wikipedia Clone
projectsList.push({
  link: "./courses/html-css-practical/wikipedia-clone/pages/index.html",
  date: "05/05/23",
  logo: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692136539/Platzi%20Portfolio/Wikipedia_logo_wrj3a2.png",
  logoDescription: "Wikipedia Logo",
  title: "WIKIPEDIA",
  description: "WIKIPEDIA CLONE",
  html: {
    icon: "./assets/icons/html_logo.svg",
    description: "HTML Logo"
  },
  css: {
    icon: "./assets/icons/css_logo.svg",
    description: "CSS Logo"
  },
  sass: {
    used: false
  },
  tailwind: {
    used: false
  },
  javascript: {
    used: false
  }
})
// Responsive Design: Mobile First - Batata Bit
projectsList.push({
  link: "./courses/responsive-design/pages/index.html",
  date: "11/05/23",
  logo: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692134317/Platzi%20Portfolio/batata_tdplhd.svg",
  logoDescription: "Batata Bit Project Logo",
  title: "BATATA BIT",
  description: "CRYPTOCURRENCIES WEBPAGE",
  html: {
    icon: "./assets/icons/html_logo.svg",
    description: "HTML Logo"
  },
  css: {
    icon: "./assets/icons/css_logo.svg",
    description: "CSS Logo"
  },
  sass: {
    used: false
  },
  tailwind: {
    used: false
  },
  javascript: {
    used: false
  }
})
// CSS Preprocessors - Preprocessors Blog
projectsList.push({
  link: "./courses/preprocessors-css/preprocessors/html/index.html",
  date: "26/05/23",
  logo: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692134504/Platzi%20Portfolio/preprocessors_sfnhqk.png",
  logoDescription: "Preprocessors Project",
  title: "PRE PROCESSORS",
  description: "PREPROCESSORS BLOG",
  html: {
    icon: "./assets/icons/html_logo.svg",
    description: "HTML Logo"
  },
  css: {
    icon: "./assets/icons/css_logo.svg",
    description: "CSS Logo"
  },
  sass: {
    used: true,
    icon: "./assets/icons/sass_logo.svg",
    description: "SASS Logo"
  },
  tailwind: {
    used: false
  },
  javascript: {
    used: false
  }
})
// SASS Basics - Eco-Store
projectsList.push({
  link: "./courses/SASS-basics/html/index.html",
  date: "05/06/23",
  logo: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692135825/Platzi%20Portfolio/ecostore-logo_gbdjao.png",
  logoDescription: "Eco Store Logo",
  title: "ECO STORE",
  description: "SASS BASICS",
  html: {
    icon: "./assets/icons/html_logo.svg",
    description: "HTML Logo"
  },
  css: {
    icon: "./assets/icons/css_logo.svg",
    description: "CSS Logo"
  },
  sass: {
    used: true,
    icon: "./assets/icons/sass_logo.svg",
    description: "SASS Logo"
  },
  tailwind: {
    used: false
  },
  javascript: {
    used: false
  }
})
// GRID Basics - Messi's Best Moments
projectsList.push({
  link: "./courses/GRID-basics/project/pages/index.html",
  date: "16/06/23",
  logo: "https://www.mundodeportivo.com/files/image_948_465/files/fp/uploads/2022/04/23/6263b76dc02f4.r_d.1257-1250-3450.jpeg",
  logoDescription: "Messi Holding his T-Shirt",
  title: "Messi's best moments",
  description: "grid basics",
  html: {
    icon: "./assets/icons/html_logo.svg",
    description: "HTML Logo"
  },
  css: {
    icon: "./assets/icons/css_logo.svg",
    description: "CSS Logo"
  },
  sass: {
    used: true,
    icon: "./assets/icons/sass_logo.svg",
    description: "SASS Logo"
  },
  tailwind: {
    used: false
  },
  javascript: {
    used: false
  }
})
// Tailwind Basics - Hotel Heaven
projectsList.push({
  link: "./courses/tailwind/src/index.html",
  date: "13/07/23",
  logo: "https://res.cloudinary.com/dziyyutwr/image/upload/v1692136317/Platzi%20Portfolio/hotel-heaven-logo_vaxxgm.png",
  logoDescription: "Hotel Heaven Logo",
  title: "Hotel Heaven",
  description: "tailwind",
  html: {
    icon: "./assets/icons/html_logo.svg",
    description: "HTML Logo"
  },
  css: {
    icon: "./assets/icons/css_logo.svg",
    description: "CSS Logo"
  },
  sass: {
    used: false,
  },
  tailwind: {
    used: true,
    icon: "./assets/icons/tailwind_logo.svg",
    description: "Tailwind Logo"
  },
  javascript: {
    used: false
  }
})

insertProject(projectsList);