

import { nav2 } from "../components/foode.js"
document.getElementById("top").innerHTML = nav2();

import {getData,append} from "../components/Searche.js"

 let url= ` https://api.spoonacular.com/recipes/complexSearch?&maxFat=25&minProtein=10&maxCalcium=100&minVitaminA=0&minVitaminC=0&q=${query}&apiKey=d4f2e76e07764e2b8b1bdeab5bb45695`;

let result = async(url) => {
    let query = document.getElementById("query").value;
    let data=await getData(query);
    append(data)
    console.log(data)
}
document.getElementById("btn").addEventListener("click", result)


let array = [];
let search = (ele) => {
    
        let Store_Data = document.getElementById("query").value;
    array.push(Store_Data);

    localStorage.setItem("search",JSON.stringify(Store_Data))
    window.location.href="Search.html"
    
    
}
document.getElementById("btn").addEventListener("click",search)

