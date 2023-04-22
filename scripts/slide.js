let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let i;
let clicked = false;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  clicked = true;
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  if (n > slides.length) {slideIndex = 1; console.log("Index set to 1!")}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
	console.log("set: " + slides[i] + " to none");
  }
  slides[slideIndex-1].style.display = "block";
}



function autoSlides() {

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(check, 5000); // Change image every 2 seconds
}

function check() {
	if(clicked == true) {
		clicked = false;
		setTimeout(check, 8000); //reruns check if there has been a click
	} else {
		setTimeout(autoSlides);
	}
}

autoSlides();