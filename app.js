// Magic.css effects
const vanish = document.querySelector('.vanish');
vanish.classList.add('magictime', 'vanishIn');

// add a function to this to make it happen on scrolling down
const slideRight = document.querySelector('.slideRight');
slideRight.classList.add('magictime', 'tinLeftIn');

const slideUpReturn = document.querySelector('.slideUpReturn');
slideUpReturn.classList.add('magictime', 'slideUpReturn');

const twistIn = document.querySelector('.twistIn');
twistIn.classList.add('magictime', 'twisterInUp');


//Get the button:
mybutton = document.getElementById(".myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// function debounce(func, wait = 20, immediate = true) {
//     var timeout;
//     return function() {
//       var context = this, args = arguments;
//       var later = function() {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//       var callNow = immediate && !timeout;
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//       if (callNow) func.apply(context, args);
//     };
//   }

//   const sliderImages = document.querySelectorAll('.slide-in');
  
//   function checkSlide(e) {
//     sliderImages.forEach(sliderImage => {
//       // to specify the slide in at half of the image showing on screen
//       const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
//       const imageBottom = sliderImage.offsetTop + sliderImage.height;
//       const isHalfShown = slideInAt > sliderImage.offsetTop;
//       const isNotScrolledPast = window.scrollY < imageBottom;
      
//       if (isHalfShown && isNotScrolledPast) {
//         sliderImage.classList.add('active');
//       } else {
//         sliderImage.classList.remove('active');
//       }
//       console.log(isHalfShown)
//     })
//   }

//   window.addEventListener('scroll', debounce(checkSlide));

