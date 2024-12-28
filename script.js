// Countdown Timer Logic
const eventDate = new Date("2025-03-22T00:00:00").getTime();
const countdownContainer = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    countdownContainer.innerHTML = "<p>The event has started!</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownContainer.innerHTML = `
    <div>
      <span>${days}</span>
      <p>Days</p>
    </div>
    <div>
      <span>${hours}</span>
      <p>Hours</p>
    </div>
    <div>
      <span>${minutes}</span>
      <p>Minutes</p>
    </div>
    <div>
      <span>${seconds}</span>
      <p>Seconds</p>
    </div>
  `;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Generate Sponsors
const sponsorsGrid = document.getElementById("sponsors-grid");
const sponsors = [
  { name: "TechNova", logo: "sponsor1.png" },
  { name: "InnovateX", logo: "sponsor2.png" },
  { name: "GreenTech", logo: "sponsor3.png" },
  { name: "FutureWorks", logo: "sponsor4.png" },
  { name: "AlphaCorp", logo: "sponsor5.png" },
  { name: "VentureVision", logo: "sponsor6.png" },
];

function renderSponsors() {
  sponsors.forEach(sponsor => {
    const sponsorCard = document.createElement("div");
    sponsorCard.classList.add("sponsor-card");
    sponsorCard.innerHTML = `
      <img src="${sponsor.logo}" alt="${sponsor.name}">
      <h3>${sponsor.name}</h3>
    `;
    sponsorsGrid.appendChild(sponsorCard);
  });
}

renderSponsors();

