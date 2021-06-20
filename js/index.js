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
