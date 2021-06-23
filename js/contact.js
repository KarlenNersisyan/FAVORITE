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

// Validation Start
let button = document.querySelector(".button");
button.addEventListener("click", send);
let nameError = document.querySelector("#name");
let nameErrorInput = document.querySelector("#inp1");
let surnameError = document.querySelector("#surname");
let surnameErrorInput = document.querySelector("#inp2");
let phoneError = document.querySelector("#phone");
let phoneErrorInput = document.querySelector("#inp3");
let emailError = document.querySelector("#email");
let emailErrorInput = document.querySelector("#inp4");
let passwordError = document.querySelector("#password");
let passwordErrorInput = document.querySelector("#inp5");

function send(e) {
  e.preventDefault();
  let bool = true;

  let name = inp1.value;
  let surName = inp2.value;
  let phone = inp3.value;
  let email = inp4.value;
  let password = inp5.value;
  if (!isNameSurname(name)) {
    bool = false;
    nameErrorInput.style.backgroundColor = "red";
    nameError.style.color = "red";
  } else {
    nameError.style.color = "green";
    nameErrorInput.style.backgroundColor = "green";
  }
  if (!isNameSurname(surName)) {
    bool = false;
    surnameErrorInput.style.backgroundColor = "red";
    surnameError.style.color = "red";
  } else {
    surnameError.style.color = "green";
    surnameErrorInput.style.backgroundColor = "green";
  }
  if (!isPhone(phone)) {
    bool = false;
    phoneErrorInput.style.backgroundColor = "red";
    phoneError.style.color = "red";
  } else {
    phoneError.style.color = "green";
    phoneErrorInput.style.backgroundColor = "green";
  }
  if (!isEmail(email)) {
    bool = false;
    emailErrorInput.style.backgroundColor = "red";
    emailError.style.color = "red";
  } else {
    emailError.style.color = "green";
    emailErrorInput.style.backgroundColor = "green";
  }
  if (!isPassword(password)) {
    bool = false;
    passwordErrorInput.style.backgroundColor = "red";
    passwordError.style.color = "red";
  } else {
    passwordError.style.color = "green";
    passwordErrorInput.style.backgroundColor = "green";
  }
  if (bool) {
    localStorage.user = JSON.stringify({
      name: name,
      surname: surName,
      phone: phone,
      email: email,
    });
    messageOk.style.display = "block";
  } else {
    messageError.style.display = "block";
  }
}
// Name-Surname
function isNameSurname(nameSurname) {
  let regex = /^[a-zA-Z ]{2,30}$/;
  return regex.test(nameSurname);
}
//Phone
function isPhone(phone) {
  let regex =
    /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;
  return regex.test(phone);
}
// Email
function isEmail(email) {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}
// Password
function isPassword(password) {
  let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return regex.test(password);
}
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
