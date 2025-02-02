let loginBtn = document.getElementById("loginPageBtn")
let loginForm = document.getElementById("loginForm")
let message = document.getElementById("message")


loginForm.addEventListener("submit",function (e){

e.preventDefault();
message.textContent=""

let userData =JSON.parse( localStorage.getItem("userData"))
console.log(userData);
if(!userData)
    console.log("You are not a user!");
else{
    let inputEmail = document.getElementById("email").value
    let inputPassword = document.getElementById("password").value
    if(!(userData.userEmail===inputEmail))
        message.textContent="Wrong Email"
    else if(!(userData.userPassword===inputPassword))
        message.textContent="wrong Password"
    else{
        console.log("login");
        
    }
    }
})

let registerBtn = document.getElementById("registerBtn")

registerBtn.addEventListener("click",function(){
    window.location.href="registration.html"
})