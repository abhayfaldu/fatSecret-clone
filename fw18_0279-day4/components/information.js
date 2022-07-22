let append=(data)=>{
    document.querySelector("#detailed_news").innerHTML=null
    data.map((ele)=>{
        let box=document.createElement("div")
        box.setAttribute("class","news")
       let image=document.createElement("img")
       image.src=ele.urlToImage
       let div1=document.createElement("div")
       div1.append(image)
       let div2=document.createElement("div")
       let h4=document.createElement("h4")
       h4.innerText=ele.title
       let p=document.createElement("p")
       p.innerText=ele.description


       div2.append(h4,p)
       box.append(div1,div2)
       document.querySelector("#detailed_news").append(box)

    })

}
export {append}