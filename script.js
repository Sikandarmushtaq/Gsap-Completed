// gsap.to("#box",{
//     x:800,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue"
// })
// gsap.from("h1", {
//   x: 500,
//   y: 500,
//   duation: 2,
//   delay: 1,
//   opacity: 0,
//   stagger: 1,
//   repeat: -1,
//   yoyo: true,
// });
// gsap.to("#box1", {
//   x: 800,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
//   repeat: -1,
//   yoyo: true,
// });


//understaanding timeline
const tl = gsap.timeline()

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
})
tl.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3
})

// tl.to("#box2", {
//   x: 800,
//   duration: 2,
// //  
//   rotate: 360,
// //   backgroundColor: "blue",
// //   repeat: -1,
// //   yoyo: true,
// });
// tl.to("#box3", {
//   x: 800,
//   duration: 2,
// //   delay: 3,
//   rotate: 360,
// //   backgroundColor: "blue",
// //   repeat: -1,
// //   yoyo: true,
// });
// tl.to("#box4", {
//   x: 800,
//   duration: 2,
// //   delay: 5,
//   rotate: 360,
// //   backgroundColor: "blue",
// //   repeat: -1,
// //   yoyo: true,
// });