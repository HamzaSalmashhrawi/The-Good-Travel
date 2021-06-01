'use strict';
let travelPlaces = [];

let areasTravel = ['HAWAII', 'LONDON', 'PARIS', 'ITALY', 'SLOVAKIA', 'MALAYSIA']


function Places(placesName, tripPlace, typeOfTransport) {
    this.placesName = placesName
    this.tripPlace = tripPlace
    this.typeOfTransport = typeOfTransport

    travelPlaces.push(this);
}
console.log(travelPlaces)

new Places('HAWAII');
new Places('LONDON');
new Places('PARIS');
new Places('ITALY');
new Places('SLOVAKIA');
new Places('MALAYSIA');


let placesName = document.getElementById('formId');
let taBle = document.getElementById('tableId')
function renderTable() {
    for (let i = 0; i < areasTravel.length; i++) {
        let tableRow =document.createElement('tr');
        taBle.appendChild(tableRow)
        let tableData = document.createElement('td')
        tableRow.appendChild(tableData)
       

    }
}
renderTable();



// event listener

let eventListener =document.getElementById('submitBtn').addEventListener("click");


// local storage 


function setTOlocalstorage() {
    let saved=JSON.stringify()
    localStorage.setItem('', saved)
    
}

function getFromLocalStorage() {
    let stringData = localStorage.getItem('');
    let dataTonormal = JSON.parse(stringData);

    if (dataTonormal !==null)
    ;
}


// function to render the choosen image on the web
function renderThechosenImg() {
    
}
renderThechosenImg();