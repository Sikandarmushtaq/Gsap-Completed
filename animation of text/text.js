const breakthetext = () => {
  const h1 = document.querySelector("h1");
  const h1text = h1.textContent;
  const splittedText = h1text.split("");
  const halfText = splittedText.length / 2;
  // console.log(halfText)
  let clutter = "";

  splittedText.forEach(function (e, idx) {
    if (idx < halfText) {
      clutter += `<span class = "a">${e} </span>`;
    } else {
      clutter += `<span class = "b">${e} </span>`;
    }
    // console.log(e,idx)
  });
  h1.innerHTML = clutter;
};
breakthetext();

gsap.from("h1 .a", {
  y: 70,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
});
gsap.from("h1 .b", {
  y: 70,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
});
