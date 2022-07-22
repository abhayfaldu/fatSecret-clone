
import { nav2 } from "../components/foode.js";
document.getElementById("top").innerHTML = nav2();

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