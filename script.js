const firstImg = document.getElementById("first-img")
const lastImg = document.getElementById("last-img")
const emailImg = document.getElementById("email-img")
const passwordImg = document.getElementById("password-img")
let firstLabel = document.querySelector("div.first > p")
let lastLabel = document.querySelector(".last > p")
let emailLabel = document.querySelector(".email > p")
let passwordLabel = document.querySelector(".password > p")
const formButton = document.getElementById("button")
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
function check() {
    firstNameCheck()
    lastNameCheck()
    emailCheck()
    passwordCheck()
}

function firstNameCheck() {
    if(document.getElementById("first-name").value == "") {
        firstImg.style.display="unset"
        firstLabel.textContent="First Name can't be empty"
        document.getElementById("first-name").style.borderColor = "hsl(0, 100%, 74%)"
        return false
    }
    else {
        return true
    }
}
function lastNameCheck() {
    if(document.getElementById("last-name").value == "") {
        lastImg.style.display="unset"
        lastLabel.textContent="First Name can't be empty"
        document.getElementById("last-name").style.borderColor = "hsl(0, 100%, 74%)"
        return false
    }
    else {
        return true
    }
}
function emailCheck() {
    if(pattern.test(document.getElementById("email").value)) {
        return true
    }
    else {
        emailLabel.textContent = "Not a valid email"
        emailImg.style.display = "unset"
        document.getElementById("email").style.borderColor = "hsl(0, 100%, 74%)"
        return false
    }
}

function passwordCheck() {
    if(document.getElementById("password").value == "") {
        passwordImg.style.display="unset"
        passwordLabel.textContent="Password can't be empty"
        document.getElementById("password").style.borderColor = "hsl(0, 100%, 74%)"
        return false
    }
    else {
        return true
    }
}
