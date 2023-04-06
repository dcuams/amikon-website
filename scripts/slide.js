let slideIndex = 0;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function autoSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(autoSlide, 2200); // Change image every 2.2 seconds
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

showSlides(slideIndex);
autoSlide(slideIndex);


