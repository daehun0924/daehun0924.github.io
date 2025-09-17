document.addEventListener("DOMContentLoaded", () => {
  const onScrollReveal = () => {
    document.querySelectorAll(".reveal").forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) el.classList.add("is-visible");
    });
  };
  onScrollReveal();
  window.addEventListener("scroll", onScrollReveal, { passive: true });
});
