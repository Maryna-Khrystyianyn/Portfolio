

// menu

const menuArea = document.querySelector("nav");
const burger = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");
burger.addEventListener("mouseenter", () => {
  menu.style.display = "block";
});

menuArea.addEventListener("mouseleave", () => {
  menu.style.display = "none";
});

const progres = document.querySelectorAll(".progres");

progres.forEach((item) => {
  const itemWidth = item.style.width;
  item.textContent = `${itemWidth}`;
});

// paralaks

const cards = document.querySelectorAll(".project-container");
VanillaTilt.init(cards, {
  max: 20,
  glare: true,
  "max-glare": 0.5,
  speed: 1000,
  scale: 1.03,
});

// writer text
const text = "a Web Developer";
const sped = 100;
let i = 0;
function typeText() {
  if (i < text.length) {
    document.getElementById("typed-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeText, sped);
  } else {
    setTimeout(() => {
      document.getElementById("typed-text").textContent = "";
      i = 0;
      typeText();
    }, 2000);
  }
}
window.onload = typeText;
