// Magic.css effects
const vanish = document.querySelector('.vanish');
vanish.classList.add('magictime', 'vanishIn');

// add a function to this to make it happen on scrolling down
const slideRight = document.querySelector('.slideRight');
slideRight.classList.add('magictime', 'tinLeftIn');

const twistIn = document.querySelector('.twistIn');
twistIn.classList.add('magictime', 'twisterInUp');

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

