document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".hgb-why-section");

  if (!section) return;

  // Respect reduced motion preferences
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  // SCROLL REVEAL

  const revealElements = section.querySelectorAll(
    ".hgb-eyebrow, .hgb-why-heading, " +
      ".hgb-why-description, .hgb-feature, " +
      ".hgb-why-visual, .hgb-floating-label",
  );

  revealElements.forEach((element) => {
    element.classList.add("hgb-reveal");
  });

  section.classList.add("hgb-motion-ready");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("hgb-visible");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });

  // SUBTLE 3D IMAGE TILT

  const imageWrapper = section.querySelector(".hgb-image-wrapper");

  if (!imageWrapper) return;

  const supportsHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;

  if (!supportsHover) return;

  imageWrapper.addEventListener("mousemove", (event) => {
    const rect = imageWrapper.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 5;
    const rotateX = (0.5 - y) * 5;

    imageWrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  imageWrapper.addEventListener("mouseleave", () => {
    imageWrapper.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  });
});
