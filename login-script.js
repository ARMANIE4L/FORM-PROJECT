document.addEventListener("DOMContentLoaded", function (event) {


    function displayMessage(event) {
        let username = document.querySelector("#usernameInput").value
        let password = document.querySelector("#password").value
        let message = document.querySelector("#message")
    
        message.innerHTML = 'Ooops! '+ "<br>" + "I can see you clicked the button um... " + username + ". I knew you would click it despite my instructions... so nothing's here actually, this is just a one page project with no backend job yet so i honestly ain't sure where you were actually expecting to land...hahaha." + "<br>" +  "Thanks so much for checking out my project. Have a lovely day " + username + "!"
        message.style.border = '1px solid'
    }

    document.querySelector("#register").addEventListener('click', function (event) {
        let username = document.querySelector("#usernameInput").value
        let password = document.querySelector("#password").value

        let isValid = true

        if (username === "") {
            alert("Please enter a username") 
            isValid = false
        }
        if (password === '') {
             alert("Please enter a password") 
             isValid = false  
        }

        if (!isValid) {
           event.preventDefault() 
           checkAllInputs()
        } else {
            displayMessage(event)
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

    // check password

    let passwordErrorMessage = document.querySelector("#passwordErrorMessage")

    function checkPasswords() {
        let password = document.querySelector("#password").value
        if (password === "") {
            passwordErrorMessage.innerHTML = "Input password"
        } else {
            passwordErrorMessage.innerHTML = ""
        } 
    }

    document.querySelector("#confirmPw").addEventListener("input", function () {
        checkPasswords()
    })
    }

    document.querySelector("#register").addEventListener("keydown", function (event) {
        handleKeyPress()
    })

    function bioText(event) {
        fingText = document.querySelector("#fingText")
        fingText.innerHTML = "Use your biometric authentication to Login"
    }

    document.querySelector("#fingerprint").addEventListener("click", function (event) {
        bioText()
    })
    
// TogglePassword
let passwordInput = document.querySelector("#password");
let togglePassword = document.querySelector('#togglePassword');

togglePassword.addEventListener('click', function (event) {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePassword.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    passwordInput.type = 'password';
    togglePassword.innerHTML = '<i class="fas fa-eye"></i>';
  }
});



// add an underline to active page
signupHeading.classList.toggle('active')

// load signup page dynamcally
let signupLink = document.querySelector("#signupLink")
let loginLink = document.querySelector(".loginLink")
let contentContainer = document.querySelector("#contentContainer")
let loginContainer = document.querySelector("#loginContainer")


signupLink.addEventListener("click", function (event) {
    //Hide the login form
    loginContainer.style.display = "none";

    event.preventDefault()
    window.location.href = "index.html"
    })

    // function checkInputs(event) {
})
