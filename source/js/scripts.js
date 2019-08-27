var menu = document.querySelector(".main-navigation");
var button = menu.querySelector(".main-navigation__toggle");
var slider = document.querySelector(".slider");
var range = slider.querySelector(".range");
var slide = slider.querySelector(".slider__item");
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
      slideFat.style.width = slideWidth + "px";
      slideSlim.style.width = slideWidth - slideWidth + "px";
    } else {
      range.value = 100;
      slideFat.style.width = slideWidth - slideWidth + "px";
      slideSlim.style.width = slideWidth + "px";
    };
  } else if (rangeValue < 40) {
      range.value = 0;
      slideFat.style.width = slideWidth + slideWidth + "px";
      slideSlim.style.width = slideWidth - slideWidth + "px";
    } else if (rangeValue > 60) {
      range.value = 100;
      slideFat.style.width = slideWidth - slideWidth + "px";
      slideSlim.style.width = slideWidth + slideWidth + "px";
    } else {
      range.value = 50;
      slideFat.style.width = slideWidth + "px";
      slideSlim.style.width = slideWidth + "px";
  };
});

range.oninput = function () {
  var rangeValue = range.value;
  if (screenWidth < 768) {
    var slideFatChange = (100 - rangeValue) * (slideWidth / 100);
    var slideSlimChange = rangeValue * (slideWidth / 100);
  } else {
    var slideFatChange = (100 - rangeValue) * (slideWidth * 2 / 100);
    var slideSlimChange = rangeValue * (slideWidth * 2 / 100);
  };

  slideFat.style.width = slideFatChange + "px";
  slideSlim.style.width = slideSlimChange + "px";
};
