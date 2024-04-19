// input fields
let inputName = document.getElementById("inputName");
let cardNumber = document.querySelector("#cardNumber");
let inputMonth = document.getElementById("inputMonth");
let inputYear = document.getElementById("inputYear");
let inputCvc = document.getElementById("inputCvc");

// output fields
let outName = document.getElementById("outName");
let outNumber = document.getElementById("outnumber");
let outMonth = document.getElementById("outMonth");
let outYear = document.getElementById("outYear");
let outCvc = document.getElementById("outCvc");

inputName.addEventListener("keyup", function () {
  outName.textContent = inputName.value;
});

cardNumber.addEventListener("keyup", function () {
  outNumber.textContent = cardNumber.value;
  console.log(cardNumber.value);
});
inputMonth.addEventListener("keyup", function () {
  outMonth.textContent = inputMonth.value;
});

inputYear.addEventListener("keyup", function () {
  outYear.textContent = inputYear.value;
});
inputCvc.addEventListener("keyup", function () {
  outCvc.textContent = inputCvc.value;
});
