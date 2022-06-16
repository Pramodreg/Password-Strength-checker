const captcha = document.querySelector(".captcha"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector(".input-area input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-text");

//storing all captcha characters in array
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function getCaptcha(){
  for (let i = 0; i < 6; i++) { //getting 6 random characters from the array
    let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomCharacter}`; //passing 6 random characters inside captcha innerText
  }
}
getCaptcha(); //calling getCaptcha when the page open
//calling getCaptcha & removeContent on the reload btn click
reloadBtn.addEventListener("click", ()=>{
  removeContent();
  getCaptcha();
});

checkBtn.addEventListener("click", e =>{
  e.preventDefault(); //preventing button from it's default behaviour
  statusTxt.style.display = "block";
  //adding space after each character of user entered values because I've added spaces while generating captcha
  let inputVal = inputField.value.split('').join(' ');
  if(inputVal == captcha.innerText){ //if captcha matched
    statusTxt.style.color = "#4db2ec";
    statusTxt.innerText = "Nice! You don't appear to be a robot.";
    setTimeout(()=>{ //calling removeContent & getCaptcha after 4 seconds
      removeContent();
      getCaptcha();
    }, 2000);
  }else{
    statusTxt.style.color = "#ff0000";
    statusTxt.innerText = "Captcha not matched. Please try again!";
  }
});

function removeContent(){
 inputField.value = "";
 captcha.innerText = "";
 statusTxt.style.display = "none";
}


// password strength code start
function getPassword(password){
  let s = 0;
  if(password.length > 6){
    s++;
  }
  if(password.length > 10){
    s++;
  }
  if(/[A-Z]/.test(password)){
    s++;
  }
  if(/[0-9]/.test(password)){
    s++;
  }
  if(/[^A-Za-z0-9]/.test(password)){
    s++;
  }
  return s;
}
document.querySelector(".pw-meter #password").addEventListener("focus",function(){
  document.querySelector(".pw-meter .pw-strength").style.display = "block";
});
document.querySelector(".pw-meter .pw-display-toggle-btn").addEventListener("click",function(){
  let el = document.querySelector(".pw-meter .pw-display-toggle-btn");
  if(el.classList.contains("active")){
    document.querySelector(".pw-meter #password").setAttribute("type","password");
    el.classList.remove("active");
  } else {
    document.querySelector(".pw-meter #password").setAttribute("type","text");
    el.classList.add("active");
  }
});
//  start of the strength checking and feedback code...!

document.querySelector(".pw-meter #password").addEventListener("keyup",function(e){
  let password = e.target.value;
  let strength = getPassword(password);
  let passwordStrengthSpans = document.querySelectorAll(".pw-meter .pw-strength span");
  strength = Math.max(strength,1);
  passwordStrengthSpans[1].style.width = strength*20 + "%";
  if(strength < 2){
    passwordStrengthSpans[0].innerText = "Weak";
    passwordStrengthSpans[0].style.color = "#111";
    passwordStrengthSpans[1].style.background = "#d13636";
  } else if(strength >= 2 && strength <= 4){
    passwordStrengthSpans[0].innerText = "Medium";
    passwordStrengthSpans[0].style.color = "#111";
    passwordStrengthSpans[1].style.background = "#e6da44";
  } else {
    passwordStrengthSpans[0].innerText = "Strong";
    passwordStrengthSpans[0].style.color = "#fff";
    passwordStrengthSpans[1].style.background = "#20a820";
  }
});

// var a = document.getElementById("password");
// var b = document.getElementById("passwords");
// let flag = 1;

// function myfu(){
// if(a.value==""){
//   document.getElementById("spn1").innerHTML = "Please enter password";
//   flag = 0;
// }
// else(a.value.length<5){
//   document.getElementById("spn1").innerHTML = "length must be 5 char";
//   flag = 0;
// }
// else{
//   document.getElementById("spn1").innerHTML = "";
//   flag = 1;
// }
// if(a!=b){
//   document.getElementById("spn2").innerHTML = "password are not similar";
//   flag = 0;
// }

// }



function myfun(){
  let inp1 = document.getElementById("password");
  let inp2 = document.getElementById("passwords");
  let flag = 1;
    if(inp1.value == ""){
        document.getElementById("spn1").innerHTML= "password name is empty";
        flag = 0;
    }else if(inp1.value.length < 5){
        document.getElementById("spn1").innerHTML= "password length must be 5 char";
        flag = 0;
    }else{
        document.getElementById("spn1").innerHTML= "";
        flag = 1;
    }
    if(inp1.value != inp2.value){
        document.getElementById("spn2").innerHTML= "password didn't match";
        flag = 0;
        
    // }else if(inp2.value.length < 5){
    //     document.getElementById("passerror").innerHTML= "password length must be 5 digit";
    //     flag = 0;
    }else{
        document.getElementById("spn2").innerHTML= "";
        flag = 1;
    }
    if(flag==1){
        return true;
    }else{
        return false;
    }
  }

