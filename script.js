// Smooth fade-in effect for sections when scrolling
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('section').forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});

// Smooth scroll for nav links (extra polish)
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission effect (fake success message for now)
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for your message! I will get back to you soon.');
  form.reset();
});
