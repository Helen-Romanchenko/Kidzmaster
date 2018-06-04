var register = document.querySelector(".register");
var login = document.querySelector(".login");

var regPopup = document.querySelector(".modal-registration");
var loginPopup = document.querySelector(".modal-login");
var overlay = document.querySelector(".modal-overlay");

var regClose = document.querySelector(".modal-registration .modal-close");
var loginClose = document.querySelector(".modal-login .modal-close");

var regForm = regPopup.querySelector("form");
var loginForm = loginPopup.querySelector("form");


var regName = regPopup.querySelector("[name=login]");
var regEmail = regPopup.querySelector("[name=email]");
var regPassword = regPopup.querySelector("[name=password]");
var regPasswordRetype = regPopup.querySelector("[name=password-retype]");

var loginEmail = loginPopup.querySelector("[name=email]");
var loginPassword = loginPopup.querySelector("[name=password]");

var storage = localStorage.getItem("loginEmail");


register.addEventListener("click", function(event){
	event.preventDefault();
	regPopup.classList.add("modal-display");
	overlay.classList.add("modal-overlay-display");
	regName.focus();
});

regForm.addEventListener("submit", function(event){
	if(!regName.value || !regEmail.value || !regPassword.value || !regPasswordRetype.value)	{
		event.preventDefault();
		console.log("Fill in data");
		regPopup.classList.add("modal-error-data");
	} 
});

regClose.addEventListener("click", function(event){
	event.preventDefault();
	regPopup.classList.remove("modal-display");
	if (regPopup.classList.contains("modal-error-data")) {
		regPopup.classList.remove("modal-error-data");
	}
	overlay.classList.remove("modal-overlay-display");
});

window.addEventListener("keydown", function(event){
	if (event.keyCode === 27) {
		if (regPopup.classList.contains("modal-display")) {
			regPopup.classList.remove("modal-display");
		}
		if (overlay.classList.contains("modal-overlay-display")) {
			overlay.classList.remove("modal-overlay-display");
		}
	}
});

login.addEventListener("click", function(event){
	event.preventDefault();
	loginPopup.classList.add("modal-display");
	overlay.classList.add("modal-overlay-display");
	if (storage) {
		loginEmail.value = storage;
		loginPassword.focus();
	} else {
		loginEmail.focus();
	}
});

loginForm.addEventListener("submit", function(event) {
	if (!loginEmail.value || !loginPassword.value) {
		event.preventDefault();
		console.log("Fill in data");
		loginPopup.classList.add("modal-error-data");
	} else {
		localStorage.setItem("loginEmail", loginEmail.value);
	}
});

loginClose.addEventListener("click", function(event) {
	event.preventDefault();
	loginPopup.classList.remove("modal-display");
	overlay.classList.remove("modal-overlay-display");
});

window.addEventListener("keydown", function(event){
	if (event.keyCode === 27) {
		if (loginPopup.classList.contains("modal-display")) {
			loginPopup.classList.remove("modal-display");
		}
		if (overlay.classList.contains("modal-overlay-display")) {
			overlay.classList.remove("modal-overlay-display");
		}
	}
});

overlay.addEventListener("click", function(event) {
	event.preventDefault();
	if (regPopup.classList.contains("modal-display")) {
		regPopup.classList.remove("modal-display");
		overlay.classList.remove("modal-overlay-display");
	}
	if (loginPopup.classList.contains("modal-display")) {
		loginPopup.classList.remove("modal-display");
		overlay.classList.remove("modal-overlay-display");
	}
});













