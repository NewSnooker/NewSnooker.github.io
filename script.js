// ====================
// Theme toggle (dark / light), remembered per browser
// ====================
const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");

themeToggle?.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch (e) {
    /* storage unavailable: theme still switches for this visit */
  }
});

// ====================
// Active tab follows the section in view
// ====================
const tabs = [...document.querySelectorAll(".tabnav__item")];
const sections = tabs
  .map((tab) => document.querySelector(tab.getAttribute("href")))
  .filter(Boolean);

const setActiveTab = (id) => {
  tabs.forEach((tab) =>
    tab.classList.toggle("is-active", tab.getAttribute("href") === `#${id}`)
  );
};

const updateActiveTab = () => {
  const offset = 140;
  let current = sections[0]?.id;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top - offset <= 0) current = section.id;
  });
  const atBottom =
    window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
  if (atBottom) current = sections[sections.length - 1]?.id;
  setActiveTab(current);
};

window.addEventListener("scroll", updateActiveTab, { passive: true });
updateActiveTab();

// ====================
// Typing effect in the README code block
// ====================
const typed = document.getElementById("typed");
const message = "\"Let's build something amazing!\"";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (typed) {
  if (reduceMotion) {
    typed.textContent = message;
  } else {
    let i = 0;
    const type = () => {
      typed.textContent = message.slice(0, ++i);
      if (i < message.length) setTimeout(type, 45);
    };
    setTimeout(type, 600);
  }
}

// ====================
// Reveal boxes as they scroll into view
// ====================
if (!reduceMotion && "IntersectionObserver" in window) {
  const targets = document.querySelectorAll(".section .box");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

// ====================
// Hide the contribution chart if the image service is unreachable
// ====================
document.getElementById("contrib-chart")?.addEventListener("error", (e) => {
  e.target.closest(".contrib")?.remove();
});

// ====================
// Footer year
// ====================
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
