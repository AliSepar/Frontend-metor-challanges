// input fields
let inputName = document.getElementById("inputName");
let cardNumber = document.querySelector("#cardNumber");
let inputMonth = document.getElementById("inputMonth");
let inputYear = document.getElementById("inputYear");
let inputCvc = document.getElementById("inputCvc");

let subBtn = document.querySelector(".btn");
let continubtn = document.querySelector("#continubtn");

let formCard = document.querySelector(".form");
let completCard = document.querySelector(".complet-card");

// output fields
let outName = document.getElementById("outName");
let outNumber = document.getElementById("outnumber");
let outMonth = document.getElementById("outMonth");
let outYear = document.getElementById("outYear");
let outCvc = document.getElementById("outCvc");

// error spans
let namerror = document.getElementById("namerror");
let numbererror = document.getElementById("numbererror");
let dateerror = document.getElementById("dateerror");
let cvcerror = document.getElementById("cvcerror");

inputName.addEventListener("keyup", function () {
  outName.textContent = inputName.value;
});

cardNumber.addEventListener("keyup", function () {
  outNumber.textContent = cardNumber.value;
  // console.log(cardNumber.value);

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

// submit button
isvalid = true;
subBtn.addEventListener("click", function () {
  if (inputName.value == "") {
    showError(inputName, namerror, "Can't be black"); //input data field, error span, error message
    isvalid = false;
  } else {
    isvalid = true;
  }

  let regex = /[a-zA-Z]/;
  if (cardNumber.value == "") {
    showError(cardNumber, numbererror, "Can't be black");
    isvalid = false;
  } else {
    isvalid = true;
  }
  // var letters = /^[A-Za-z]+$/;
  let cardValue = removeSpaces(cardNumber.value);
  if (cardValue.match(regex)) {
    console.log(1);
    showError(cardNumber, numbererror, "Wrong Format, numbers only");
    isvalid = false;
  } else {
    isvalid = true;
  }

  // check month and year
  if (inputMonth.value == "") {
    showError(inputMonth, dateerror, "Can't be black");
    isvalid = false;
  } else {
    isvalid = true;
  }
  if (inputMonth.value > 12) {
    showError(inputMonth, dateerror, "Invalid Month");
    isvalid = false;
  } else {
    isvalid = true;
  }
  if (inputYear.value == "") {
    showError(inputYear, dateerror, "Can't be black");
    isvalid = false;
  } else {
    isvalid = true;
  }

  // check cvc number
  if (inputCvc.value == "") {
    showError(inputCvc, cvcerror, "Can't be black");
    isvalid = false;
  } else {
    isvalid = true;
  }

  if (isvalid) {
    console.log("ok");
    // open new div show success panel
    formCard.style["display"] = "none";
    completCard.style["display"] = "flex";
  } else {
    console.log("not ok");
    // do nothing
  }
});

continubtn.addEventListener("click", function () {
  location.reload();
});

//remove space from cardnumber
function removeSpaces(string) {
  return string.split(" ").join("");
}

function showError(inInput, errorSpan, errorMessage) {
  errorSpan.textContent = errorMessage;
  errorSpan.style.color = "hsl(0, 100%, 66%)";
  errorSpan.style.fontSize = "13px";
  errorSpan.style.fontWeight = "500";
  errorSpan.style.paddingTop = "5px";

  inInput.style.borderColor = "hsl(0, 100%, 66%)";
}
