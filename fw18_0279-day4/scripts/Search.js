

import { nav2 } from "../components/foode.js"
document.getElementById("top").innerHTML = nav2();


let query = document.getElementById("query")
   
 let url= `https://api.spoonacular.com/recipes/complexSearch?&maxFat=25&minProtein=10&maxCalcium=100&minVitaminA=0&minVitaminC=0&q=${query}&apiKey=d4f2e76e07764e2b8b1bdeab5bb45695`;

let result = async(query) => {
    
    
    getData(url).then((res)=>{
        console.log(res)
         append(res)
    })
}
document.getElementById("btn").addEventListener("click", result)

let getData = async (url) => {
    try {
        let res = await fetch(url)
        let data =await res.json();
        return (data.results)
    }
    catch (err) {
        console.log(err)
    }
}


let append = (data) => {
     document.getElementById("Search").innerHTML = null;
    data.forEach((ele) => {
        let div = document.createElement("div");
        div.setAttribute("id", "div")
        
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        div2.setAttribute("id", "K")
        


        let img = document.createElement("img")
        img.src = ele.image;
        div1.append(img)

        let a1 = document.createElement("h1");
        a1.innerText = ele.title;
        
        let a2 = document.createElement("h5");
        a2.innerText = "More..."
        
        div2.append(a1, a2)
        div.append(div1, div2)
        document.getElementById("Search").append(div)

        div2.addEventListener("click", function () {
            Nedata(ele)
        })
        
    })
}

let array = [];
let Nedata = (ele) => {
    array.push(ele);
    localStorage.setItem("news", JSON.stringify(array));
    window.location.href="info.html"
}


