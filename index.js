/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputTxt = document.getElementById("input-txt")
let convertBtn = document.getElementById("convert-btn")
let lengthDesc = document.getElementById("length--desc")
let volumeDesc = document.getElementById("volume--desc")
let massDesc = document.getElementById("mass--desc")


function convertMeterToFeet(num){
    return num * 3.281
}

function convertFeetToMeter(num){
    return num * (1/3.281)
}

function convertLiterToGallon(num){
    return num * 0.264
}

function convertGallonToLiter(num){
    return num * (1/0.264)
}

function convertKilogramToPound(num){
    return num * 2.204
}

function convertPoundToKilogram(num){
    return num * (1/2.204)
}


convertBtn.addEventListener('click', function(){
    const inputValue = inputTxt.value
    lengthDesc.textContent = `
    ${inputValue} meters = ${convertMeterToFeet(inputValue).toFixed(3)} feet | 
    ${inputValue} feet = ${convertFeetToMeter(inputValue).toFixed(3)} meters`
    volumeDesc.textContent = `
    ${inputValue} liters = ${convertLiterToGallon(inputValue).toFixed(3)} gallons | 
    ${inputValue} gallons = ${convertGallonToLiter(inputValue).toFixed(3)} liters`
    massDesc.textContent = `
    ${inputValue} kilos = ${convertKilogramToPound(inputValue).toFixed(3)} pounds | 
    ${inputValue} pounds = ${convertPoundToKilogram(inputValue).toFixed(3)} kilos`
    
})
