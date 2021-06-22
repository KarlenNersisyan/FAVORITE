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
