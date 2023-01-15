const toggle = document.getElementById("night-mode-toggle");

toggle.addEventListener("click", function() {
  document.body.classList.toggle("night-mode");
});