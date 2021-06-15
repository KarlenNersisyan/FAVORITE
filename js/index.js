function clickMenu() {
  document.getElementById("myMenuItem").classList.toggle("show");
}
function clickMenuMobile() {
  let x = document.getElementById("myMenu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}
