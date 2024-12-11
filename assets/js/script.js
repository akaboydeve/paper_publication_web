// Smooth Scrolling for Navigation Links
// Smooth Scrolling for Navigation Links
// document.querySelectorAll('.main-nav ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();

//         const targetId = this.getAttribute('href').substring(1);
//         const targetElement = document.getElementById(targetId);

//         if (targetElement) {
//             window.scrollTo({
//                 top: targetElement.offsetTop - 60, // Adjusting for fixed header height
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// Responsive Navigation Menu Toggle for Mobile
// Responsive Navigation Menu Toggle for Mobile
// Function to toggle the mobile menu
function toggleMenu() {
    const menu = document.querySelector('.main-nav ul');
    menu.classList.toggle('open');
}

// Create and append the menu toggle button
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', toggleMenu);

// Close the menu when resizing the window if the width is greater than 768px
window.addEventListener('resize', function() {
    const menu = document.querySelector('.main-nav ul');
    if (window.innerWidth > 768) {
        menu.classList.remove('open');
    }
});

// JavaScript to make the header transparent when scrolling down
// window.onscroll = function() {
//     var header = document.querySelector("header");
//     if (window.pageYOffset > 0) {
//         header.style.background = "rgba(102, 155, 188, 0.6)"; // Slightly transparent background
//         header.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"; // Keep the shadow on scroll
//     } else {
//         header.style.background = "linear-gradient(90deg,  #669bbc, #5d7bd3)"; // Original gradient background
//         header.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.9)"; // Original shadow
//     }
// };



// JavaScript for Font Size Controls using CSS Variables
// JavaScript for Font Size Controls using CSS Variables
// JavaScript for Font Size Controls using CSS Variables
// Font Size Controls





    function countdownTimer(endDate, elementId) {
        const countdownElement = document.getElementById(elementId);

        function updateTimer() {
            const now = new Date().getTime();
            const timeRemaining = endDate - now;

            if (timeRemaining < 0) {
                countdownElement.innerHTML = "Event has passed";
                return;
            }

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        setInterval(updateTimer, 1000);
    }

    const conferenceDate = new Date('Feb 27, 2025 00:00:00').getTime();
    const submissionDate = new Date('Dec 10, 2024 23:59:59').getTime();

    countdownTimer(conferenceDate, 'countdown-conference');
    countdownTimer(submissionDate, 'countdown-submission');




    // const sliderTrack = document.getElementById('slider-track');
    // const slides = document.querySelectorAll('.slide');
    // const buttons = document.querySelectorAll('.slider-btn');
    // let currentIndex = 0;
    // const slideInterval = 3000;  // Slide changes every 3 seconds
    
    // function slideImages() {
    //     currentIndex++;
    //     if (currentIndex >= slides.length) {
    //         currentIndex = 0;
    //     }
    //     updateSlider();
    // }
    
    // function goToSlide(index) {
    //     currentIndex = index;
    //     updateSlider();
    // }
    
    // function updateSlider() {
    //     const totalSlides = slides.length;
    //     const activeIndex = currentIndex;
    
    //     // Set the track's position to show the active slide in the middle
    //     sliderTrack.style.transform = `translateX(-${(activeIndex * 33.33)}%)`;
    
    //     // Reset classes
    //     slides.forEach((slide) => {
    //         slide.classList.remove('active-slide', 'previous-slide', 'next-slide');
    //     });
    
    //     // Apply classes for active, previous, and next slides
    //     slides[activeIndex].classList.add('active-slide');
    //     if (activeIndex > 0) {
    //         slides[activeIndex - 1].classList.add('previous-slide');
    //     }
    //     if (activeIndex < totalSlides - 1) {
    //         slides[activeIndex + 1].classList.add('next-slide');
    //     }
    
    //     // Update button states
    //     buttons.forEach((btn, i) => {
    //         btn.classList.toggle('active', i === activeIndex);
    //     });
    // }
    
    // // Initialize the auto sliding feature
    // let autoSlide = setInterval(slideImages, slideInterval);
    
    // // Handle button clicks to stop auto slide and navigate manually
    // buttons.forEach((btn, index) => {
    //     btn.addEventListener('click', () => {
    //         clearInterval(autoSlide);  // Stop auto sliding when manually selecting an image
    //         goToSlide(index);
    //         autoSlide = setInterval(slideImages, slideInterval);  // Resume auto sliding after manual change
    //     });
    // });
    





document.getElementById('increase-font').addEventListener('click', function () {
    adjustFontSize(1.1); // Increase font size by 10%
});

document.getElementById('reset-font').addEventListener('click', function () {
    resetFontSize(); // Reset to default font size
});

document.getElementById('decrease-font').addEventListener('click', function () {
    adjustFontSize(0.9); // Decrease font size by 10%
});

function adjustFontSize(multiplier) {
    const root = document.documentElement;
    const currentFontSize = parseFloat(getComputedStyle(root).fontSize);
    root.style.fontSize = `${currentFontSize * multiplier}px`;
}

function resetFontSize() {
    document.documentElement.style.fontSize = '16px'; // Reset to base font size
}

// Google Translate
// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({
//         pageLanguage: 'en',
//         includedLanguages: 'en,hi,he,es,fr,ro,de',
//         layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
//         autoDisplay: false
//     }, 'google_translate_element');
// }






// Intersection Observer for Lazy Loading Images
const lazyImages = document.querySelectorAll('[data-lazy]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.lazy;
            observer.unobserve(image);
        }
    });
}, {
    rootMargin: '50px 0px',
    threshold: 0.01
});

