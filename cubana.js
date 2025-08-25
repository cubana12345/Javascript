// document.addEventListener("DOMContentLoaded", function () {
//   const loginForm = document.getElementById("loginForm");
//   const errorMessage = document.getElementById("errorMessage");

//   loginForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const username = document.getElementById("username").value.trim();
//     const password = document.getElementById("password").value.trim();

//     const validUsername = "admin";
//     const validPassword = "password123";

//     if (username === validUsername && password === validPassword) {
//       alert("Login successful!");
//       errorMessage.textContent = "";
//     } else {
//       errorMessage.textContent = "Invalid username or password.";
//     }
//   });
// });



let containeropueh = document.getElementById("container");
containeropueh.style.justifyContent = "center";
containeropueh.style.alignItems = "center";
containeropueh.style.height = "100vh";
containeropueh.style.display = "flex";
containeropueh.style.background = "lightblue"

let loginopueh = document.getElementById("login")
loginopueh.style.padding = "55px 55px 175px 45px"
loginopueh.style.background = "rgba(0,0,0,0.4)"
loginopueh.style.borderRadius = "8px"

let btnfuckyou = document.getElementById("btn")
btnfuckyou.style.background ="lightblue"
btnfuckyou.style.padding = "6px 15px"
btnfuckyou.style.borderRadius ="6px"
btnfuckyou.style.border ="none"

let headooo = document.getElementById("head")
headooo.style.marginTop = "-25px"
headooo.style.marginLeft = "70px"
