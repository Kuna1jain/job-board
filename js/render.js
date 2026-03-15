// Theme button changer
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

const html = document.documentElement;

if(html.dataset.theme === "dark"){
  html.dataset.theme = "light";
  toggle.textContent = "🌙";
}else{
  html.dataset.theme = "dark";
  toggle.textContent = "☀️";
}

});