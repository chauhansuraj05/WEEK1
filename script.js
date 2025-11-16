// DARK MODE
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = 
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// CONTACT FORM MESSAGE
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMessage").innerText = 
        "Thank you! Your message has been sent ✔";
});

// SCROLL ANIMATION TRIGGER
const elements = document.querySelectorAll(".fade-in, .slide-up");

function animateOnScroll() {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "none";
        }
    });
}
window.addEventListener("scroll", animateOnScroll);
animateOnScroll();
