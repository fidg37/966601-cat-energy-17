var menu = document.querySelector(".main-navigation");
var button = menu.querySelector(".main-navigation__toggle");
var form = document.querySelector(".program__form");
var inputs = form.querySelectorAll(".program__input-js");
var submitButton = form.querySelector(".program__button");

menu.classList.remove("main-navigation--no-js");

button.addEventListener ("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("main-navigation--closed");
});

submitButton.addEventListener("click", function () {
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      inputs[i].classList.add("program__error")
    }
  }
});
