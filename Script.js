
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".video-frame video");
  const videoSection = document.querySelector("#our-video");

  // Smoothly open the surprise section.
  document.querySelectorAll('a[href="#our-video"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      videoSection?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start"
      });
    });
  });

  // Pause the video when the visitor scrolls away from it.
  if (video && videoSection && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && !video.paused) {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(videoSection);
  }
});
