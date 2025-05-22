// AOS initialization
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out',
});

// Preloader hide on load
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = '0';
  preloader.style.pointerEvents = 'none';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 500);
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile nav on link click (for better UX)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if(navLinks.classList.contains("active")){
      navLinks.classList.remove("active");
    }
  });
});
