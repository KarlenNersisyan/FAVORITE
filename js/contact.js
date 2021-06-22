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