lazyImages.forEach(image => {
    imageObserver.observe(image);
});

// Dynamic Back-to-Top Button
const backToTopButton = document.querySelector('.back-to-top');
const scrollOffset = 200;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > scrollOffset) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Sticky Header on Scroll
// Sticky Header on Scroll
const header = document.querySelector('header');
const sticky = header.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('div');
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Using Font Awesome moon icon
// document.querySelector('header').appendChild(darkModeToggle);

// darkModeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
//     if (document.body.classList.contains('dark-mode')) {
//         localStorage.setItem('theme', 'dark');
//         darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Change to sun icon in dark mode
//     } else {
//         localStorage.setItem('theme', 'light');
//         darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Change to moon icon in light mode
//     }
// });

// Set initial state based on saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Show sun icon if dark mode is active
} else {
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Default to moon icon
}

// }

// Scroll Spy for Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.main-nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70; // Adjusting for fixed header height
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Hover Effect for Dropdown in Navbar
// Hover Effect for Dropdown in Navbar
const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('mouseenter', () => {
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownContent.style.display = 'block';
});

dropdown.addEventListener('mouseleave', () => {
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
});





let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}




// Visitor Counter
// Visitor Counter
function updateVisitorCounter() {
    let count = localStorage.getItem('visitorCount') || 0;
    count++;
    localStorage.setItem('visitorCount', count);
    document.getElementById('visitor-counter').innerText = `Visitor Count: ${count}`;
}

document.addEventListener('DOMContentLoaded', updateVisitorCounter);

// Google Maps Integration
// Google Maps Integration
// Google Maps Integration
function initMap() {
    const mapLocation = { lat: 20.354989, lng: 85.8167828 }; // Coordinates for Department of CSE, KIIT University
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: mapLocation,
    });
    const marker = new google.maps.Marker({
        position: mapLocation,
        map: map,
        title: 'School of Computer Science & Engineering, KIIT University',
    });
}

function loadGoogleMapsScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCcABaamniA6OL5YvYSpB3pFMNrXwXnLwU&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
}

document.addEventListener('DOMContentLoaded', loadGoogleMapsScript);

// Back-to-Top Button Smooth Scroll
// Back-to-Top Button Smooth Scroll
// Back-to-Top Button Smooth Scroll
document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



