import { header } from "../components/header.js";
let headerDiv = document.querySelector("#header");
headerDiv.innerHTML = header();

const exerciseArr = [
  {
    heading: "Golf (cart)",
    fiveMin: 12,
    image: "https://a.ftscrt.com/static/images/fitness/lrg_golf-(cart).gif",
    tenMin: function () {
      return this.fiveMin * 2;
    },
    fifteenMin: function () {
      return this.fiveMin * 3;
    },
    thirtyMin: function () {
      return this.fiveMin * 6;
    },
  },
  {
    heading: "Stretching (yoga)",
    fiveMin: 24,
    image: "https://a.ftscrt.com/static/images/fitness/lrg_stretching-(yoga).gif",
    tenMin: function () {
      return this.fiveMin * 2;
    },
    fifteenMin: function () {
      return this.fiveMin * 3;
    },
    thirtyMin: function () {
      return this.fiveMin * 6;
    },
  },
  {
    heading: "Motor-Cross",
    fiveMin: 24,
    image: "https://a.ftscrt.com/static/images/fitness/lrg_motor-cross.gif",
    tenMin: function () {
      return this.fiveMin * 2;
    },
    fifteenMin: function () {
      return this.fiveMin * 3;
    },
    thirtyMin: function () {
      return this.fiveMin * 6;
    },
  },
  {
    heading: "Dance (fast step, aerobic)",
    fiveMin: 37,
    image: "https://a.ftscrt.com/static/images/fitness/lrg_dance-(fast-step-aerobic).gif",
    tenMin: function () {
      return this.fiveMin * 2;
    },
    fifteenMin: function () {
      return this.fiveMin * 3;
    },
    thirtyMin: function () {
      return this.fiveMin * 6;
    },
  },
];

let searchObj = {
  sleeping: [
    {
      heading: "Sleeping",
      intensity: "high",
      met: 0.9,
      calories: 66,
    }
  ],
  bicycling: [
    {
      heading: "Bicycling(Fast) - 24/kph",
      intensity: "Strenuous",
      met: 10.0,
      calories: 735,
    },
    {
      heading: "Bicycling (leisurely) - <16/kph",
      intensity: "Moderate",
      met: 4.0,
      calories: 294,
    },
    {
      heading: "Bicycling (moderate) - 21/kph",
      intensity: "Moderate",
      met: 8.0,
      calories: 588,
    },
    {
      heading: "Bicycling (slow) - 18/kph",
      intensity: "Moderate",
      met: 6.0,
      calories: 441,
    },
    {
      heading: "Bicycling (very fast) - 28/kph",
      intensity: "Strenuous",
      met: 12.0,
      calories: 882,
    },
    {
      heading: "Bike Machine (Cycling)",
      intensity: "Strenuous",
      met: 8.0,
      calories: 588,
    },
  ],
};
localStorage.setItem("searchObj", JSON.stringify(searchObj));

let carousel = () => {
  
  let i = 1;
  let id = setInterval(() => {

    carouselAppend(i);
    if (i == 3) {
      i = -1;
    }
    i++;
  }, 10000);
}
carouselAppend(0);
carousel();
function carouselAppend(i) {
  let exercise = document.querySelector("#exercise");
  exercise.innerHTML = null;

  let h1 = document.createElement("h1");
  h1.innerText = exerciseArr[i].heading;

  let outerDiv = document.createElement("div");

  let img = document.createElement("img");
  img.src = exerciseArr[i].image;

  let innerDiv = document.createElement("div");

  let h3 = document.createElement("h3");
  h3.innerHTML = `Estimated Energy Burned <span>for a 70 kg person</span>`;

  let innerInnerDiv = document.createElement("div");
  innerInnerDiv.setAttribute("class", "calories");

  let innerInnerInnerDiv1 = document.createElement("div");
  let lastDiv11 = document.createElement("div");
  lastDiv11.innerText = "5 minutes";
  let lastDiv12 = document.createElement("div");
  lastDiv12.innerText = `${exerciseArr[i].fiveMin} calories`;
  innerInnerInnerDiv1.append(lastDiv11, lastDiv12);

  let innerInnerInnerDiv2 = document.createElement("div");
  let lastDiv21 = document.createElement("div");
  lastDiv21.innerText = "10 minutes";
  let lastDiv22 = document.createElement("div");
  lastDiv22.innerText = `${exerciseArr[i].tenMin()} calories`;
  innerInnerInnerDiv2.append(lastDiv21, lastDiv22);

  let innerInnerInnerDiv3 = document.createElement("div");
  let lastDiv31 = document.createElement("div");
  lastDiv31.innerText = "15 minutes";
  let lastDiv32 = document.createElement("div");
  lastDiv32.innerText = `${exerciseArr[i].fifteenMin()} calories`;
  innerInnerInnerDiv3.append(lastDiv31, lastDiv32);

  let innerInnerInnerDiv4 = document.createElement("div");
  let lastDiv41 = document.createElement("div");
  lastDiv41.innerText = "30 minutes";
  let lastDiv42 = document.createElement("div");
  lastDiv42.innerText = `${exerciseArr[i].thirtyMin()} calories`;
  innerInnerInnerDiv4.append(lastDiv41, lastDiv42);

  innerInnerDiv.append(
    innerInnerInnerDiv1,
    innerInnerInnerDiv2,
    innerInnerInnerDiv3,
    innerInnerInnerDiv4
  );

  let viewMoreDiv = document.createElement("div");
  viewMoreDiv.setAttribute("class", "viewMore");
  viewMoreDiv.innerText = "View more";

  innerDiv.append(h3, innerInnerDiv, viewMoreDiv);
  outerDiv.append(img, innerDiv);
  exercise.append(h1, outerDiv);
}
let searchBtn = document.querySelector("#searchBtn").addEventListener("click", search)
function search () {
  let query = document.querySelector("#ExerciseSearch").value;
  if (query === "sleeping") {
    localStorage.setItem("searchVal", "sleeping");
    window.location.href = "activities.html"
  } else if (query === "bicycling") {
    localStorage.setItem("searchVal", "bicycling");
    window.location.href = "activities.html"
  }
}