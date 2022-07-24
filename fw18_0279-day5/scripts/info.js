
console.log(1);
import { header } from "../components/header.js";
document.querySelector("#header").innerHTML = header();

let array2 = JSON.parse(localStorage.getItem("news"))
append(array2)

let array = [];
let search = (ele) => {
    
        let Store_Data = document.getElementById("query").value;
    array.push(Store_Data);

    localStorage.setItem("search",JSON.stringify(Store_Data))
    window.location.href="Search.html"
    
    
}
document.getElementById("btn").addEventListener("click",search)