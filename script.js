document.addEventListener("DOMContentLoaded", () => {
    const terminal = document.getElementById("terminal");
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    terminal.appendChild(cursor);

    const commands = [
        "Initializing CI/CD Pipeline...",
        "Pulling latest code from main branch...",
        "Building Docker image: abdulrahman/devops-portfolio:latest",
        "Pushing image to Docker Hub...",
        "Deploying to Kubernetes cluster...",
        "Applying Terraform infrastructure changes...",
        "Running Ansible playbooks...",
        "Deployment successful! ✅"
    ];

    let cmdIndex = 0;
    let charIndex = 0;
    let typing = true;

    function typeCommand() {
        if (cmdIndex < commands.length) {
            if (charIndex < commands[cmdIndex].length) {
                cursor.insertAdjacentText("beforebegin", commands[cmdIndex][charIndex]);
                charIndex++;
                setTimeout(typeCommand, 50); // typing speed
            } else {
                cursor.insertAdjacentHTML("beforebegin", "\n");
                cmdIndex++;
                charIndex = 0;
                setTimeout(typeCommand, 400); // delay before next command
            }
        } else {
            typing = false;
        }
    }

    typeCommand();

    // Fade-in animation on scroll
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    fadeElements.forEach(el => observer.observe(el));
});
