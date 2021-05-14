'use strict';
//problem domain: Pat needs hourly salmon cookie sales per city

//global hours of operations array
 //"i had () for array instead of []"
const hoursOfOperationArray = ['', '0600 ', '0700 ', '0800 ', '0900 ',
 '1000 ', '1100 ', '1200 ', '1300 ', '1400 ', '1500 ', '1600', '1700', '1800', '1900']
const cityLocations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima']
// constructor (f) = City
function City (location, minCustomerPerHour, maxCustomerPerHour, avgSalePerCustomer, hoursOfOperationArray,
   photo, ingredients) {
  this.location = location; 
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgSalePerCustomer = avgSalePerCustomer;
  this.hoursOfOperationArray = hoursOfOperationArray;
  this.photo = photo;
  this.ingredients = ingredients;
}

City.prototype.setAvg = function() {
  //i only put single number instead of for loop incremented i++
  this.avgSalePerHour = []
  for (let i = 0; i < hoursOfOperationArray.length; i++){
    this.avgSalePerHour.push(randomAvg(this.minCustomerPerHour, this.maxCustomerPerHour));
  }
}
//rendering sales
City.prototype.renderSales = function (){
const tableElement = document.getElementById('table')
const trElement = document.createElement('tr');
tableElement.appendChild(trElement);
// const headerRow = document.createElement('tr');
const thElem = document.createElement('th');
trElement.appendChild(thElem);
thElem.textContent = this.location 
////append element avgSalesPerHour.length to th node at [i] ++
for (let i = 0; i < this.avgSalePerHour.length; i++){
  const tdElem = document.createElement('td');
  tdElem.textContent = this.avgSalePerHour[i];
  trElement.appendChild(tdElem);

  }
}
const tableElement = document.getElementById('table')
const headerRow = document.createElement('tr');

////append element hoursOfOperationArray.length to th node at [i] ++
for (let i = 0; i < hoursOfOperationArray.length; i++){
  const thElement = document.createElement('th');
  thElement.textContent = hoursOfOperationArray[i];
  headerRow.appendChild(thElement);
}

tableElement.appendChild(headerRow);

// declare City
let seattle = new City('Seattle', 23, 65, 6.3, hoursOfOperationArray);
seattle.setAvg();
console.log(seattle);

seattle.renderSales();

let tokyo = new City('Tokyo', 3, 24, 1.2, hoursOfOperationArray)
tokyo.setAvg();
console.log(tokyo);

tokyo.renderSales();

let dubai = new City('Dubai', 11, 38, 3.7, hoursOfOperationArray)
dubai.setAvg();
console.log(dubai);

dubai.renderSales();

let paris = new City('Paris', 20, 38, 3.7, hoursOfOperationArray)
paris.setAvg();
console.log(paris);

paris.renderSales();

let lima = new City('Lima', 2, 16, 4.6, hoursOfOperationArray)
lima.setAvg();
console.log(lima);

lima.renderSales();

function randomAvg(minCustomerPerHour, maxCustomerPerHour) {
  return Math.floor(Math.random() * (maxCustomerPerHour - minCustomerPerHour) + minCustomerPerHour);
}

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

//target html div element
const storeFrontDivElem = document.getElementById('storeFront');

function makeCityArticle(city) {
  let location = city.location;
  const articleElem = document.createElement('article');
  articleElem.setAttribute('id', location)
  storeFrontDivElem.appendchild(articleElem);
}

// makeStoreFrontArticle(seattle);
// makeStoreFrontArticle(tokyo);
// makeStoreFrontArticle(dubai);
// makeStoreFrontArticle(paris);
// makeStoreFrontArticle(lima);
