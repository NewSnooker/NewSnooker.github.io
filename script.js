const typingText = "ผมชอบเขียนโค้ดและเรียนรู้เทคโนโลยีใหม่ๆ...";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeWriter() {
  if (index < typingText.length) {
    typingElement.innerHTML += typingText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();

// Generate Contribution Graph
const graph = document.querySelector(".graph");
for (let i = 0; i < 364; i++) {
  const day = document.createElement("div");
  day.classList.add("day");
  // Random intensity for mockup
  const intensity = Math.random();
  if (intensity > 0.8) {
    day.style.background = "#28a745"; // High
  } else if (intensity > 0.6) {
    day.style.background = "#6cc04a"; // Medium
  } else if (intensity > 0.3) {
    day.style.background = "#c6e48b"; // Low
  } else {
    day.style.background = "#333"; // None
  }
  graph.appendChild(day);
}
