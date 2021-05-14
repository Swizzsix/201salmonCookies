'use strict';

//problem domain: Pat needs hourly salmon cookie sales per city

//global hours of operations array
 //"i had () for array instead of []"
const hoursOfOperationArray = ['', '0600 ', '0700 ', '0800 ', '0900 ',
 '1000 ', '1100 ', '1200 ', '1300 ', '1400 ', '1500 ', '1600', '1700', '1800', '1900']
const cityLocationsArray = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima']
const ingredientsArray = ['ingredient1', 'ingredient2', 'ingredient3']
const allCities = [];
const formElem = document.getElementById('addCityForm');
// constructor (f) = City
function City (cityLocations, minCustomerPerHour, maxCustomerPerHour, avgSalePerCustomer, hoursOfOperationArray, ingredientsArray, photo) {
  this.cityLocations = cityLocations; 
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgSalePerCustomer = avgSalePerCustomer;
  this.hoursOfOperationArray = hoursOfOperationArray;
  this.ingredientsArray = ingredientsArray;
  this.photo = photo;

  allCities.push(this);
}

City.prototype.render = render;
// add setAvg method = here we define the function inline
City.prototype.setAvg = function() {
  //i only put single number instead of for loop incremented i++
  this.avgSalePerHour = []
  for (let i = 0; i < hoursOfOperationArray.length; i++){
    this.avgSalePerHour.push(randomAvg(this.minCustomerPerHour, this.maxCustomerPerHour));
  }
}

// --------------------------- Regular Functions ---------------------------//
//random average function
function randomAvg(minCustomerPerHour, maxCustomerPerHour) {
  return Math.floor(Math.random() * (maxCustomerPerHour - minCustomerPerHour) + minCustomerPerHour);
}

function handleSubmit(event) {
  event.preventDefault();
  let formName = event.target.cityLocations.value;
  let photo = event.target.photo.value;
  let hoursOfOperationArrayString = event.target.hoursOfOperationArray.value;
  let minCustomerPerHour = event.target.minCustomerPerHour.value;
  let maxCustomerPerHour = event.target.maxCustomerPerHour.checked;
  let avgSalePerCustomer = event.target.avgSalePerCustomer.checked;
  let hoursOfOperationArray = hoursOfOperationArrayString.split(',')
  
  let newCity = new City(formName, photo, hoursOfOperationArray, minCustomerPerHour, maxCustomerPerHour, avgSalePerCustomer);
  allCities.push(newCity)
  console.log(newCity);
  newCity.setavg();
  newCity.render();
  renderAllCities();
  // how do we make sure that we render all the kittens again we don't double up?
  //Kitten(name, photo, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats)
  // a common programming pattern is to wipe out ALL content in a section and rerender all of it 
  // reset the form for the user
  event.target.reset();
}

function renderAllCities(){
  for (let i = 0; i < allCities.length; i++) {
    allCities[i].render();
  }
}
function render() {
  const parentElement = document.getElementById("cityStoreFront");

  const article = document.createElement('article')
  parentElement.appendChild(article);

  const h2 = document.createElement('h2')
  h2.textContent = this.cityLocations;
  article.appendChild(h2);

  console.log(this.cityLocations);

  const img = document.createElement('img');
  // img.setAttribute('src', this.cityLocations);
  img.setAttribute('src', 'images/' + this.cityLocations + '.jpg');
  img.setAttribute('alt', this.cityLocations + 'our cookies are yummy');
  article.appendChild(img);

  const p = document.createElement('p')
  p.textContent = this.cityLocations + ' Salmon Cookies are delicious! ' + this.setAvg + ' avg customer per hour';

  console.log(this.ingredientsArray);

  const ul = document.createElement('ul');
  article.appendChild(ul);

  for (let i = 0; i < this.ingredientsArray.length; i++){
    const li = document.createElement('li');
    li.textContent = this.ingredientsArray[i];
    ul.appendChild(li);
  }

  // --------------------------- Make the page run ---------------------------//

// --------------------------- All Listeners ---------------------------//

// identify the event we want to listen for: submit
// attach an event listener
formElem.addEventListener('submit', handleSubmit)
// I heard submit!!!
// I know what to do: handleSumbit(event);
// a callback function is a reference to a function that we will call when appropriate
// handle the event
// write the handle submit function
// event handles always come with a event passed in as an argument

//create elements
  const table = document.createElement('table');

  const row1 = document.createElement('tr');
  const row2 = document.createElement('tr');

  const th1 = document.createElement('th');
  th1.textContent = 'Gluten Free';
  const th2 = document.createElement('th');
  th2.textContent = 'Is Organic';
  const th3 = document.createElement('th');
  th3.textContent = 'Has Sugar';

  const td1 = document.createElement('td');
  td1.textContent = this.ingredientsArray[0];
  const td2 = document.createElement('td');
  td2.textContent = this.ingredientsArray[1];
  const td3 = document.createElement('td');
  td3.textContent = this.ingredientsArray[2];

  row1.appendChild(th1);
  row1.appendChild(th2);
  row1.appendChild(th3);

  row2.appendChild(td1);
  row2.appendChild(td2);
  row2.appendChild(td3);

  table.appendChild(row1);
  table.appendChild(row2);
  article.appendChild(table);
}

// tell the owner to create new Salmon Cookie Store
const seattle = new City(cityLocationsArray[0], 1, 2, 3, hoursOfOperationArray, ingredientsArray);
seattle.render();

const tokyo = new City(cityLocationsArray[1], 1, 2, 3, hoursOfOperationArray, ingredientsArray);
tokyo.render();

const dubai = new City(cityLocationsArray[2], 1, 2, 3, hoursOfOperationArray, ingredientsArray);
dubai.render();

const paris = new City(cityLocationsArray[3], 1, 2, 3, hoursOfOperationArray, ingredientsArray);
paris.render();

const lima = new City(cityLocationsArray[4], 1, 2, 3, hoursOfOperationArray, ingredientsArray);
lima.render();

renderAllCities();