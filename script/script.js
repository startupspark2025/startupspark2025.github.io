document.addEventListener('DOMContentLoaded', () => {
  // Set the date we're counting down to
  const countDownDate = new Date().getTime() + (56 * 24 * 60 * 60 * 1000) + (19 * 60 * 60 * 1000) + (0 * 60 * 1000) + (55 * 1000); // 56 days + 19 hours + 0 minutes + 55 seconds from now

  // Update the count down every 1 second
  const x = setInterval(() => {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');


    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Event Started";
    }
  }, 1000);
});

//   document.addEventListener('DOMContentLoaded', () => {
//     const slider = document.querySelector('.testimonials-slider');
//     const testimonials = document.querySelectorAll('.testimonial');
//     const totalTestimonials = testimonials.length;
//     const slideWidth = testimonials[0].offsetWidth + 20; // Include margin
//     let currentIndex = 0;

//     // Clone all testimonials at the beginning and end of the slider for smooth loop
//     for (let i = 0; i < totalTestimonials; i++) {
//         slider.insertBefore(testimonials[i].cloneNode(true), slider.firstChild);
//         slider.appendChild(testimonials[i].cloneNode(true));
//     }

//     const clonedTestimonials = document.querySelectorAll('.testimonial'); // Select all of them, originals and clones
//     const totalCards = clonedTestimonials.length;

//     // Move to the middle for the loop illusion.
//     currentIndex = totalTestimonials;
//     slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;


//    function moveSlider() {
//          currentIndex++;
//       slider.style.transition = "transform 0.8s ease-in-out"
//     const translateValue = -currentIndex * slideWidth;
//     slider.style.transform = `translateX(${translateValue}px)`;

//        if(currentIndex >= totalCards - totalTestimonials){
//           setTimeout(()=>{
//                slider.style.transition = "none";
//                 currentIndex = totalTestimonials;
//                slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
//               },800)
//            }
//     }


//     setInterval(moveSlider, 15000); // Auto slide every 5 seconds
// });

function showDay(day) {
  const days = document.querySelectorAll('.day-content');
  const tabs = document.querySelectorAll('.tab');

  days.forEach((dayContent, index) => {
    dayContent.style.display = index === day - 1 ? 'block' : 'none';
  });

  tabs.forEach((tab, index) => {
    tab.classList.toggle('active', index === day - 1);
  });
}

// Declare styleElement once at the beginning
let styleElement;

document.addEventListener('DOMContentLoaded', () => {
  const ribbon1 = document.querySelector('.ribbon-1 .scrolling-text');
  const ribbon2 = document.querySelector('.ribbon-2 .scrolling-text');

  const ribbonContent1 = ribbon1.innerHTML;
  const ribbonContent2 = ribbon2.innerHTML;

  // Clone content multiple times to ensure seamless scrolling
  const repeatScroll = (ribbon, content) => {
    ribbon.innerHTML += content;
  };

  // Append enough content for seamless scrolling for both ribbons
  for (let i = 0; i < 5; i++) {
    repeatScroll(ribbon1, ribbonContent1);
    repeatScroll(ribbon2, ribbonContent2);
  }

  // Set animation using CSS
  ribbon1.style.animation = 'scrollText 500s linear infinite'; // Slower speed for ribbon 1
  ribbon2.style.animation = 'scrollText 500s linear infinite'; // Slower speed for ribbon 2
});

// Only create a style element if it doesn't exist already
if (!styleElement) {
  styleElement = document.createElement('style');
  styleElement.classList.add('sponsor-logos-style');
  document.head.appendChild(styleElement);
}

// Insert the animation CSS rules
styleElement.innerHTML = `
  @keyframes scrollText {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  .scrolling-text {
    display: inline-block;
    white-space: nowrap;
    animation: scrollText 500s linear infinite; /* Adjusted slower speed */
  }
`;



document.addEventListener('DOMContentLoaded', () => {
  const scrollText = document.querySelector('.scroll-text');
  const scrollContent = scrollText.innerHTML;

  // Clone content multiple times to ensure seamless scrolling
  const repeatScroll = () => {
    scrollText.innerHTML += scrollContent;
  };

  // Append enough content for seamless scrolling
  for (let i = 0; i < 20; i++) {
    repeatScroll();
  }

  // Add CSS animation for scrolling
  scrollText.style.display = 'inline-block';
  scrollText.style.whiteSpace = 'nowrap';
  scrollText.style.animation = 'scrollEffect 400s linear infinite';
});

// CSS for smooth scrolling
const style = document.createElement('style');
style.innerHTML = `
  @keyframes scrollEffect {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  .scroll-text {
    display: inline-flex;
    animation: scrollEffect 400s linear infinite;
  }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
  const sponsorLogos = document.querySelector('.sponsor-logos');
  const logosContent = sponsorLogos.innerHTML;

  // Clone content multiple times to ensure seamless scrolling
  const repeatLogos = () => {
    sponsorLogos.innerHTML += logosContent;
  };

  // Append enough content for seamless scrolling
  for (let i = 0; i < 5; i++) {
    repeatLogos();
  }

  // Add CSS animation for scrolling
  sponsorLogos.style.display = 'flex';
  sponsorLogos.style.animation = 'slideLogos 200s linear infinite'; // Slower scroll speed

  // Check if style element already exists
  let style = document.querySelector('style.sponsor-logos-style');
  if (!style) {
    // Create a new style element if it doesn't exist
    style = document.createElement('style');
    style.classList.add('sponsor-logos-style');
    document.head.appendChild(style);
  }

  // Insert the animation CSS rules
  style.innerHTML = `
    @keyframes slideLogos {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    .sponsor-logos {
      display: flex;
      flex-wrap: nowrap;
      gap: 40px;
      width: fit-content;
      position: relative;
      animation: slideLogos 200s linear infinite; /* Adjusted speed */
    }
  `;
});


document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function () {
      menu.classList.toggle('active');
      if (menu.classList.contains('active')) {
         menuToggle.innerHTML = '✖'; // Change to "X"
      } else {
          menuToggle.innerHTML = '☰'; // Change to burger icon
      }
  });
});