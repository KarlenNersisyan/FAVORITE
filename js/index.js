function myFunction() {
  document.getElementById("myMenu").classList.toggle("show");
}
//------ Search Validation Start ------------
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
  return myTrim1(myTrim2(str, chars), chars);
}

function myTrim1(str, chars) {
  chars = chars || "\\s";
  return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

function myTrim2(str, chars) {
  chars = chars || "\\s";
  return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}
//------ End ------------
