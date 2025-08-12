// Typewriter Effect
const typewriterTexts = [
  "DevOps Engineer",
  "Cloud Infrastructure Specialist",
  "Automation Enthusiast"
];

let typewriterIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById("typewriter");

function typeEffect() {
  if (charIndex < typewriterTexts[typewriterIndex].length) {
    typewriterElement.textContent += typewriterTexts[typewriterIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typewriterElement.textContent = typewriterTexts[typewriterIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    typewriterIndex = (typewriterIndex + 1) % typewriterTexts.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

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

// Smooth scroll for nav links
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission effect
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for your message! I will get back to you soon.');
  form.reset();
});
