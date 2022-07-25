
    let arr = JSON.parse(localStorage.getItem("user"))||[];
    function Submit(event){

        event.preventDefault();

        let Value = document.getElementById("email").value;
        if(Value == ""){
            alert("Email-id is Mandetory");
        }else{
            arr.push(Value);
            localStorage.setItem("user", JSON.stringify(arr));
            window.location.href="register.html";
        }
       
    }
    console.log(arr);
