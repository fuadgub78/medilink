console.log("Welcome to MediLink (Prescripto-style)");

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

document.querySelector('.prev').addEventListener('click', function() {
  plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', function() {
  plusSlides(1);
});

function plusSlides(n) {
  slideIndex += n - 1;
  if (slideIndex < 0) {
    slideIndex = document.getElementsByClassName("slideshow-slide").length - 1;
  }
  showSlides();
}

// Appointment form submission handler (basic)
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Appointment booked successfully!');
  this.reset();
});
