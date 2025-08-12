// ----------------------
// DevOps Terminal Typing Effect
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.querySelector(".terminal");
  
  // Text lines to simulate terminal commands
  const commands = [
    "Initializing CI/CD Pipeline...",
    "Cloning repository from GitHub...",
    "Building Docker image: abdulrahman/devops-app:latest",
    "Running Kubernetes deployment script...",
    "Scaling microservices...",
    "Running post-deployment tests...",
    "✅ All systems operational. Deployment successful!"
  ];

  let cmdIndex = 0;
  let charIndex = 0;
  let currentLine = "";

  function typeCommand() {
    if (cmdIndex < commands.length) {
      if (charIndex < commands[cmdIndex].length) {
        currentLine += commands[cmdIndex].charAt(charIndex);
        terminal.innerHTML = `<span class="prompt">devops@server:~$</span> ${currentLine}<span class="cursor">|</span>`;
        charIndex++;
        setTimeout(typeCommand, 50);
      } else {
        charIndex = 0;
        currentLine = "";
        cmdIndex++;
        setTimeout(typeCommand, 800); // Pause before next command
      }
    }
  }

  typeCommand();
});

// ----------------------
// Fade-In Animation on Scroll
// ----------------------
const fadeElements = document.querySelectorAll(".fade-in");

function handleScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();

// ----------------------
// Smooth Scroll Navigation
// ----------------------
document.querySelectorAll('.nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
