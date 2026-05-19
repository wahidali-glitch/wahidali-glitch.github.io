// ===============================
// MODERN PORTFOLIO ANIMATIONS
// ===============================

// NAVBAR SHADOW ON SCROLL
window.addEventListener("scroll", () => {

    const header =
        document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.background =
            "rgba(2,6,23,0.9)";

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.3)";
    }
    else{

        header.style.background =
            "rgba(2,6,23,0.7)";

        header.style.boxShadow =
            "none";
    }
});

// ===============================
// TYPING ANIMATION
// ===============================

const typingText =
    [
        "Full Stack Developer",
        "Java Developer",
        "Frontend Designer",
        "Backend Developer",
        "Android Developer",
        "React Developer",
        "AI Enthusiast",
        "AI & ML Learner",
        "Problem Solver"
    ];

let textIndex = 0;
let charIndex = 0;

const typingElement =
    document.createElement("span");

typingElement.classList.add("typing-text");

const heroTitle =
    document.querySelector(".hero h2");

heroTitle.innerHTML = "";
heroTitle.appendChild(typingElement);

function typeEffect(){

    if(charIndex <
        typingText[textIndex].length){

        typingElement.textContent +=
            typingText[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);
    }
    else{

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect(){

    if(charIndex > 0){

        typingElement.textContent =
            typingText[textIndex]
                .substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);
    }
    else{

        textIndex++;

        if(textIndex >= typingText.length){
            textIndex = 0;
        }

        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    if(typingText.length){
        setTimeout(typeEffect, 1000);
    }
});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .about-card, .contact-card"
    );

function revealOnScroll(){

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active-reveal");
        }
    });
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// ===============================
// ACTIVE NAV LINK
// ===============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.clientHeight;

        if(pageYOffset >= sectionTop - 200){

            current =
                section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active-link");
        }
    });
});

// ===============================
// SMOOTH BUTTON HOVER EFFECT
// ===============================

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mousemove", e => {

        const rect =
            button.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        button.style.setProperty(
            "--x",
            `${x}px`
        );

        button.style.setProperty(
            "--y",
            `${y}px`
        );
    });
});

// ===============================
// FLOATING HERO CARD — FIXED
// Max tilt: 8 degrees only
// Resets when mouse leaves window
// ===============================

const heroCard =
    document.querySelector(".hero-card");

function clamp(value, min, max){
    return Math.min(Math.max(value, min), max);
}

window.addEventListener("mousemove", e => {

    const x = clamp(
        (window.innerWidth / 2 - e.pageX) / 35,
        -8,
        8
    );

    const y = clamp(
        (window.innerHeight / 2 - e.pageY) / 35,
        -8,
        8
    );

    heroCard.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;
});

// Reset card rotation when mouse leaves the window
window.addEventListener("mouseleave", () => {

    heroCard.style.transition =
        "transform 0.6s ease";

    heroCard.style.transform =
        "rotateY(0deg) rotateX(0deg)";

    setTimeout(() => {
        heroCard.style.transition = "";
    }, 600);
});

// ===============================
// PROJECT CARD HOVER — OVERLAY
// ===============================

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        const overlay =
            card.querySelector(".project-overlay");

        if(overlay){
            overlay.style.opacity = "1";
        }
    });

    card.addEventListener("mouseleave", () => {

        const overlay =
            card.querySelector(".project-overlay");

        if(overlay){
            overlay.style.opacity = "0";
        }
    });
});

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
    "%cWelcome to Wahid Ali Portfolio",
    "color:#3b82f6; font-size:20px; font-weight:bold;"
);

console.log(
    "%cModern Full Stack Developer Portfolio Loaded",
    "color:#8b5cf6; font-size:14px;"
);