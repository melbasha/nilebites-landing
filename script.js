const titles = [
  "Make Your Project Shine Online 🚀",
  "Fast Websites. Modern Design.",
  "Turn Your Idea Into a Professional Website ✨",
];

let titleIndex = 0;
let charIndex = 0;
const heroTitle = document.getElementById("hero-title");

function typeTitle() {
  if (charIndex < titles[titleIndex].length) {
    heroTitle.textContent += titles[titleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeTitle, 70);
  } else {
    setTimeout(() => {
      heroTitle.textContent = "";
      charIndex = 0;
      titleIndex = (titleIndex + 1) % titles.length;
      typeTitle();
    }, 2000);
  }
}

typeTitle();

document.getElementById("startBtn").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth",
  });
});
