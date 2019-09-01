var menu = document.querySelector(".main-navigation");
var button = menu.querySelector(".main-navigation__toggle");

var slider = document.querySelector(".slider");
var range = slider.querySelector(".range");
var slideBefore = slider.querySelector(".slider__item--before");
var slideAfter = slider.querySelector(".slider__item--after");
var screenWidth = document.documentElement.clientWidth;
var sliderWrapper = document.querySelector(".example__container-slider")

menu.classList.remove("main-navigation--no-js");

button.addEventListener ("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("main-navigation--closed");
});

if (screenWidth < 768) {
  range.value = 0;
} else {
  range.value = 50;
};

range.addEventListener("input", function () {
  var screenWidth = document.documentElement.clientWidth;

  slideBefore.style.width = 100 - Math.floor(range.value) + "%";

  if (screenWidth >= 1300) {
    sliderWrapper.style.background ='linear-gradient(to right, #f2f2f2 ' + (100 - Math.floor(range.value)) + '%, #eaeaea ' + (100 - Math.floor(range.value)) + '%';
  };
});
