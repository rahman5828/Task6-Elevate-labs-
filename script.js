// Fade-in animation
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });
faders.forEach(fade => observer.observe(fade));

// Terminal typing effect
const skills = [
  "docker --version",
  "kubectl get pods",
  "terraform plan",
  "ansible-playbook deploy.yml",
  "aws ec2 describe-instances",
  "helm install my-app",
  "jenkins build pipeline"
];
let i = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");

function typeSkill() {
  if (i < skills.length) {
    if (charIndex < skills[i].length) {
      typingElement.textContent += skills[i].charAt(charIndex);
      charIndex++;
      setTimeout(typeSkill, 80);
    } else {
      typingElement.textContent += "\n";
      charIndex = 0;
      i++;
      setTimeout(typeSkill, 500);
    }
  }
}
typeSkill();
