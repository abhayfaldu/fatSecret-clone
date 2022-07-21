
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
     document.getElementById("hom").innerHTML = null;
    data.map((ele) => {
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        div2.setAttribute("id","K")


        let img = document.createElement("img")
        img.src = ele.image;
        div1.append(img)

        let a1 = document.createElement("h1");
        a1.innerText = ele.title;
        
        let a2 = document.createElement("h5");
        a2.innerText = "More..."
        
        div2.append(a1, a2)
        div.append(div1, div2)
        document.getElementById("hom").append(div)

        
    })
}
export {getData,append}