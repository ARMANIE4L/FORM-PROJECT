document.addEventListener("DOMContentLoaded", function (event) {

    let passwordErrorMessage = document.querySelector("#passwordErrorMessage")
    let signupHeading = document.querySelector('#signupHeading')

    function checkPasswords() {
        let password = document.querySelector("#password").value
        let confirmPw = document.querySelector("#confirmPw").value
        if (password != confirmPw) {
            passwordErrorMessage.innerHTML = "Password doesn't match"
            passwordErrorMessage.style.color = 'red'
            
        } else {
            passwordErrorMessage.innerHTML = "Password Verified!!"
            passwordErrorMessage.style.color = 'green'
        }
        
    }

    function displayMessage(event) {
        let username = document.querySelector("#usernameInput").value
        let message = document.querySelector("#message")
        let email = document.querySelector("#email").value
        let password = document.querySelector("#password").value
        let confirmPw = document.querySelector("#confirmPw").value

    
        message.innerHTML = 'Ooops! '+ "<br>" + "I can see you clicked the button um... " + username + ". I knew you would click it despite my instructions... so nothing's here actually, this is just a one page project with no backend job yet so i honestly ain't sure where you were actually expecting to land...hahaha." + "<br>" + "Your email is " + email + "<br>" + "Your password is " + password + "<br>" + "Thanks so much for checking out my project. Have a lovely day " + username + "!"
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            displayMessage()
        }
    }

    document.querySelector("#confirmPw").addEventListener("input", function () {
        checkPasswords()
    })

    document.querySelector("#register").addEventListener('click', function (event) {
        // checkPasswords()
        displayMessage()
    })

    document.querySelector("#register").addEventListener("keydown", function (event) {
        handleKeyPress()
    })

// TogglePassword
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

    // function formValidation(event) {
    //     let username = document.querySelector("#usernameInput").value
    //     let message = document.querySelector("#message")
    //     let phoneNumber = document.querySelector("#phone-num").value
    //     let email = document.querySelector("#email").value
    //     let password = document.querySelector("#password").value
    //     let confirmPw = document.querySelector("#confirmPw").value

    //     if (username === "") {
    //        alert("Please enter a username") 
    //     }
    //     if (phoneNumber === "") {
    //         alert("Please enter a phone number")
    //     }
    //     if (email === "") {
    //         alert("Please enter an email address")
    //     }
    //     if (password === '' || confirmPw === '') {
    //         alert("Please enter a password")
    //     }
    // }


    // load login page dynamcally
    let loginLink = document.querySelector("#loginLink");
    let contentContainer = document.querySelector("#contentContainer");
    let signupLink = document.querySelector(".signupLink")

    loginLink.addEventListener("click", function (event) {
        event.preventDefault()
        fetch("login-index.html")
        .then(function (response) {
            if (response.status === 200) {
                return response.text()
            } else {
                throw new Error ('Error loading login.html')
            }
        })
        .then(function (data) {
            contentContainer.innerHTML = data;
        })

        .catch (function (error) {
            console.error();
        })
    })

    //go back to signup

    signupLink.addEventListener("click", function (event) {
        event.preventDefault()
        fetch("index.html")
        .then(function (response) {
            if (response.status === 200) {
                return response.text()
            } else {
                throw new Error ('Error loading signup.html')
            }
        })
        .then(function (data) {
            contentContainer.innerHTML = data;
        })

        .catch (function (error) {
            console.error();
        })
    })


})
