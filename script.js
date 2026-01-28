// ====================
// Smooth Scrolling for Navigation Links
// ====================
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ====================
// Active Navigation State Based on Scroll Position
// ====================
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ====================
// Code Typing Effect
// ====================
const codeText = 'console.log("Let\'s build something amazing!");';
const codeElement = document.querySelector(".code-decoration");

if (codeElement) {
  let index = 0;
  const cursor = '<span class="typing-cursor">_</span>';

  function typeCode() {
    if (index < codeText.length) {
      codeElement.innerHTML = codeText.substring(0, index + 1) + cursor;
      index++;
      setTimeout(typeCode, 50);
    } else {
      codeElement.innerHTML = codeText + cursor;
    }
  }

  // Start typing after page loads
  setTimeout(typeCode, 1000);
}
