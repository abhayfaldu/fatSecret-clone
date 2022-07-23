// console.log(1);
import { header } from "../components/header.js";
document.querySelector("#header").innerHTML = header();
// console.log(2);

let searchObj = JSON.parse(localStorage.getItem("searchObj"));

console.log(1.3);
let searchBtn = document.querySelector("#searchBtn").addEventListener("click", search);
console.log(1);

function search() {
  console.log(2);
  let searchInputVar = document.querySelector("#searchInput")
  console.log('searchInputVar:', searchInputVar)
  searchInputVar = searchInputVar.value;
  console.log("searchInputVar:", searchInputVar);
  console.log(3);
  console.log(searchInputVar == "sleeping", searchInputVar);
  console.log(searchInputVar == "bicycling", searchInputVar);
  if (searchInputVar == "sleeping" || searchInputVar == "bicycling") {
    console.log(4);
    localStorage.setItem("searchVal", searchInputVar);
    mainAppend();
    // append(searchVal);
    //   console.log(4)
    //   append(searchInput);
    //   console.log(5)
  }
  //   // if (searchInput === "bicycling") {

  //   // //   append(searchInput);
  //   //   localStorage.setItem("searchVal", "bicycling");
  //   // }
  //   // let searchVal = localStorage.getItem("searchVal");
  //   // if (searchVal == "sleeping" || searchVal == "bicycling") {
  //   //   append(searchVal);
  //   // }
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
