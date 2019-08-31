var menu = document.querySelector(".main-navigation");
var button = menu.querySelector(".main-navigation__toggle");

var slider = document.querySelector(".slider");
var range = slider.querySelector(".range");
var slideFat = slider.querySelector(".slider__item--fat-cat");
var slideSlim = slider.querySelector(".slider__item--slim-cat");
var screenWidth = document.documentElement.clientWidth;
var slideWidth = slide.offsetWidth;

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

range.addEventListener("click", function() {
  var rangeValue = range.value;
  if (screenWidth < 768) {
    if (rangeValue < 50) {
      range.value = 0;
      slideFat.style.width = 100 + "%";
      slideSlim.style.width = 0 + "%";
    } else {
      range.value = 100;
      slideFat.style.width = 0 + "%";
      slideSlim.style.width = 100 + "%";
    };
  } else if (rangeValue < 40) {
      range.value = 0;
      slideFat.style.width = 100 + "%";
      slideSlim.style.width = 0 + "%";
    } else if (rangeValue > 60) {
      range.value = 100;
      slideFat.style.width = 0 + "%";
      slideSlim.style.width = 100 + "%";
    } else {
      range.value = 50;
      slideFat.style.width = 50 + "%";
      slideSlim.style.width = 50 + "%";
  };
});

var slider = document.querySelector(".slider");
var range = slider.querySelector(".range");
var slideFat = slider.querySelector(".slider__item--fat-cat");
var slideSlim = slider.querySelector(".slider__item--slim-cat");

range.addEventListener("input", function () {
  slideFat.style.width = 100 - Math.floor(range.value) + "%";
  slideSlim.style.width = Math.floor(range.value) + "%";
});
