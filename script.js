// Typing effect in the terminal section
document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.querySelector(".terminal .text");
  const commands = [
    "Initializing CI/CD Pipeline...",
    "Pulling latest code from GitHub...",
    "Building Docker image...",
    "Running automated tests...",
    "Deploying to production server...",
    "✅ Deployment successful!"
  ];

  let commandIndex = 0;
  let charIndex = 0;
  let currentLine = "";

  function typeCommand() {
    if (charIndex < commands[commandIndex].length) {
      currentLine += commands[commandIndex].charAt(charIndex);
      terminal.innerHTML = `<span class="prompt">devops@server:~$</span> ${currentLine}<span class="cursor">|</span>`;
      charIndex++;
      setTimeout(typeCommand, 50);
    } else {
      // Pause before typing the next command
      setTimeout(() => {
        commandIndex++;
        if (commandIndex < commands.length) {
          charIndex = 0;
          currentLine = "";
          typeCommand();
        }
      }, 800);
    }
  }

  typeCommand();
});

// Fade-in animation for sections
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

// Smooth scroll for nav links
document.querySelectorAll('.nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
