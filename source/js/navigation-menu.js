var menu = document.querySelector(".main-navigation");
var button = menu.querySelector(".main-navigation__toggle");

menu.classList.remove("main-navigation--no-js");

button.addEventListener ("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("main-navigation--closed");
})