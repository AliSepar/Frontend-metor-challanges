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

  const cleanedValue = cardNumber.value.replace(/\s/g, ""); // Remove any existing spaces
  const formattedValue = cleanedValue.replace(/(.{4})/g, "$1 "); // Insert a space after every 4 characters
  cardNumber.value = formattedValue; // Update the input value
  //   have to remove spaces before adding new ruls
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
