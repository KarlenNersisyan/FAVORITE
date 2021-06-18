const burgerMenu = document.querySelector(".menu-mobile");
const iconItem = document.querySelector("#burgerMenu");

iconItem.addEventListener("click", () => {
  burgerMenu.classList.toggle("hide");
});
