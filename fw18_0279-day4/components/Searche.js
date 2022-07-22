let getData = async (query) => {
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

        
    })
}

/*let array = [];
let Nedata = (ele) => {
    array.push(ele);
    localStorage.setItem("news", JSON.stringify(array));
    window.location.href="Search.html"
}*/

export {getData,append}