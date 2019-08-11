var slider = document.querySelector(".slider");
var range = slider.querySelector(".range");
var slide = slider.querySelector(".slider__item");
var slideFat = slider.querySelector(".slider__item--fat-cat");
var slideSlim = slider.querySelector(".slider__item--slim-cat");
var button = slider.querySelectorAll(".slider__pagination-button")
var screenWidth = document.documentElement.clientWidth;

if (screenWidth < 768) {
  range.value = 0;
} else {
  range.value = 50;
};

var slideChange = function() {
  var rangeValue = range.value;
  if (screenWidth < 768) {
    if (rangeValue < 50) {
      slideFat.classList.add("slider__item--active");
      slideSlim.classList.remove("slider__item--active");
    } else {
      slideSlim.classList.add("slider__item--active");
      slideFat.classList.remove("slider__item--active");
    };
  } else if (rangeValue < 40) {
      slideFat.classList.remove("slider__item--active-slim");
      slideSlim.classList.add("slider__item--active-fat");
    } else if (rangeValue > 60) {
      slideSlim.classList.remove("slider__item--active-fat");
      slideFat.classList.add("slider__item--active-slim");
    } else {
      slideSlim.classList.remove("slider__item--active-fat");
      slideFat.classList.remove("slider__item--active-slim");
  };
};

range.addEventListener("click", function() {
  var rangeValue = range.value;
  if (screenWidth < 768) {
    if (rangeValue < 50) {
      range.value = 0;
    } else {
      range.value = 100;
    };
  } else if (rangeValue < 40) {
      range.value = 0;
    } else if (rangeValue > 60) {
      range.value = 100;
    } else {
      range.value = 50;
  };
});
