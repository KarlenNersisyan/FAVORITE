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
//-----------Slider-----

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
setInterval(() => {
  plusSlides(1);
}, 3500);

function currentSlide(n) {
  showSlides((slideIndex = n));
}
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");
let img5 = document.querySelector("#img5");
let img6 = document.querySelector("#img6");
img1.addEventListener("click", () => {
  currentSlide(1);
});
img2.addEventListener("click", () => {
  currentSlide(2);
});
img3.addEventListener("click", () => {
  currentSlide(3);
});
img4.addEventListener("click", () => {
  currentSlide(4);
});
img5.addEventListener("click", () => {
  currentSlide(5);
});
img6.addEventListener("click", () => {
  currentSlide(6);
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

let minus = document.querySelector("#minus-Slides");
let plus = document.querySelector("#plus-Slides");

minus.addEventListener("click", () => {
  plusSlides(-1);
});
plus.addEventListener("click", () => {
  plusSlides(1);
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
