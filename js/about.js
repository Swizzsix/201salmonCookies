'use strict';

const cityDivElem = document.getElementById('cityStoreFront');

function makeCityStoreFrontArticle(city) {
  let location = location.name;
  const articleElem = document.createElement('article');
  articleElem.setAttribute('id', city);
  cityDivElem.appendChild(articleElem);

  // make image element and add the link src
  const imgElem = document.createElement('img');
  imgElem.setAttribute('src', city.photo)
  articleElem.appendChild(imgElem);

  // make h2 element
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = city.location;
  articleElem.appendChild(h2Elem);

  // set kitten age
  city.setAvg();
  // make a p tag
  const pElem = document.createElement('p');
  pElem.textContent = `Average Sale Per Hour ${city.avgSalePerHour}`;
  articleElem.appendChild(pElem);
  console.log(cityDivElem);

  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for (let i = 0; i < city.ingredients.length; i++) {
    const liElem = document.createElement('li');
    liElem.textContent = city.interests[i];
    ulElem.appendChild(liElem);
  }
}
makeCityStoreFrontArticle();