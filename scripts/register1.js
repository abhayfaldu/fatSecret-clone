function section(){
    return `<div id="form1">
    <label for="">Gender:</label> 
     <span>
         <input type="radio" id="select" required>
         <label id="gender">Female</label>
  
         <input type="radio" id="select1" required>
         <label id="gender">Male</label>
     </span>
   <br>
    


  <label for="">Current Weight:</label> 
   <span>
     <input type="text" id="number" required>
     <label >kg</label>
     (Switch to lb)
   </span>
     <br>
    <label for="">Height:</label>  
<span>
 <input type="text" id="numb" required>
 <label >cm</label>
 (Switch to inches)
</span>
<br>

<label for="DOB">Date Of Birth:</label>

<select name="Month" id="month">
 <option value="">Month</option>
 <option value="January">Jan</option>
 <option value="feburary">feb</option>
</select>


<select name="Date" id="date" >
 <option value="">Date</option>
 <option value="1">1</option>
 <option value="2">2</option>
</select>


<select name="Year" id="year" >
 <option value="">Year</option>
 <option value="1980">1980</option>
 <option value="1982">1982</option>
</select><br>


<label for=""> Activity Level:</label>
<span>
 <input type="radio" id="selec" required>
 <label id="gender">Sedentery</label>

 <input type="radio" id="selec1" required>
 <label id="gender">Low Active</label>
 
 <input type="radio" id="selec2" required>
 <label id="gender">Active</label>

 <input type="radio" id="selec3" required>
 <label id="gender">Very Active</label>
</span>
     <br>

 </div>
 

<div>
 <span>
     * What Activity Level should I choose?
     <button onclick="Submit12()"><img src="https://a.ftscrt.com/static/images/registration/popover.png" alt=""></button>
     <div id="myDIV">.</div>
 </span>


</div>
 
<h2>My Goals</h2>
<div id="form2">
 Diet Goal:
 <span>
  <select name="diet" id="Diet" >
     <option value="">Weight Gain</option>
     <option value="">Slow Weight Gain</option>
     <option value="">Maintaine My Weight Gain</option>
     <option value="">Slow Weight Loss</option>
     <option value="">Weight Loss</option>
  </select>
 </span>
 <br>

 Goal weight:
 <span>
     <input type="number" id="Number" required>
     <label for="">kg</label>
 </span>
 
</div>

<h2>FatSecret Account</h2>
<div id="form3">
 Member Name:
 <span>
     <input type="text" id="number2" required>
 </span>
<br>

 Password:
 <span>
     <input type="password" id="pass" required>
 </span>  
 <br>

 Email Address:
 <span>
     <input type="text" id="email" name="email" required>
 </span>
<br>

 <div id="condition">
     By clicking 'Next', you agree to the FatSecret
     <span>
         <a href="/hard-ear-2917/terms.html">Terms And conditions</a>
     </span>
     and
     <span>
         <a href="/hard-ear-2917/privacy.html">Privacy Policy</a>
     </span>
 </div>

 <button id="can"><a href="/hard-ear-2917/index.html">Cancel</a></button>
 <button onclick="Submit(event)" id="nex"><a href="#">Next</a></button>
</div>`;
}

section ();

export default section();