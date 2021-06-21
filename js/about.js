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
