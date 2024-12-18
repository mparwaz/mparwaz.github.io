// Get the mode toggle button
const modeToggleBtn = document.getElementById('modeToggle');

// Add an event listener for the button
modeToggleBtn.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');

    // Optionally, update the button text based on the current mode
    if (document.body.classList.contains('dark-mode')) {
        modeToggleBtn.textContent = 'Switch to Light Mode';
    } else {
        modeToggleBtn.textContent = 'Switch to Dark Mode';
    }
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Show Alert on Gallery Item Click
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
        alert(`You clicked on the image: ${img.alt}`);
    });
});


// Smooth Scroll to Sections
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            // If the target section exists, perform smooth scrolling
            event.preventDefault();
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Animate Elements on Scroll
const animateOnScroll = () => {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check

// Initial Button Text Setting
updateButtonText();

document.getElementById('modeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuItems = document.getElementById("menu-items");

  menuToggle.addEventListener("click", function () {
    menuItems.classList.toggle("active");
  });
});
const darkModeToggle = document.getElementById('modeToggle');
const logo = document.querySelector('.logo');

// Toggle the dark-mode class on the logo
darkModeToggle.addEventListener('click', () => {
    logo.classList.toggle('dark-mode');
});
