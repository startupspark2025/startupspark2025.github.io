document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    const logo = document.querySelector('.logo a');

    // Toggle the navigation menu
    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Close the navigation menu when a link is clicked
    navItems.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
        });
    });

    // Close the navigation menu and redirect when the logo is clicked
    logo.addEventListener('click', function (e) {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
        // Allow the redirection to the first 
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 10); // Small delay to ensure the scroll reset happens after menu closes
    });
});