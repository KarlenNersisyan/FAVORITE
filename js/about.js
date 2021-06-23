let burgerMenu = document.querySelector(".menu-mobile");
let iconItem = document.querySelector("#burgerMenu");

iconItem.addEventListener("click", () => {
  burgerMenu.classList.toggle("show");
});

// search
let search = document.querySelector(".search");

search.addEventListener("input", (e) => {
  console.log(e);
  let newUrl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    `?key=${e.target.value}`;
  window.history.pushState({ path: newUrl }, "", newUrl);
});

let modal = document.getElementById("myModal");
let modalImg = document.querySelector("#img");
let images = document.querySelector(".background-image");
let captionText = document.getElementById("caption");
let span = document.querySelector(".close");

images.addEventListener("click", (evt) => {
  if (evt.target.tagName === "IMG") {
    modal.style.display = "block";
    modalImg.src = evt.target.src;
    captionText.innerHTML = evt.target.alt;
  }
});

span.addEventListener("click", (e) => {
  modal.style.display = "none";
});

// Message
let xError = document.querySelector(".closeError");
let messageError = document.querySelector("#messageError");
let xOk = document.querySelector(".closeOk");
let messageOk = document.querySelector("#messageOk");
let loginButton = document.querySelector(".closeLogin");
let loginBackground = document.querySelector("#login-background");

xError.addEventListener("click", (e) => {
  messageError.style.display = "none";
});
xOk.addEventListener("click", (e) => {
  messageOk.style.display = "none";
});
loginButton.addEventListener("click", (e) => {
  loginBackground.style.display = "none";
});
// Login Message
let xLoginError = document.querySelector(".closeLoginError");
let messageLoginError = document.querySelector("#messageLoginError");
let xLoginOk = document.querySelector(".closeLoginOk");
let messageLoginOk = document.querySelector("#messageLoginOk");

xLoginError.addEventListener("click", (e) => {
  messageLoginError.style.display = "none";
});
xLoginOk.addEventListener("click", (e) => {
  messageLoginOk.style.display = "none";
});

// Login Validation
let buttonLogin = document.querySelector(".buttonLogin");
buttonLogin.addEventListener("click", sendLogin);

let usernameErrorInput = document.querySelector("#inp7");
let passwordLoginErrorInput = document.querySelector("#inp8");

function sendLogin(event) {
  event.preventDefault();
  let boolLogin = true;
  let username = inp7.value;
  let passwordLogin = inp8.value;
  if (!isUserName(username)) {
    boolLogin = false;
    usernameErrorInput.style.backgroundColor = "red";
  } else {
    usernameErrorInput.style.backgroundColor = "green";
  }

  if (!isPasswordLogin(passwordLogin)) {
    boolLogin = false;
    passwordLoginErrorInput.style.backgroundColor = "red";
  } else {
    passwordLoginErrorInput.style.backgroundColor = "green";
  }
  if (boolLogin) {
    localStorage.username = JSON.stringify({
      Username: username,
      password: passwordLogin,
    });
    messageLoginOk.style.display = "block";
    loginBackground.style.display = "none"
  } else {
    messageLoginError.style.display = "block";
  }
}

// Username
function isUserName(isUserName) {
  let regex = /^[a-zA-Z ]{2,30}$/;
  return regex.test(isUserName);
}
// PasswordLogin
function isPasswordLogin(passwordLogin) {
  let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return regex.test(passwordLogin);
}
// Login Click
let loginItem = document.querySelector(".login-item");

loginItem.addEventListener("click", (ev) => {
  messageOk.style.display = "none";
  loginBackground.style.display = "block";
});

// Login-SignIn

let loginSignIn = document.querySelector("#login-SignIn");
loginSignIn.addEventListener("click", () => {
  loginBackground.style.display = "block";
});

// Login-SignIn-Mobile
let loginSignInMobile = document.querySelector("#login-SignIn-Mobile");
loginSignInMobile.addEventListener("click", () => {
  loginBackground.style.display = "block";
});
