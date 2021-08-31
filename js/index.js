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

// setting the image in the header
document.querySelector('#cta-img').src = siteContent["cta"]["img-src"];

// setting the image in the content portion of the website
let contentImg = document.querySelector('#middle-img');
contentImg.src = siteContent["main-content"]["middle-img-src"];

// creating all of the nav items
let navItems = document.querySelectorAll('nav a');
const navArr = Array.from(navItems);
navArr.forEach((item,index) =>item.textContent = siteContent['nav'][`nav-item-${index+1}`])


//  creating the Dom is Awesome text above the get started button 
document.querySelector('.cta-text h1').innerHTML = 'Dom <br> Is <br> Awesome!';

// giving the button "Get Started" text
document.querySelector('.cta-text button').textContent = siteContent['cta']['button'];

// creating the "features" and "about" section
document.querySelector('.top-content .text-content:nth-of-type(1) h4').textContent = siteContent['main-content']['features-h4'] //header
document.querySelector('.top-content .text-content:nth-of-type(1) p').textContent = siteContent['main-content']['features-content']; //caption

document.querySelector('.top-content .text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['about-h4']; //header
document.querySelector('.top-content .text-content:nth-of-type(2) p').textContent = siteContent['main-content']['about-content']; //caption

// creating the services, product and vision sections
document.querySelector('.bottom-content .text-content:nth-of-type(1) h4').textContent = siteContent['main-content']['services-h4']; //header
document.querySelector('.bottom-content .text-content:nth-of-type(1) p').textContent = siteContent['main-content']['services-content']; //caption

document.querySelector('.bottom-content .text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['product-h4']; //header
document.querySelector('.bottom-content .text-content:nth-of-type(2) p').textContent = siteContent['main-content']['product-content']; //caption

document.querySelector('.bottom-content .text-content:nth-of-type(3) h4').textContent = siteContent['main-content']['vision-h4']; //header
document.querySelector('.bottom-content .text-content:nth-of-type(3) p').textContent = siteContent['main-content']['vision-content']; //caption

// contact section
let contactEls = document.querySelectorAll('.contact h4, .contact p')
let contactElsArr = Array.from(contactEls)
let contactKeys = Object.keys(siteContent['contact'])
contactElsArr.forEach((item, index) => {
  item.textContent = siteContent['contact'][contactKeys[index]]
  if (index === 1) {
    item.innerHTML = "123 Way 456 Street <br> Somewhere, USA"
}})

// copyright footer
document.querySelector('footer p').textContent = siteContent['footer']['copyright'];

// Change the color of the navigation text to be green.

const colorArr = Array.from(document.querySelectorAll('nav a'));
colorArr.forEach(item => item.style.color = 'green')

// Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.

// appending a new element to nav
const additionalNav1 = document.createElement('a');
additionalNav1.textContent = 'Rose';
additionalNav1.style.color = 'green';
document.querySelector('nav').append(additionalNav1)

// prepending a new element to nav
const additionalNav2 = document.createElement('a');
additionalNav2.textContent = 'Gabriely';
additionalNav2.style.color = 'green';
document.querySelector('nav').prepend(additionalNav2)