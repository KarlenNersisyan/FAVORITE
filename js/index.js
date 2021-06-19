const burgerMenu = document.querySelector(".menu-mobile");
const iconItem = document.querySelector("#burgerMenu");

iconItem.addEventListener("click", () => {
  burgerMenu.classList.toggle("show");
});

// search
function doSearch(id_form, id_camp) {
  const search_string = $(id_camp).value;
  search_string = trim(search_string);

  const search_form = $(id_form);
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
