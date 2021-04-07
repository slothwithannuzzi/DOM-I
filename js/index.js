const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navButtons = document.querySelectorAll('nav a');
let navCounter = 1;
navButtons.forEach(element =>{
  element.textContent = siteContent["nav"][`nav-item-${navCounter}`];
  navCounter++;
})

const ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.textContent = siteContent["cta"].h1;

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"].button;

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

const mainH4 = document.querySelectorAll('.main-content .top-content .text-content h4')

mainH4[0].textContent = siteContent['main-content']["features-h4"];
mainH4[1].textContent = siteContent['main-content']["about-h4"];

const mainP = document.querySelectorAll('.main-content .top-content .text-content p');

mainP[0].textContent = siteContent['main-content']["features-content"];
mainP[1].textContent = siteContent['main-content']["about-content"]
const midImg = document.querySelector('.middle-img');
midImg.setAttribute('src', siteContent['main-content']["middle-img-src"])

const bottomh4 = document.querySelectorAll('.main-content .bottom-content .text-content h4')
const bottomP = document.querySelectorAll('.main-content .bottom-content .text-content p')

bottomh4[0].textContent = siteContent['main-content']["services-h4"];
bottomP[0].textContent = siteContent['main-content']["services-content"];

bottomh4[1].textContent = siteContent['main-content']["product-h4"];
bottomP[1].textContent = siteContent ['main-content']["product-content"];

bottomh4[2].textContent = siteContent['main-content']["vision-h4"];
bottomP[2].textContent = siteContent['main-content']["vision-content"];