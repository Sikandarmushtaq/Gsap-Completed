let lastScroll = 0;

window.addEventListener("scroll", () => {


  if (window.scrollY > lastScroll) {
    // Scroll Down
    gsap.to(".marque", {
      xPercent: -200,
      duration: 2,
      ease: "none",
      
    });
  } else {
    // Scroll Up
    gsap.to(".marque", {
      xPercent: 0,
      duration: 2,
      ease: "none"
    });
  }

  lastScroll = window.scrollY;

});