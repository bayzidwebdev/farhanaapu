// Menu css 
const menuBtn = document.querySelector(".menu-icon");
const overlay = document.querySelector(".overlay");
const crossBtn = document.querySelector(".menu-close-btn");

menuBtn.addEventListener("click", () => {
    if (overlay.classList.contains("show-modal")) {
      overlay.classList.remove("show-modal");
    } else {
      overlay.classList.add("show-modal");
    }
  });

  crossBtn.addEventListener("click", () => {
    overlay.classList.remove("show-modal");
  });


  // bottom to top 
// Get the button element
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button when scrolled down 100vh, hide it otherwise
window.addEventListener("scroll", function() {
    if (window.scrollY >= window.innerHeight) {
        scrollTopBtn.classList.add("top-btm-show");
    } else {
        scrollTopBtn.classList.remove("top-btm-show");
    }
});

// Scroll smoothly to top when button is clicked
scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});