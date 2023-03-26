'use strict';
const images = [
  {src: 'https://images.unsplash.com/photo-1678961965142-819258296d0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80', description: '目がチカチカ'},
  {src: 'https://images.unsplash.com/photo-1678450961775-b8a7cac89811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1581&q=80', description: 'デザインとアートは違う'},
  {src: 'https://images.unsplash.com/photo-1672661164570-d5e7e0890a69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80', description: '憧れのヨーロッパ'},
  {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/e-S23SJzFqs.jpg', description: 'ネコ'},
  {src: 'https://images.unsplash.com/photo-1678392690809-7ccd62950b12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80', description: 'カフェ飯は手伝いしてたから出来ます'}
];

let image = document.createElement('img');
image.setAttribute('src', images[0].src);
image.setAttribute('alt',images[0].description);

let description = document.createElement('p');
description.textContent = image.alt;

let mainImage = document.getElementById('main_image');
mainImage.insertBefore(image, null);
mainImage.insertBefore(description, null);

let thumnails = document.getElementById('thumnails');
for(let i = 0; i < images.length; i++)  {
  let thumnailImage = document.createElement('img');
  thumnailImage.setAttribute('src',images[i].src);
  thumnailImage.setAttribute('alt',images[i].description);
  thumnails.insertBefore(thumnailImage, null);
}

thumnails.addEventListener('click', function(e){
  if(e.target.src){
  //console.log(e.target);
  image.src = e.target.src;
  description.textContent = e.target.alt;
  }
}, false);
