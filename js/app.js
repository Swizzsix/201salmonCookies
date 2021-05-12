'use strict';
//problem domain: Pat needs hourly salmon cookie sales per city

//global hours of operations array
 //"i had () for array instead of []"
const hoursOfOperationArray = ['', '0600 ', '0700 ', '0800 ', '0900 ',
 '1000 ', '1100 ', '1200 ', '1300 ', '1400 ', '1500 ', '1600', '1700', '1800', '1900']
const cityLocations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima']
// constructor (f) = City
function City (location, minCustomerPerHour, maxCustomerPerHour, avgSalePerCustomer, hoursOfOperationArray) {
  this.location = location; 
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgSalePerCustomer = avgSalePerCustomer;
  this.hoursOfOperationArray = hoursOfOperationArray;
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
// for (let i = 0; i < this.hoursOfOperationArray.length; i++){
//   const thElement = document.createElement('th');
//   thElement.textContent = this.hoursOfOperationArray[i];
//   headerRow.appendChild(thElement);
// }

// tableElement.appendChild(headerRow);

for (let i = 0; i < this.avgSalePerHour.length; i++){
  const tdElem = document.createElement('td');
  tdElem.textContent = this.avgSalePerHour[i];
  trElement.appendChild(tdElem);
  //append element hours of operation to node at [i]
  }
}
const tableElement = document.getElementById('table')
const headerRow = document.createElement('tr');

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

//target html div element
const storeFrontDivElem = document.getElementById('storeFront');

function makeCityArticle(city) {
  let location = city.location;
  const articleElem = document.createElement('article');
  articleElem.setAttribute('id', location)
  storeFrontDivElem.appendchild(articleElem);
}



//write a function to add a table
// function addTable(city){
//   //grab article element matches city
//   let location = city.location;
//   const articleElem = document.getElementById(location);
//   //create a table element
//   const tableElem = document.createElement('table');
//   articleElem.appendChild(tableElem);

//   const trElem = document.createElement('tr');
//   tableElem.appendChild(trElem);

//   const tr2Elem = document.createElement('tr');
//   tableElem.appendChild(tr2Elem);
//   //th
//   let th1Elem = document.createElement('th');
//   th1Elem.textContent = 'AVG'
//   trElem.appendChild(th1Elem);

//   let th2Elem = document.createElement('th');
//   th2Elem.textContent = '0600'
//   trElem.appendChild(th2Elem);

//   let th3Elem = document.createElement('th');
//   th3Elem.textContent = '0700'
//   trElem.appendChild(th3Elem);

//   let th4Elem = document.createElement('th');
//   th4Elem.textContent = '0800'
//   trElem.appendChild(th4Elem);

//   let th5Elem = document.createElement('th');
//   th5Elem.textContent = '0900'
//   trElem.appendChild(th5Elem);

//   let th6Elem = document.createElement('th');
//   th6Elem.textContent = '1000'
//   trElem.appendChild(th6Elem);

//   let th7Elem = document.createElement('th');
//   th7Elem.textContent = '1100'
//   trElem.appendChild(th7Elem);

//   let th8Elem = document.createElement('th');
//   th8Elem.textContent = '1200'
//   trElem.appendChild(th8Elem);

//   let th9Elem = document.createElement('th');
//   th9Elem.textContent = '1300'
//   trElem.appendChild(th9Elem);

//   let th10Elem = document.createElement('th');
//   th10Elem.textContent = '1400'
//   trElem.appendChild(th10Elem);

//   let th11Elem = document.createElement('th');
//   th11Elem.textContent = '1500'
//   trElem.appendChild(th11Elem);

//   let th12Elem = document.createElement('th');
//   th12Elem.textContent = '1600'
//   trElem.appendChild(th12Elem);

//   let th13Elem = document.createElement('th');
//   th13Elem.textContent = '1700'
//   trElem.appendChild(th13Elem);

//   let th14Elem = document.createElement('th');
//   th14Elem.textContent = '1800'
//   trElem.appendChild(th14Elem);

//   let th15Elem = document.createElement('th');
//   th15Elem.textContent = '1900'
//   trElem.appendChild(th15Elem);

//   // td
//   let td1Elem = document.createElement('td');
//   td1Elem.textContent = seattle.randomAvg;
//   tr2Elem.appendChild(td1Elem);

//   let td2Elem = document.createElement('td');
//   td2Elem.textContent = tokyo.randomAvg;
//   tr2Elem.appendChild(td2Elem);

//   let td3Elem = document.createElement('td');
//   td3Elem.textContent = dubai.randomAvg;
//   tr2Elem.appendChild(td3Elem);

//   let td4Elem = document.createElement('td');
//   td4Elem.textContent = paris.randomAvg;
//   tr2Elem.appendChild(td4Elem);

//   let td5Elem = document.createElement('td');
//   td5Elem.textContent = lima.randomAvg;
//   tr2Elem.appendChild(td5Elem);
// }

// makeCityArticle(seattle);
// makeCityArticle(tokyo);
// makeCityArticle(dubai);
// makeCityArticle(paris);
// makeCityArticle(lima);

// addTable(seattle);
// addTable(tokyo);
// addTable(dubai);
// addTable(paris);
// addTable(lima);
// 10MAY2021
// // Subject needs to know hourly avg sales at each Salmon Cookie franchise

