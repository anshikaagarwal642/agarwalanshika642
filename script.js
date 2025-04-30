// Optional fade-in effect
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("section").forEach(section => {
    section.style.opacity = 0;
    section.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => (section.style.opacity = 1), 100);
  });
});
