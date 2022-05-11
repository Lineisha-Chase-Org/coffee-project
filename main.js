"use strict"

function renderCoffee(coffee) {
    let html = '<section class="coffee">';
    html += '<div><h4>' + coffee.name + '</h4></div>';
    html += '<div><h6>' + coffee.roast + '</h6></div>';
    html += '</section>';
    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    if (selectedRoast === "all") {
        for (let i = 0; i < coffees.length; i++) {
            if (coffees[i].name.toLowerCase().includes(txtInput.value.toLowerCase())) {
                filteredCoffees.push(coffees[i]);
            }
        }
    }
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(txtInput.value.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

function addCoffee(e) {
    e.preventDefault();
    let isThere = false;
    for(let i = 0; i < coffees.length;i++){
        if(coffees[i].name === newCoffee.value){
            isThere = true;
        }
    }
    if(!isThere){
        coffees.push({
            id: coffees.length + 1, name: newCoffee.value, roast: newRoast.value
        });
    }
}

let tbody = document.querySelector('#coffees');
tbody.innerHTML = renderCoffees(coffees);

let submitButton1 = document.querySelector('#submit1');
let submitButton2 = document.querySelector("#submit2");
submitButton1.addEventListener('click', updateCoffees);
submitButton2.addEventListener('click', addCoffee);

let txtInput = document.getElementById("userInput1");
let roastSelection = document.querySelector('#roast-selection');

let newRoast = document.querySelector("#add-roast");
let newCoffee = document.getElementById("userInput2");

let searchInput = document.getElementById("userInput1");
searchInput.addEventListener("keyup", updateCoffees);

roastSelection.addEventListener("change", updateCoffees);