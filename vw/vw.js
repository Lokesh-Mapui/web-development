// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {
  /* =========================
       Hero Button Click
    ========================== */
  const heroBtn = document.querySelector(".hero button");

  heroBtn.addEventListener("click", function () {
    alert("Welcome to our village 🌿");
  });

  /* =========================
       Navbar Active Effect
    ========================== */
  const navLinks = document.querySelectorAll("header nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  /* =========================
       Gallery Image Click
    ========================== */
  const galleryImages = document.querySelectorAll(".gallery-grid img");

  galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      window.open(this.src, "_blank");
    });
  });

  /* =========================
       Simple Scroll Message
    ========================== */
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      console.log("You are scrolling the village website");
    }
  });
});
