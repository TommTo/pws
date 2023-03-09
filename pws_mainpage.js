//For the responsive website slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Voor de HTML + CSS slideshow
let intro_slideIndex = 1;
showDivs(intro_slideIndex);

function plusDivs(n) {
  showDivs(intro_slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("intro_slides");
  if (n > x.length) {intro_slideIndex = 1}
  if (n < 1) {intro_slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[intro_slideIndex-1].style.display = "block";
}