// let hoursOfOperationArray = ['0600 ', '0700 ', '0800 ', '0900 ', '1000 ', '1100 ', '1200 ', '1300 ', '1400 ', '1500 ', '1600 ', '1700 ', '1800 ', '1900 ']
// let daysOfWeekArray = ['Sunday', 'Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ']

// const seattle = {
//   location: 'Seattle',
//   minCustomerPerHour:23,
//   maxCustomerPerHour:65,
//   avgSalePerCustomer:6.3,
//   avgSalePerHour: null,
//   daysOfWeek: daysOfWeekArray,
//   photo: './images/frankie.jpeg',
//   setAvgSalePerHour: function(minCustomerPerHour, maxCustomerPerHour) {
//     // console.log('this.avgSalePerHour')
//     this.avgSalePerHour = avgCustomerPerHour(23, 65) + ' Seattle Sales Per Hour';
//     // console.log(this.avgSalePerHour);
//   }
// }

// const tokyo = {
//   location: 'Tokyo',
//   minCustomerPerHour:3,
//   maxCustomerPerHour:24,
//   avgSalePerCustomer:1.2,
//   avgSalePerHour: null,
//   daysOfWeek: null,
//   photo: './images/serena.jpeg',
//   setAvgSalePerHour: function(minCustomerPerHour, maxCustomerPerHour) {
//     // console.log(this.avgSalePerHour)
//     this.avgSalePerHour = avgCustomerPerHour(3, 24) + ' Tokyo Sales Per Hour';
//     // console.log(this.avgSalePerHour);
//   }
// }

// const dubai = {
//   location: 'Dubai',
//   minCustomerPerHour:11,
//   maxCustomerPerHour:38,
//   avgSalePerCustomer:3.7,
//   avgSalePerHour: null,
//   daysOfWeek: null,
//   photo: './images/jumper.jpeg',
//   setAvgSalePerHour: function(minCustomerPerHour, maxCustomerPerHour) {
//     // console.log(this.avgSalePerHour)
//     this.avgSalePerHour = avgCustomerPerHour(11, 38) + ' Dubai Sales Per Hour';
//     // console.log(this.avgSalePerHour);
//   }
// }

// const paris = {
//   location: 'Paris',
//   minCustomerPerHour:20,
//   maxCustomerPerHour:38,
//   avgSalePerCustomer:2.3,
//   avgSalePerHour: null,
//   daysOfWeek: null,
//   photo: './images/jumper.jpeg',
//   setAvgSalePerHour: function(minCustomerPerHour, maxCustomerPerHour) {
//     // console.log(this.avgSalePerHour)
//     this.avgSalePerHour = avgCustomerPerHour(20, 38) + ' Paris Sales Per Hour';
//     // console.log(this.avgSalePerHour);
//   }
// }

// const lima = {
//   location: 'Lima',
//   minCustomerPerHour:2,
//   maxCustomerPerHour:16,
//   avgSalePerCustomer:4.6,
//   avgSalePerHour: null,
//   daysOfWeek: null,
//   photo: './images/jumper.jpeg',
//   setAvgSalePerHour: function(minCustomerPerHour, maxCustomerPerHour) {
//     // console.log(this.avgSalePerHour)
//     this.avgSalePerHour = avgCustomerPerHour(2, 16) + ' Lima Sales Per Hour';
//     // console.log(this.avgSalePerHour);
//   }
// }

// //get avg customer per hour
// function avgCustomerPerHour(minCustomerPerHour, maxCustomerPerHour){
// return Math.floor(Math.random() * (maxCustomerPerHour - minCustomerPerHour) * hoursOfOperationArray.length);
// }

// console.log(seattle.setAvgSalePerHour());
// console.log(seattle);
// console.log(tokyo.setAvgSalePerHour());
// console.log(tokyo);
// console.log(dubai.setAvgSalePerHour());
// console.log(dubai);
// console.log(paris.setAvgSalePerHour());
// console.log(paris);
// console.log(lima.setAvgSalePerHour());
// console.log(lima);

// const storeFrontDivElem = document.getElementById('storeFront');

// function makeStoreFrontArticle(location) {
//   const articleElem = document.createElement('article');
//   storeFrontDivElem.appendChild(articleElem);

// // make image element and add the link src
//   // const imgElem = document.createElement('img');

// // create th for each day of week
//   const thElem = document.createElement('th');
//   thElem.textContent = `daysOfWeek: ${location.daysOfWeek}`;
//   articleElem.appendChild(thElem);
//   console.log(storeFrontDivElem);

// //create td of each hour for hourly sale
//   const tdElem = document.createElement('td');
//   tdElem.textContent = `avgSalePerHour: ${location.avgSalePerHour}`;
//   articleElem.appendChild(tdElem);
//   console.log(storeFrontDivElem);


// for (let i = 0; i < hoursOfOperationArray.length; i++){
//   const liElem = document.createElement('li');
//   tdElem.textContent = hoursOfOperationArray[i];
//   tdElem.appendChild(liElem);
//   }
// }

// makeStoreFrontArticle(seattle);
// makeStoreFrontArticle(tokyo);
// makeStoreFrontArticle(dubai);
// makeStoreFrontArticle(paris);
// makeStoreFrontArticle(lima);
