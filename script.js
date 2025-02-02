


let tog = document.getElementById("dark");
let body = document.querySelector("body");
let h = document.querySelector("h1");

let s = "Кутман тан!";
let m = "Кутман кеч!";

tog.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.contains("bi-moon")) {
    body.style.backgroundColor = "rgb(46, 45, 45)";
    body.style.color = "white";
    body.style.transition = "4s";
    h.innerHTML = m;
  } else {
    body.style.backgroundColor = "rgb(255, 247, 151)";
    body.style.color = "black";
    body.style.transition = "4s";
    h.innerHTML = s;
  }
});

