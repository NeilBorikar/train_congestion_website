// Smooth scrolling for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({ top: target.offsetTop - 50, behavior: "smooth" });
      }
    }
  });
});
