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

let button = document.querySelector(".button");

button.addEventListener("click", send);

function send() {
  let bool = true;

  let x = inp1.value;
  let y = inp2.value;
  if (!validate(x)) {
    bool = false;
  }
  if (!validate(y)) {
    bool = false;
  }
  if (bool) {
    localStorage.user = JSON.stringify({ name: x, surname: y });
  }
}

function validate(word) {
  let regex = /^[a-zA-Z ]{2,30}$/;
  return regex.test(word);
}
//  function isEmail(email) {
//   let regex =
//   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// return regex.test(String(email).toLowerCase());
// }
