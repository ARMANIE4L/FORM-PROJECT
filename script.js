document.addEventListener("DOMContentLoaded", function (event) {

    function displayMessage(event) {
        let username = document.querySelector("#usernameInput").value
        let message = document.querySelector("#message")
        let email = document.querySelector("#email").value
        let password = document.querySelector("#password").value
        let confirmPw = document.querySelector("#confirmPw").value

    
        message.innerHTML = 'Ooops! '+ "<br>" + "I can see you clicked the button um... " + username + ". I knew you would click it despite my instructions... so nothing's here actually, this is just a one page project with no backend job yet so i honestly ain't sure where you were actually expecting to land...hahaha." + "<br>" + "Your email is " + email + "<br>" + "Your password is " + password + "<br>" + "Thanks so much for checking out my project. Have a lovely day " + username + "!"
        message.style.border = "1px solid"
    }

    document.querySelector("#register").addEventListener('click', function (event) {
        let username = document.querySelector("#usernameInput").value
        let phoneNumber = document.querySelector("#phone-num").value
        let email = document.querySelector("#email").value
        let password = document.querySelector("#password").value
        let confirmPw = document.querySelector("#confirmPw").value
        let agreement = document.querySelector("#agreement").checked

        let isValid = true

         if (username === "") {
            isValid = false
         }
         if (phoneNumber === "") { 
             isValid = false
         }
         if (email === "") { 
             isValid = false
         }
         if (password === '' || confirmPw === '') { 
             isValid = false  
         }
         if (password != confirmPw) {
            isValid = false
         }
         if (!agreement) {  ``
            isValid = false
         }
         
        if (!isValid) {
            alert("Fill in the required fields")
            event.preventDefault()
            checkAllInputs()
        } else {
          displayMessage()
        }
        
    })

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            displayMessage()
        }
    }

    function checkAllInputs() {
        
    //check username
    let userErrorMessage = document.querySelector("#userErrorMessage")
    
    function checkUsername() {
        let username = document.querySelector("#usernameInput").value
        if (username === "") {
            userErrorMessage.innerHTML = "Input a username"
            userErrorMessage.style.color = 'red'
        } else {
            userErrorMessage.innerHTML = ""
        }
    }

    document.querySelector("#usernameInput").addEventListener("input", function () {
        checkUsername()
    })

    // check phone number
    let phoneErrorMessage = document.querySelector("#phoneErrorMessage")

    function checkPhoneNumber() {
        let phoneNumber = document.querySelector("#phone-num").value
        if (phoneNumber.length < 7) {
            phoneErrorMessage.innerHTML = "Input a valid phone number"
            phoneErrorMessage.style.color = "red"
        } else {
            phoneErrorMessage.innerHTML = ""
        }
    }

    document.querySelector("#phone-num").addEventListener("input", function () {
        checkPhoneNumber()
    })

    // check email

    let emailErrorMessage = document.querySelector("#emailErrorMessage") 

    function checkEmail() { 

     let email = document.querySelector("#email").value
     if (email === "") {
        emailErrorMessage.innerHTML = "Input your email address"
        emailErrorMessage.style.color = "red"
     } else {
        emailErrorMessage.innerHTML = ""
     }   
    }

    document.querySelector("#email").addEventListener("input", function () {
        checkEmail()
    })


    // check password

    let passwordErrorMessage = document.querySelector("#passwordErrorMessage")
    let signupHeading = document.querySelector('#signupHeading')

    function checkPasswords() {
        let password = document.querySelector("#password").value
        let confirmPw = document.querySelector("#confirmPw").value
        if (password != confirmPw) {
            passwordErrorMessage.innerHTML = "Password doesn't match"
            passwordErrorMessage.style.color = 'red'
            
        } else {
            passwordErrorMessage.innerHTML = "Password Verified!"
            passwordErrorMessage.style.color = 'green'
        } 
    }

    document.querySelector("#confirmPw").addEventListener("input", function () {
        checkPasswords()
    })

    // check terms and conditions
    let termsErrorMessage = document.querySelector("#termsErrorMessage")

    function chectTerms() {
        let agreement = document.querySelector("#agreement").checked
        if (!agreement) {
            termsErrorMessage.innerHTML = "Please accept our terms and conditions"
        } else {
            termsErrorMessage.innerHTML = ""
        }
    }

    document.querySelector("#agreement").addEventListener("click", function () {
        chectTerms()
    })
    
 }


    document.querySelector("#register").addEventListener("keydown", function (event) {
        handleKeyPress(event)
    })


// TogglePassword icon
let passwordInput = document.querySelector("#password");
let confirmPw = document.querySelector("#confirmPw");
let togglePassword = document.querySelector('#togglePassword');

togglePassword.addEventListener('click', function (event) {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePassword.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    passwordInput.type = 'password';
    togglePassword.innerHTML = '<i class="fas fa-eye"></i>';
  }
  
  if (confirmPw.type === 'password') {
    confirmPw.type = 'text';
    togglePassword.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    confirmPw.type = 'password';
    togglePassword.innerHTML = '<i class="fas fa-eye"></i>';
  }

});

// add an underline to active page
    signupHeading.classList.toggle('active')

// load login page dynamically


let loginLink = document.querySelector("#loginLink");
let contentContainer = document.querySelector("#contentContainer");
let signupLink = document.querySelector("#signupHeading");
let signupContainer = document.querySelector("#signupContainer")

loginLink.addEventListener("click", function (event) {
  event.preventDefault();
  //Hide the signup form
  signupContainer.style.display = "none";
  //Display the login form, sane as doing it in the html
  window.location.href = "login-index.html"
});
})
