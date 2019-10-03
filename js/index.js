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

// Setting all of the links to have the correct properties
let links = document.querySelectorAll('a');
for (let i = 0; i < links.length; i++){
  links[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}

// Now setting up the cta
let headerOfCta = document.querySelector('.cta .cta-text h1');
headerOfCta.textContent = siteContent["cta"]["h1"];

let buttonOfCta = document.querySelector('.cta .cta-text button');
buttonOfCta.textContent = siteContent["cta"]["button"];

let ctaImg = document.querySelector('.cta #cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// setting up the main content

  // Setting up top content
let topContentHeaders = document.querySelectorAll(".main-content .top-content .text-content h4");
topContentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
topContentHeaders[1].textContent = siteContent["main-content"]["about-h4"];

let topContentText = document.querySelectorAll(".main-content .top-content .text-content p");
topContentText[0].textContent = siteContent["main-content"]["features-content"];
topContentText[1].textContent = siteContent["main-content"]["about-content"];


  // Setting up the middle image
let middleImage = document.querySelector("#middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

  // Setting up bottom content
let bottomContentHeaders = document.querySelectorAll(".main-content .bottom-content .text-content h4");
bottomContentHeaders[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentHeaders[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentHeaders[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomContentText = document.querySelectorAll(".main-content .bottom-content .text-content p");
bottomContentText[0].textContent = siteContent["main-content"]["services-content"];
bottomContentText[1].textContent = siteContent["main-content"]["product-content"];
bottomContentText[2].textContent = siteContent["main-content"]["vision-content"];

// Setting up contact
let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

let contactText = document.querySelectorAll(".contact p");
contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];

// Setting up footer
let footerText = document.querySelector("footer p");
footerText.textContent = siteContent["footer"]["copyright"];


//////// Task 3 /////////

// Changing the nav text to be green
for (let i = 0; i < links.length; i++){
  links[i].style.color = "green";
}
let navSection = document.querySelector("nav");

// Creating new links to add
let firstLink = document.createElement('a');
firstLink.textContent = "This is the first link";
firstLink.style.color = "green";
firstLink.setAttribute("href", "#");
navSection.prepend(firstLink);

let lastLink = document.createElement('a');
lastLink.textContent = "This is the last link";
lastLink.style.color = "green";
lastLink.setAttribute("href", "#");
navSection.append(lastLink);
