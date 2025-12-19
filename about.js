document.addEventListener("DOMContentLoaded", () => {
  const fades = document.querySelectorAll(".fade");

  const reveal = () => {
    fades.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 80) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal();
});

