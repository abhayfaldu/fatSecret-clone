
import { nav2 } from "../components/foode.js";
document.getElementById("top").innerHTML = nav2();

import {getData, append} from "../components/foode.js"

let api_key="d4f2e76e07764e2b8b1bdeab5bb45695"
  let url= ` https://api.spoonacular.com/recipes/complexSearch?&maxFat=5&minProtein=10&maxCalcium=100&minVitaminA=0&minVitaminC=0&apiKey=${api_key}`;



let result = async(url) => {
    getData(url).then((res) => {
        append(res)
        console.log(res)
    })
}
result(url)


let array = [];
let search = (ele) => {
    
        let Store_Data = document.getElementById("query").value;
    array.push(Store_Data);

    localStorage.setItem("search",JSON.stringify(Store_Data))
    window.location.href="Search.html"
    
    
}
document.getElementById("btn").addEventListener("click",search)