const main = document.getElementById('main')
const addUserbtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionairesBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate-wealth')


let data = []

getRandomUser();
getRandomUser();
getRandomUser();

// fetch random user and add money
async function getRandomUser() {

  const res = await fetch('https://randomuser.me/api');

  const data = await res.json();

  const user = data.results[0];

  const newUser = {

    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)

  }

  addData(newUser)

}

// Double everyones money
function doubleMoney() {
  data = data.map((user) => {
    return {
      ...user,
      money: user.money * 2
    }
  });

  updateDom()
}

// Sort users by richest
function sortByRichest() {

  data.sort((a, b) => b.money - a.money)

  updateDom();
}

// Filter only 1000000
function showMillionaires() {
  data = data.filter(user => user.money > 1000000);

  updateDom()
}

// Calculate the total wealth
function calculateWealth(){
  const wealth = data.reduce((acc,user) => (acc +=user.money), 0);

  const wealthEl = document.createElement('div')
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;

  main.appendChild(wealthEl)

}

// Add new obj to data arr
function addData(obj) {

  data.push(obj)

  updateDom();

}

// Update Dom
function updateDom(provideData = data) {

  //Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';


  provideData.forEach(function (item) {

    const el = document.createElement('div');
    el.classList.add('person')
    el.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`
    main.appendChild(el)
  });

}

// Format number as money
function formatMoney(number) {

  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

addUserbtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires)
calculateWealthBtn.addEventListener('click', calculateWealth)