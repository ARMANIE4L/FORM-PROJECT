document.addEventListener("DOMContentLoaded", function (event) {


    function displayMessage(event) {
        let username = document.querySelector("#usernameInput").value
        let password = document.querySelector("#password").value
        let message = document.querySelector("#message")
    
        message.innerHTML = 'Ooops! '+ "<br>" + "I can see you clicked the button um... " + username + ". I knew you would click it despite my instructions... so nothing's here actually, this is just a one page project with no backend job yet so i honestly ain't sure where you were actually expecting to land...hahaha." + "<br>" +  "Thanks so much for checking out my project. Have a lovely day " + username + "!"
    }

    document.querySelector("#register").addEventListener('click', function (event) {
        displayMessage()
    })


    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            displayMessage()
        }
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


signupLink.addEventListener("click", function (event) {
    event.preventDefault()
    fetch("index.html")
    .then(function (response) {
        if (response.status === 200) {
            return response.text()
        } else {
            throw  new Error ('Error loading signup.html')
        }
    })
    .then(function (data) {
        contentContainer.innerHTML = data
    })
    .catch (function (error) {
        console.error();
    })
})

//go back to login

loginLink.addEventListener("click", function (event) {
    event.preventDefault()
    fetch("login-index.html")
    .then(function (response) {
        if (response.status === 200) {
            return response.text()
        } else {
            throw  new Error ('Error loading login.html')
        }
    })
    .then(function (data) {
        contentContainer.innerHTML = data
    })
    .catch (function (error) {
        console.error();
    })
})
})
