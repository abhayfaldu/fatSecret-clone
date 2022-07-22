
let nav2 = () => {
    return `<div id="im">
            <img src="https://img.freepik.com/free-vector/spoon-fork-knife-plate-3d-illustration_33099-205.jpg" alt="">

            <div id="tag">
                <h2>Foods</h2>
                <p>Browse common foods and products from your favourite brands and restaurants.<p>
            </div>
        </div>
        <!-- #region right search bar-->
        <div id="ri">
            <i>Food Search</i>
            <input type="text" placeholder="Enter search" id="query">

            <div class="btn">
            <button id="btn" ><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>

        </div>`
}
export {nav2}

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