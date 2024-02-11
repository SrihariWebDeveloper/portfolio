let body = document.getElementById('main');
//Meanu Bars icon 
let checkbtn = document.getElementById('check-btn');
let meanuBar = document.getElementById('navs');
let cross = document.getElementById('x-mark');
let logo = document.querySelector('.logo');
let two = document.querySelector('.sk-po');
let one = document.querySelector('.projects');
console.log(one)
// Meanu List 
let homeText = document.getElementById('home');
let aboutText = document.getElementById('about');
let serviceText = document.getElementById('service');
let contactText = document.getElementById('contact');
let moon = document.getElementById('theam-dark');
let sun = document.getElementById('theam-light');
//pages list
let homePage = document.getElementById('home-list');
let aboutPage = document.getElementById('about-list');
let servicePage = document.getElementById('service-list');
let contactPage = document.getElementById('Contact-list');
//dark-list theam setup
sun.onclick = function(){
  moon.style = 'display: block';
  body.style = 'background-color: #000';
  sun.style ='display: none';
  homePage.style = 'color: #fff';
  aboutPage.style = 'color: #fff';
  servicePage.style = 'color: #fff';
  contactPage.style = 'color: #fff';
  cross.style = 'color: #fff';
  cross.style = 'display: block';
  homeText.style = 'color: #fff';
  aboutText.style = 'color: #fff';
  serviceText.style = 'color: #fff';
  contactText.style = 'color: #fff';
  logo.style = 'color: #fff';
  two.style = 'color: #fff';
  one.style = 'color: #fff';
}
moon.onclick = function(){
  sun.style = 'display: block';
  body.style = 'background-color: #fff';
  moon.style ='display: none';
  homePage.style = 'color: #000';
  aboutPage.style = 'color: #000';
  servicePage.style = 'color: #000';
  contactPage.style = 'color: #000';
  cross.style = 'color: #000';
  cross.style = 'display: block';
  homeText.style = 'color: #000';
  aboutText.style = 'color: #000';
  serviceText.style = 'color: #000';
  contactText.style = 'color: #000';
  logo.style = 'color: #000';
  two.style = 'color: #000';
  one.style = 'color: #000';
}

checkbtn.onclick = function(){
  homePage.style = 'display: none';
  aboutPage.style =' display: none';
  servicePage.style = 'display: none';
  contactPage.style = 'display: none';
  cross.style = 'display: block';
  checkbtn.style = 'display: none';
  moon.style = 'display: block';
}
cross.onclick = function(){
  cross.style = 'display: none';
  checkbtn.style = 'display: block';
  homePage.style = 'display: block';
  aboutPage.style =' display: block';
  servicePage.style = 'display: block';
  contactPage.style = 'display: block';
}