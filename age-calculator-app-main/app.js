
let inputDay=document.getElementById('day');
let inputMonth=document.getElementById('month');
let inputYear=document.getElementById('year');

//o
let outDay = document.getElementById('rday'); 
let outMonth = document.getElementById('rmonth');
let outYear = document.getElementById('ryear');

let btn = document.querySelector('.btn');

btn.addEventListener("click",function () {
    if(isNaN(inputDay.value) && isNaN(inputMonth.value)&& isNaN(inputYear.value)){
       
            // not number error
    }else{
     
        const myAge = calculateAge(inputDay.value,inputMonth.value,inputYear.value);
       
        // console.log(`My age is ${myAge.years} years, ${myAge.months} months, and ${myAge.days} days.`);
       
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
