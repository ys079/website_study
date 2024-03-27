var slides = document.querySelectorAll("#slides>img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current = 0;

showSlides(current);
prev.onclick = prevSlides;
next.onclick = nextSlides;

function showSlides(n){
  for (var i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
    slides[n].style.display = "block";
  }
}

function prevSlides(){
  if(current>0) current-= 1;
  else current = slides.length - 1;
    showSlides(current);
}

function nextSlides(){
  if(current < slides.length - 1) current+= 1;
  else current = 0;
    showSlides(current);
}