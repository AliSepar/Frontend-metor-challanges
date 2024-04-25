let dropdown1Btn = document.getElementById("dropdown1-btn");
let dropdown2Btn = document.getElementById("dropdown2-btn");

// dropdowns
let dropdown1 = document.getElementById("dropdown1");
let dropdown2 = document.getElementById("dropdown2");
dropdown1.style["display"] = "none";
dropdown2.style["display"] = "none";
dropdown1Btn.addEventListener("click", () => {
  //   dropdown1.style.display = "block";

  if (dropdown1.style["display"] == "none") {
    dropdown1.style.display = "block";
    dropdown1Btn.style.fontWeight = "500";
    dropdown1Btn.style.color = "black";
  } else {
    dropdown1.style.display = "none";
    dropdown1Btn.style.fontWeight = "400";
    dropdown1Btn.style.color = "hsl(0, 0%, 41%)";
  }
});
dropdown2Btn.addEventListener("click", () => {
  if (dropdown2.style["display"] == "none") {
    dropdown2.style.display = "block";
    dropdown2Btn.style.fontWeight = "500";
    dropdown2Btn.style.color = "black";
  } else {
    dropdown2.style.display = "none";
    dropdown2Btn.style.fontWeight = "400";
    dropdown2Btn.style.color = "hsl(0, 0%, 41%)";
  }
});
