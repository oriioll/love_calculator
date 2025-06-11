//  import { Analytics } from "@vercel/analytics/next"
const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
let score = 0;

function lowername(nombre) {
  return nombre.toLowerCase().trim(); // También quitamos espacios en blanco por si acaso
}

document.getElementById("calculate").addEventListener("click", function () {
  const name1lower = lowername(name1.value);
  const name2lower = lowername(name2.value);

  if (name1.value === "" || name2.value === "") {
    alert("Please enter both names.");
    return;
  } else if (
    (name1lower === "oriol" && name2lower === "gemma") ||
    (name1lower === "gemma" && name2lower === "oriol") 
  ) {
    score = 100;
    document.getElementById("show").innerText = `${score}%`;
  } else if (
    (name1lower === "abril" && name2lower === "gavi") ||
    (name1lower === "gavi" && name2lower === "abril") ||
    (name1lower === "berta" && name2lower === "laia") ||
    (name1lower === "laia" && name2lower === "berta") ||
    (name1lower === "laia" && name2lower === "sergi") ||
    (name1lower === "sergi" && name2lower === "laia")
  ) {
    score = 99;
    document.getElementById("show").innerText = `${score}%`;
  } 
  else {
    score = Math.floor(Math.random() * 99) + 1;
    document.getElementById("show").innerText = `${score}%`;
  }
});

let openModal = false;

document.getElementById("modal").addEventListener("click", function () {
  if (openModal === false) {
    document.querySelector(".instrucciones").style.display = "block";
    openModal = true;
  } else {
    document.querySelector(".instrucciones").style.display = "none";
    openModal = false;
  }
});

document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".instrucciones").style.display = "none";
  openModal = false;
});