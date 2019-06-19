// $(document).ready(function(){
//     $(".fancybox").fancybox({
//           openEffect: "none",
//           closeEffect: "none"
//       });
      
//       $(".zoom").hover(function(){
          
//           $(this).addClass('transition');
//       }, function(){
          
//           $(this).removeClass('transition');
//       });
//   });



function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  



var images = [
    "/media/flowers1.jpg", "/media/glass.jpg", "/media/vizcarra.jpg", "/media/macanitas.jpg"
];

var i = 0;
var img = document.getElementById('macanitas');

function changeImg() {
    img.src = images[i];

    if(i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    console.log(i);
}

setInterval(changeImg, 5000);

function stopChg() {
    // make this do a pause on an image when clicked. 
    // when released it will allow the images to keep changing at each interval.
}


