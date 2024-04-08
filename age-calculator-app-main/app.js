
let inputDay=document.getElementById('day');
let inputMonth=document.getElementById('month');
let inputYear=document.getElementById('year');

//output elements to show result
let outDay = document.getElementById('rday'); 
let outMonth = document.getElementById('rmonth');
let outYear = document.getElementById('ryear');

let btn = document.querySelector('.btn');

// gitting error element
let dayError = document.querySelector('.error-masage-day');
let monthError = document.querySelector('.error-masage-month');
let yearError = document.querySelector('.error-masage-year');

// getting the lables
let dayLable = document.querySelector('.dlable');
let monthLable = document.querySelector('.monthlable');
let yearLable = document.querySelector('.yearlable');

let isValid ="";

inputDay.addEventListener('input',function(e){
    if(+inputDay.value > 31){
        dayError.textContent="Must be a valid day";
        inputDay.style.borderColor = "red";
        // dayLable.style.color = "white";
        isValid=false;
    }else{
        dayError.textContent=""; 
        inputDay.style.borderColor="hsl(0, 0%, 94%)";
        // dayLable.style.color = "red";
        isValid=true;
    }
});
inputMonth.addEventListener('input',function(e){
    if(inputMonth.value > 12 || inputMonth.value < 0){

        monthError.textContent="Must be a valid month";
        inputMonth.style.borderColor = "red";
        // monthLable.style.color="red";
        isValid=false;
    }else{
        monthError.textContent=""; 
        inputMonth.style.borderColor="hsl(0, 0%, 94%)";
        isValid=true;
    }
    // for april
    if(inputMonth.value==4 && inputDay.value==31){

        monthError.textContent="Must be a valid date";
        inputMonth.style.borderColor = "red";
        // monthLable.style.color="red";
        isValid=false;
    }else{
        monthError.textContent=""; 
        inputMonth.style.borderColor="hsl(0, 0%, 94%)";
        isValid=true;
    }


});
inputYear.addEventListener('input',function(e){
    const date = new Date();
    if(inputYear.value > date.getFullYear() || inputYear.value < 1){
        yearError.textContent="Must be a valid year";
        inputYear.style.borderColor = "red";
        isValid=false;
    }else{
        yearError.textContent=""; 
        inputYear.style.borderColor="hsl(0, 0%, 94%)";
        isValid=true;
    }
// if(inputYear.value < 1){
//     yearError.textContent="This field is requird";
// }
});


btn.addEventListener("click",function (e) {

    if(!isValid){
        e.preventDefault();
    }else{
       
        const myAge = calculateAge(inputDay.value,inputMonth.value,inputYear.value);
       
        outDay.textContent = myAge.days;
        outMonth.textContent = myAge.months;
        outYear.textContent = myAge.years;
    }
});


function calculateAge(day, month, year) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day); // Month is 0-indexed, so subtract 1
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000); // Considering leap years

    // Extract years, months, and days
    const years = Math.floor(ageInYears);
    const remainingDays = (ageInYears - years) * 365.25; // Convert remaining years to days
    const months = Math.floor(remainingDays / 30.44); // Average days in a month
    const days = Math.floor(remainingDays % 30.44);

    return { years, months, days };
}
