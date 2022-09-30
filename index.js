/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const feet = 3.281;
const gallon = 0.264;
const pound = 2.204;
const meter = 0.3048;
const liter = 3.78541;
const kilos = 0.453592;
let lengthTxt = document.getElementById("Length-txt");
let volTxt = document.getElementById("Vol-txt");
let massTxt = document.getElementById("Mass-txt");
const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", function () {
  const inputNum = document.getElementById("input-txt").value;
  const feetEq = inputNum * feet;
  const gallonsEq = inputNum * gallon;
  const poundsEq = inputNum * pound;
  const meterEq = inputNum * feet;
  const literEq = inputNum * gallon;
  const kiloEq = inputNum * pound;

  lengthTxt.innerHTML = `${inputNum} meters = ${feetEq.toFixed(
    3
  )} feet | ${inputNum} feet = ${meterEq.toFixed(3)} meters`;

  volTxt.innerHTML = `${inputNum} liters = ${gallonsEq.toFixed(
    3
  )} gallons | ${inputNum} gallons = ${literEq.toFixed(3)} liters`;

  massTxt.innerHTML = `${inputNum} kilos = ${poundsEq.toFixed(
    3
  )} pounds | ${inputNum} pounds = ${kiloEq.toFixed(3)} kilos`;
});
