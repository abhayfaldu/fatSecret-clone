import { header } from "/hard-ear-2917/components/header.js";
document.querySelector("#header").innerHTML = header();

let searchObj = JSON.parse(localStorage.getItem("searchObj"));

console.log(1.3);
let searchBtn = document.querySelector("#searchBtn").addEventListener("click", search);

function search() {

  let searchInputVar = document.querySelector("#searchInput").value;
  console.log("searchInputVar:", searchInputVar, "hee");

  if (searchInputVar == "sleeping" || searchInputVar == "bicycling") {
    localStorage.setItem("searchVal", searchInputVar);
    mainAppend();
  }
}

mainAppend();
function mainAppend() {
  let searchVal = localStorage.getItem("searchVal");
  if (searchVal == "sleeping" || searchVal == "bicycling") {
    append(searchVal);
  }
}

function append(searchValue) {
  // console.log(12)
  console.log(searchValue);
  let results = document.querySelector("#results");
  results.innerHTML = null;

  searchObj[searchValue].forEach((el) => {
    let div = document.createElement("div");

    let h3 = document.createElement("h3");
    h3.innerHTML = el.heading;

    let intens = document.createElement("div");
    intens.innerText = `Intensity: ${el.intensity}\n for a 70kg person: MET - ${el.met}, cals/hr - ${el.calories}`;

    div.append(h3, intens);
    results.append(div);
  });
}
