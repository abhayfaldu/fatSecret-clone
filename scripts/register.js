function Submit12(){
    var x = document.getElementById("myDIV");
if (x.innerHTML === ".") {
document.createElement("div").innerHTML=  x.innerHTML = `<h3>Sedentary:</h3>Primarily daily living activites such as resting, desk work or driving. May include monderate housework and standing but no light exercise performed.<br>

<h4>Low Active:</h4> in addition to daily living activities, undertake more strenuous activities, such as longer periods of standing or housework.Some form of light exercise performed.<br>
<h4>Active:</h4> in addition to daily living activities, undertake more strenuous activities, such as longer periods of standing or housework.Some form of light exercise performed.<br>

<h4>Very active:</h4> in addition to daily living activities, undertake more strenuous activities, such as longer periods of standing or housework.Some form of light exercise performed.<br>
`;

} else {
x.innerHTML = ".";
} 
//   y.setAttribute("class","toggle")
}
let arr = JSON.parse(localStorage.getItem("Details"))||[];
function customerdet(Password,Email,Weight,Name){
this.Password = Password;
this.Email = Email;
this.Weight =Weight;
this.Name = Name
}

// Submit=(event) => {
//     event.preventDefault();
//     let next =document.getElementById("nex");
// let Form = document.getElementById("form");

//     let Password = form.pass.value;
//     let Email = form.email.value;
//     let detail = new customerdet(Password,Email)
//     console.log(detail);
//     arr.push(detail);
//     localStorage.setItem("Details",JSON.stringify(arr));
// }




// ---------------------------->

Submit=(event) => {
    //  console.log("a");
    event.preventDefault();
    let next =document.getElementById("nex");
    let Form = document.getElementById("form");
    var a= document.getElementById("select").value;
    var b=document.getElementById("select1").value;
    var c=document.getElementById("number").value;
    var d=document.getElementById("numb").value
   
    var f=document.getElementById("email").value;
   
    
    var num =document.getElementById("pass").value;
    // var month= document.getElementById("MM").value;
    // var pass= document.getElementById("CVV").value;
    // var user= document.getElementById("name").value;

   if( a=="" || b=="" || c=="" || d=="" ||  f=="" ){

    alert("All the address fields are mandatory")
   }

    else if(num==""){
        alert("All  fields are mandatory")
    }
  
    else if(a!=="" || b!=="" || c!=="" || d!=="" || f!=="" || num!=""){
        let Password = Form.pass.value;
let Email = Form.email.value;
let Weight = Form.number.value;
let Name = Form.number2.value;
let detail = new customerdet(Password,Email,Weight,Name)
console.log(detail);
arr.push(detail);
localStorage.setItem("Details",JSON.stringify(arr));
window.location.href="/hard-ear-2917/Login.html"
// window.location.reload();
    }
    
  

    }