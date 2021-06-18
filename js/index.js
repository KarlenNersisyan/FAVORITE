const burgerMenu = document.getElementById("burgerMenu");

burgerMenu.addEventListener("click", () => {
  document.getElementsByClassName("menu")[0].classList.toggle("responsive");
});
