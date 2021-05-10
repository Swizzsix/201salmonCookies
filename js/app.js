'use strict';

// Subject needs to know hourly avg sales at each Salmon Cookie franchise

let hoursOfOperationArray = ['0600 ', '0700 ', '0800 ', '0900 ', '1000 ', '1100 ', '1200 ', '1300 ', '1400 ', '1500 ', '1600 ', '1700 ', '1800 ', '1900 ']
let daysOfWeekArray = ['Sunday', 'Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ']

const seattle = {
  location: 'Seattle',
  minCustomerPerHour:23,
  maxCustomerPerHour:65,
  avgSalePerCustomer:6.3,
  avgSalePerHour: null,
  daysOfWeek: daysOfWeekArray,
  photo: './images/frankie.jpeg',
  setAvgSalePerHour: function(minCustomerPerHour, maxCustomerPerHour) {
    // console.log('this.avgSalePerHour')
    this.avgSalePerHour = avgCustomerPerHour(23, 65) + ' Seattle Sales Per Hour';
    // console.log(this.avgSalePerHour);
  }
}

const tokyo = {
  location: 'Tokyo',
  minCustomerPerHour:3,
  maxCustomerPerHour:24,
  avgSalePerCustomer:1.2,
  avgSalePerHour: null,
  daysOfWeek: null,
  photo: './images/serena.jpeg',
  setAvgSalePerHour: function(minCustomerPerHour, maxCustomerPerHour) {
    // console.log(this.avgSalePerHour)
    this.avgSalePerHour = avgCustomerPerHour(3, 24) + ' Tokyo Sales Per Hour';
    // console.log(this.avgSalePerHour);
  }
}

const dubai = {
  location: 'Dubai',
  minCustomerPerHour:11,
  maxCustomerPerHour:38,
  avgSalePerCustomer:3.7,
  avgSalePerHour: null,
  daysOfWeek: null,
  photo: './images/jumper.jpeg',
  setAvgSalePerHour: function(minCustomerPerHour, maxCustomerPerHour) {
    // console.log(this.avgSalePerHour)
    this.avgSalePerHour = avgCustomerPerHour(11, 38) + ' Dubai Sales Per Hour';
    // console.log(this.avgSalePerHour);
  }
}

const paris = {
  location: 'Paris',
  minCustomerPerHour:20,
  maxCustomerPerHour:38,
  avgSalePerCustomer:2.3,
  avgSalePerHour: null,
  daysOfWeek: null,
  photo: './images/jumper.jpeg',
  setAvgSalePerHour: function(minCustomerPerHour, maxCustomerPerHour) {
    // console.log(this.avgSalePerHour)
    this.avgSalePerHour = avgCustomerPerHour(20, 38) + ' Paris Sales Per Hour';
    // console.log(this.avgSalePerHour);
  }
}

const lima = {
  location: 'Lima',
  minCustomerPerHour:2,
  maxCustomerPerHour:16,
  avgSalePerCustomer:4.6,
  avgSalePerHour: null,
  daysOfWeek: null,
  photo: './images/jumper.jpeg',
  setAvgSalePerHour: function(minCustomerPerHour, maxCustomerPerHour) {
    // console.log(this.avgSalePerHour)
    this.avgSalePerHour = avgCustomerPerHour(2, 16) + ' Lima Sales Per Hour';
    // console.log(this.avgSalePerHour);
  }
}

//get avg customer per hour
function avgCustomerPerHour(minCustomerPerHour, maxCustomerPerHour){
return Math.floor(Math.random() * (maxCustomerPerHour - minCustomerPerHour) * hoursOfOperationArray.length);
}

console.log(seattle.setAvgSalePerHour());
console.log(seattle);
console.log(tokyo.setAvgSalePerHour());
console.log(tokyo);
console.log(dubai.setAvgSalePerHour());
console.log(dubai);
console.log(paris.setAvgSalePerHour());
console.log(paris);
console.log(lima.setAvgSalePerHour());
console.log(lima);

const storeFrontDivElem = document.getElementById('storeFront');

function makeStoreFrontArticle(location) {
  const articleElem = document.createElement('article');
  storeFrontDivElem.appendChild(articleElem);

// make image element and add the link src
  // const imgElem = document.createElement('img');

// create th for each day of week
  const thElem = document.createElement('th');
  thElem.textContent = `daysOfWeek: ${location.daysOfWeek}`;
  articleElem.appendChild(thElem);
  console.log(storeFrontDivElem);

//create td of each hour for hourly sale
  const tdElem = document.createElement('td');
  tdElem.textContent = `avgSalePerHour: ${location.avgSalePerHour}`;
  articleElem.appendChild(tdElem);
  console.log(storeFrontDivElem);


for (let i = 0; i < hoursOfOperationArray.length; i++){
  const liElem = document.createElement('li');
  tdElem.textContent = hoursOfOperationArray[i];
  tdElem.appendChild(liElem);
  }
}

makeStoreFrontArticle(seattle);
makeStoreFrontArticle(tokyo);
makeStoreFrontArticle(dubai);
makeStoreFrontArticle(paris);
makeStoreFrontArticle(lima);
