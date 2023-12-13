function startGeneticJourney() {
  window.location.href = "calculate.html";
}

function toggleMobileMenu() {
  const navList = document.querySelector(".nav-list");
  navList.classList.toggle("active");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  hamburgerMenu.classList.toggle("active");
}
