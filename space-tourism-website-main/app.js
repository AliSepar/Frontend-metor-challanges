// page control
//{ let pagehome = document.getElementById("page-home");
// let pagedestination = document.getElementById("page-destination");
// let pagecrew = document.getElementById("page-crew");
// let pagetechnology = document.getElementById("page-technology");
// let bodytag = document.getElementsByTagName("body");

// pagehome.addEventListener("click", () => {
//   document.body.style.backgroundImage =
//     "url(./assets/home/background-home-desktop.jpg)";

// });

// pagedestination.addEventListener("click", () => {
//   document.body.style.backgroundImage =
//     "url(./assets/destination/background-destination-desktop.jpg)";
// });

// pagecrew.addEventListener("click", () => {
//   document.body.style.backgroundImage =
//     "url(./assets/crew/background-crew-desktop.jpg)";
// });

// pagetechnology.addEventListener("click", () => {
//   document.body.style.backgroundImage =
//     "url(./assets/technology/background-technology-desktop.jpg)";
// }); }

//////////////////////

let Dimage = document.getElementById("d-image");
let moontab = document.getElementById("moon-tab");

let marstab = document.getElementById("mars-tab");
let europatab = document.getElementById("europa-tab");
let titantab = document.getElementById("titan-tab");

let dtitle = document.getElementById("d-title");
let dparagraph = document.getElementById("d-paragraph");

fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // document.addEventListener("DOMContentLoaded", function () {
    //   console.log("loaded");
    //   showTabData("Moon", moontab);
    // });

    function showTabData(planet, tab) {
      for (let i = 0; i < Object.keys(data["destinations"]).length; i++) {
        if (data["destinations"][i].name == planet) {
          dtitle.innerHTML = data["destinations"][i].name;
          dparagraph.innerHTML = data["destinations"][i].description;
          Dimage.src = data["destinations"][i].images.webp;
          //   tab.classList.add("active");
        }
      }
    }

    moontab.addEventListener("click", function () {
      showTabData("Moon", moontab);
    });

    marstab.addEventListener("click", function () {
      showTabData("Mars", marstab);
    });

    europatab.addEventListener("click", function () {
      showTabData("Europa", europatab);
    });

    titantab.addEventListener("click", function () {
      showTabData("Titan", titantab);
    });
  })
  .catch(function (error) {
    console.log("something wrong with retriving json data");
  });
