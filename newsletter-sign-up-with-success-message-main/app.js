
let btn = document.querySelector(".btn");
let successBtn = document.querySelector('.s-btn');
let container = document.querySelector('.container');

// let contentClass = document.querySelector('.content');
// let imageClass = document.querySelector('.image');
let errormessage=document.querySelector('.errormasg');
let successcard = document.querySelector('.sucsses-card');
let clintEmail = document.querySelector("#clint-email");

btn.addEventListener("click",function(){
let getEmail = document.querySelector('.email');

let emailValue= getEmail.value;
if(validateEmail(emailValue)){
    container.classList.add("hide"); //hiding the content div
    // imageClass.classList.add("hide");
    successcard.classList.remove("hide"); //removing the hide class from div
    successcard.classList.add("show");//adding the show class to the div
    clintEmail.textContent=getEmail.value; //seting the value to span from input box

}else{
    getEmail.classList.add("errorinbox");
    errormessage.classList.remove("hide");
}
});
// checking the email
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

successBtn.addEventListener("click",function () {
    location.reload();
});