// Example JavaScript code for the website

// Add an event listener to the navigation links to apply active class
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });
    link.classList.add('active');
  });
});

// Example code to submit a contact form
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  // Perform form validation and submission logic here

  // Reset the form fields
  contactForm.reset();
});
