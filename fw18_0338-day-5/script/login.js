function Submit(event){
    event.preventDefault();
    let btn = document.getElementById("btn")
    let Form = document.getElementById("form");
  
  data={
   Password :Form.pass.value,
  Email: Form.email.value,
  }
  console.log(data);
  let arr = JSON.parse(localStorage.getItem("Details"));
  display(arr);
  flag = false;
  function display(arr){
    for(var i=0; i<arr.length; i++){
        if(data.Password==arr[i].Password && data.Email == arr[i].Email){
           flag = true;
          }
    }
    if(flag == true){
      alert("Login successful!")
      window.location.href="./index.html";
    }else if(flag==false){
      alert("Login failed.")
    }else if(flag==undefined){
      alert("User doesn't exist, Sign Up")
    }
  }
  }