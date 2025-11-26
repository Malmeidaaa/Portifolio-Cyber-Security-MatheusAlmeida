document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');

    if (hamburger && navUl) {
        hamburger.addEventListener('click', () => {
            navUl.classList.toggle('active');

            // Optional: Animate hamburger bars
            const bars = hamburger.querySelectorAll('.bar');
            // Simple toggle animation logic could go here if needed
        });
    }

    // Active Link Highlighting
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Handle root path '/' and 'index.html'
        if (currentPath.endsWith(linkPath) || (currentPath === '/' && linkPath === 'index.html') || (currentPath.endsWith('/') && linkPath === 'index.html')) {
            link.classList.add('active');
        } else if (currentPath.includes(linkPath) && linkPath !== 'index.html') {
            // For other pages, strict match might be needed or partial match if using subdirectories
            link.classList.add('active');
        }
    });
    // Accordion Logic
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            const item = accordion.parentElement;
            const content = accordion.nextElementSibling;

            // Toggle active class
            item.classList.toggle('active');

            // Toggle max-height for smooth animation
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });
});

// Language Toggle Function

