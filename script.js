window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.opacity = "0"; // Fade out effect
    setTimeout(() => {
      preloader.style.display = "none"; // Remove preloader from view
      document.querySelector(".content").style.display = "block"; // Show content
    }, 900); // Duration of fade-out effect
  }, 2000); // Delay the loader for 3 seconds (adjust as needed)
});
