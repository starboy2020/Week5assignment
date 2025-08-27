// === Part 1: Variables and Conditionals ===
let theme = "light";
let ecoScore = 85;

if (ecoScore >= 80) {
  console.log("Excellent sustainability rating!");
} else {
  console.log("Needs improvement.");
}

// === Part 2: Custom Functions ===
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  theme = theme === "light" ? "dark" : "light";
  console.log(`Theme switched to ${theme}`);
}

function addProject(name) {
  const list = document.getElementById("project-list");
  const item = document.createElement("li");
  item.textContent = name;
  list.appendChild(item);
}

// === Part 3: Loops ===
const projects = ["Solar Tracker", "Smart Irrigation", "Eco Battery"];

for (let i = 0; i < projects.length; i++) {
  addProject(projects[i]);
}

let count = 0;
while (count < 3) {
  console.log(`Loop count: ${count}`);
  count++;
}

// === Part 4: DOM Interactions ===
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

document.getElementById("main-title").textContent += " 🌱";

document.getElementById("summary").style.fontWeight = "bold";
