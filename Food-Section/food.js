let url = `https://masai-api.herokuapp.com/news/top-headlines?country=in`

let getData = async (url) => {
    try {
        let res = await fetch(url)
        let data =await res.json();
        return (data.articles)
    }
    catch (err) {
        console.log(err)
    }
}
getData(url)

let append = (data) => {
    data.map((ele) => {
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        div2.setAttribute("id","K")


        let img = document.createElement("img")
        img.src = ele.urlToImage;
        div1.append(img)

        let a1 = document.createElement("a");
        a1.innerText = ele.title;
        let para = document.createElement("p");
        para.innerText = ele.description;
        let a2 = document.createElement("a");
        a2.innerHTML = "More..."
        
        div2.append(a1, para, a2)
        div.append(div1, div2)
        document.getElementById("hom").append(div)

        
    })
}

let result = async(url) => {
    getData(url).then((res) => {
        append(res)
        
    })
}
result(url)