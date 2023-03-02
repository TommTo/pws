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


/*
let intro_slideIndex = 1;
intro_showSlides(intro_slideIndex);

// Next/previous controls
function intro_plusSlides(n) {
  intro_showSlides(intro_slideIndex += n);
}

// Thumbnail image controls
function intro_currentSlide(n) {
  intro_showSlides(intro_slideIndex = n);
}

function intro_showSlides(n) {
  let i;
  let intro_slides = document.getElementsByClassName("intro_slides");
  //let dots = document.getElementsByClassName("dot");
  if (n > intro_slides.length) {intro_slideIndex = 1}
  if (n < 1) {intro_slideIndex = intro_slides.length}
  for (i = 0; i < intro_slides.length; i++) {
    intro_slides[i].style.display = "none";
  }
 //for (i = 0; i < dots.length; i++) {
  //  dots[i].className = dots[i].className.replace(" active", "");
  //}
  intro_slides[intro_slideIndex-1].style.display = "block";
//  dots[slideIndex-1].className += " active";
}/*/
