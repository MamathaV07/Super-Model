//To Get all the id names from innerHTML and store it into variable

let openBtn = document.getElementById("open-btn");
let modalContainer = document.getElementById("modal-container");
let closeBtn = document.getElementById("close-btn");

//Create a function to click a button to display model

openBtn.addEventListener("click", function () {
  modalContainer.style.display = "flex";
});

//Create a function to click a button to hide model

closeBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

//Using window object to click anywhere on the screen

window.addEventListener("click", function (e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
