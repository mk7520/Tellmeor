const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
  themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
});

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}