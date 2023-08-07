/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function NavBarMenu() {
    var x = document.getElementById("navBar");
    if (x.className === "TopNav") {
      /*add "responsive" to TopNav class name*/
      x.className += " responsive";
    } 
    else {
      x.className = "TopNav";
    }
}


/*--------------------------------SlideShow clickable-------------------------------------*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
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

/*-------------------------------------Auto SlideShow--------------------------------------*/
let slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
  let i;
  let slides = document.getElementsByClassName("Autoslides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexAuto++;
  if (slideIndexAuto > slides.length) {slideIndexAuto = 1}    
  slides[slideIndexAuto-1].style.display = "block";
  setTimeout(showSlidesAuto, 5000); // Change image every 5 seconds
}

/*slideshow and auto slideshow: https://www.w3schools.com/howto/howto_js_slideshow.asp*/
/*Navigation Bar: https://www.w3schools.com/css/css_navbar.asp */