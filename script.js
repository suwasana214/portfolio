// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle class to open/close the menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Smooth scroll when clicking on navigation links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    const targetId = link.getAttribute('href').substring(1); // Get the target section id
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section smoothly
    window.scrollTo({
      top: targetSection.offsetTop - 80, // Offset by header height
      behavior: 'smooth'
    });

    // Close the mobile menu after clicking on a link (for mobile view)
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
    }
  });
});
