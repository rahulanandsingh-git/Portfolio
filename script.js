window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");

    // Fade out preloader
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";

    // Enable scroll again
    document.body.style.overflow = "auto";

    // Show main content with animation
    mainContent.classList.add("show");

  }, 2000);
});

