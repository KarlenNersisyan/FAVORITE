let burgerMenu = document.querySelector(".menu-mobile");
let iconItem = document.querySelector("#burgerMenu");

iconItem.addEventListener("click", () => {
  burgerMenu.classList.toggle("show");
});

// search
function doSearch(id_form, id_camp) {
  let search_string = $(id_camp).value;
  search_string = trim(search_string);

  let search_form = $(id_form);
  if (search_string.length < 3) {
    alert("Minimum 3 characters!");
    return false;
  } else {
    search_string = search_string.replace(/-/g, "_");
    search_string = search_string.replace(/[^A-Za-z0-9_.]/g, "-");
    search_form.action =
      "https://karlennersisyan.github.io/DOM_Project/" + search_string;
    search_form.submit();
    return true;
  }
}

function trim(str, chars) {
  return myTrim(myTrimFunc(str, chars), chars);
}

function myTrim(str, chars) {
  chars = chars || "\\s";
  return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

function myTrimFunc(str, chars) {
  chars = chars || "\\s";
  return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

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
