// Typing effect for the DevOps terminal
const terminalLines = [
  "🚀 Initializing DevOps pipeline...",
  "🔍 Checking infrastructure with Terraform...",
  "🐳 Building Docker images...",
  "📦 Deploying containers to Kubernetes...",
  "🔧 Configuring with Ansible...",
  "⚙️ Running CI/CD pipeline in Jenkins...",
  "✅ Deployment successful! 🚀"
];

let terminal = document.querySelector(".terminal");
let cursor = document.createElement("span");
cursor.className = "cursor";
cursor.textContent = " ";
terminal.appendChild(cursor);

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < terminalLines.length) {
    if (charIndex < terminalLines[lineIndex].length) {
      cursor.insertAdjacentText("beforebegin", terminalLines[lineIndex][charIndex]);
      charIndex++;
      setTimeout(typeLine, 50);
    } else {
      terminal.appendChild(document.createElement("br"));
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 500);
    }
  }
}

typeLine();

// Fade-in animation for sections
const fadeElements = document.querySelectorAll(".fade-in");

function handleScroll() {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

// Smooth scrolling for navigation
document.querySelectorAll(".nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
