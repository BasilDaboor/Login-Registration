class User {
    constructor( firstName, lastName, email, password) {
        this.userFirstName = firstName;
        this.userLastName = lastName;
        this.userEmail = email;
        this.userPassword = password;
    }
}



let registerBtn = document.getElementById("registerBtn")
let loginPageBtn = document.getElementById("loginPageBtn")
let registerForm = document.getElementById("registerForm")
let message = document.getElementById("message")


loginPageBtn.addEventListener("click",function(){
window.location.href="loginPage.html"
})
registerForm.addEventListener("submit", function (event) {

    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;


    event.preventDefault(); 
    console.log("Register button clicked!");
    if (firstName.length > 2 && lastName.length > 2)
    {   
        if(!(password===confirmPassword))
            message.textContent ="password doesn't match"
        else{
           createUser(firstName,lastName,email,password);
            
        }
    }else {
        console.log(firstName);
        
        message.textContent = "the name should be more than 2 char"
    }
    

   

 } );

function createUser ( firstName, lastName, email, password){
let newUser = new User( firstName, lastName, email, password)

localStorage.setItem("userData",JSON.stringify(newUser))
}

 