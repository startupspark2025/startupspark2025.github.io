document.addEventListener('DOMContentLoaded', () => {
    // Set the date we're counting down to
    const countDownDate = new Date().getTime() + (56 * 24 * 60 * 60 * 1000) + (19*60*60*1000) + (0*60*1000) + (55*1000); // 56 days + 19 hours + 0 minutes + 55 seconds from now
  
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
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 1000);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonials-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;
    const slideWidth = testimonials[0].offsetWidth + 20; // Include margin
    let currentIndex = 0;

    // Clone all testimonials at the beginning and end of the slider for smooth loop
    for (let i = 0; i < totalTestimonials; i++) {
        slider.insertBefore(testimonials[i].cloneNode(true), slider.firstChild);
        slider.appendChild(testimonials[i].cloneNode(true));
    }

    const clonedTestimonials = document.querySelectorAll('.testimonial'); // Select all of them, originals and clones
    const totalCards = clonedTestimonials.length;
    
    // Move to the middle for the loop illusion.
    currentIndex = totalTestimonials;
    slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    

   function moveSlider() {
         currentIndex++;
      slider.style.transition = "transform 0.8s ease-in-out"
    const translateValue = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${translateValue}px)`;

       if(currentIndex >= totalCards - totalTestimonials){
          setTimeout(()=>{
               slider.style.transition = "none";
                currentIndex = totalTestimonials;
               slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
              },800)
           }
    }


    setInterval(moveSlider, 15000); // Auto slide every 5 seconds
});

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

document.querySelectorAll('.scrolling-text').forEach(text => {
  const content = text.innerHTML; // Store the original text
  const container = text.parentElement; // Get the parent container

  // Flag to indicate if the fill is already in progress to avoid multiple fills
  let fillingInProgress = false;

  // Function to ensure seamless looping
  const fillContent = () => {
    if (fillingInProgress) {
      return; // Avoid concurrent fills
    }
    fillingInProgress = true;

    // Use a requestAnimationFrame to make sure we are on next paint cycle.
    // this is to avoid browser lag. 
    requestAnimationFrame(() => {

        //Append content until scrollWidth is more than 2 times the container width
      while (text.scrollWidth < container.offsetWidth * 10) {
          text.innerHTML += content;
      }
      fillingInProgress = false;
    });
  };

  fillContent(); // Initial fill
    
   text.addEventListener('animationiteration', fillContent); // Ensure it stays filled during animation

  // Optional: If you are using resize event
    // window.addEventListener("resize",()=>fillContent())

});