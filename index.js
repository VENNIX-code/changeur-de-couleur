let greenButton = document.getElementById("green");
let redButton = document.getElementById("red");
let blueButton = document.getElementById("blue");
let randomButton = document.getElementById("random");

greenButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

redButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

blueButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

let colors = ["red", "green", "blue", "yellow", "purple", "orange"];

randomButton.addEventListener("click", function () {
  let index = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[index];
});
