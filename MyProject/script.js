// Select all gallery images
const images = document.querySelectorAll(".gallery img");

// LOOP through each image
images.forEach(img => {

  // Hover effect (zoom + glow)
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.1)";
    img.style.transition = "0.3s";
    img.style.boxShadow = "0 0 20px #38bdf8";
  });

  // Remove hover effect
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
    img.style.boxShadow = "none";
  });

  // Click to enlarge
  img.addEventListener("click", () => {

    // Create overlay
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.8)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";

    // Create large image
    const bigImg = document.createElement("img");
    bigImg.src = img.src;
    bigImg.style.width = "60%";
    bigImg.style.borderRadius = "10px";

    // Add to overlay
    overlay.appendChild(bigImg);
    document.body.appendChild(overlay);

    // Close on click
    overlay.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });

  });

});