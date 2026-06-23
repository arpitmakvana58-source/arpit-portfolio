// ======================================
// ARPIT MAKVANA PORTFOLIO SCRIPT
// ======================================

// Typing Animation

const typingText = document.querySelector(".typing-text");

const words = [
    "Python Developer",
    "Web Developer",
    "Software Engineer",
    "Tech Enthusiast",
    "B.Voc IT Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


// ======================================
// PARTICLE BACKGROUND
// ======================================

const canvas = document.getElementById("particles");

if (canvas) {

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    class Particle {

        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5);
            this.speedY = (Math.random() - 0.5);
        }

        update() {

            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;

            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {

            ctx.fillStyle = "#00F5FF";

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2
            );

            ctx.fill();
        }
    }

    for (let i = 0; i < 120; i++) {
        particles.push(new Particle());
    }

    function connectParticles() {

        for (let a = 0; a < particles.length; a++) {

            for (let b = a; b < particles.length; b++) {

                const dx =
                    particles[a].x - particles[b].x;

                const dy =
                    particles[a].y - particles[b].y;

                const distance =
                    Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {

                    ctx.strokeStyle =
                        "rgba(0,245,255,0.08)";

                    ctx.beginPath();

                    ctx.moveTo(
                        particles[a].x,
                        particles[a].y
                    );

                    ctx.lineTo(
                        particles[b].x,
                        particles[b].y
                    );

                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach((particle) => {

            particle.update();
            particle.draw();

        });

        connectParticles();

        requestAnimationFrame(
            animateParticles
        );
    }

    animateParticles();

    window.addEventListener("resize", () => {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    });
}


// ======================================
// SCROLL REVEAL
// ======================================

const cards =
    document.querySelectorAll(".glass-card");

const observer =
    new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";
            }
        });

    }, {
        threshold: 0.2
    });

cards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(50px)";

    card.style.transition =
        "all 0.8s ease";

    observer.observe(card);
});


// ======================================
// ACTIVE NAVIGATION
// ======================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        if (
            window.pageYOffset >=
            sectionTop - 150
        ) {
            current =
                section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");
        }
    });

});


// ======================================
// CONTACT FORM
// ======================================

const contactForm =
    document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Message Sent Successfully!"
            );

            contactForm.reset();
        }
    );
}


// ======================================
// BUTTON GLOW EFFECT
// ======================================

document
.querySelectorAll("button, .btn")
.forEach((btn) => {

    btn.addEventListener(
        "mouseenter",
        () => {

            btn.style.boxShadow =
                "0 0 25px #00F5FF";
        }
    );

    btn.addEventListener(
        "mouseleave",
        () => {

            btn.style.boxShadow =
                "none";
        }
    );

});


// ======================================
// LIVE DATE & TIME
// ======================================

function updateDateTime() {

    const date =
        document.getElementById("live-date");

    const time =
        document.getElementById("live-time");

    if (!date || !time) return;

    const now = new Date();

    date.textContent =
        now.toLocaleDateString("en-IN", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric"
        });

    time.textContent =
        now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
}

updateDateTime();

setInterval(updateDateTime, 1000);


// ======================================
// STATUS ANIMATION
// ======================================

const availability =
    document.querySelector(".availability");

if (availability) {

    const statusTexts = [
        "AVAILABLE FOR WORK",
        "BUILDING PROJECTS",
        "LEARNING AI",
        "OPEN TO COLLABORATE"
    ];

    let index = 0;

    setInterval(() => {

        availability.innerHTML =
            `<span class="live-dot"></span> ${statusTexts[index]}`;

        index++;

        if (index >= statusTexts.length) {
            index = 0;
        }

    }, 2500);
}

console.log("Portfolio Loaded Successfully 🚀");
const menuToggle =
document.getElementById("menu-toggle");

const sidebar =
document.querySelector(".sidebar");

if(menuToggle && sidebar){

    menuToggle.addEventListener("click",()=>{

        sidebar.classList.toggle("active");

    });

}
