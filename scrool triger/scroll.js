

gsap.to("#page2 h1",{
    transform:'translateX(-150%)',
    scrollTrigger:{ 
        trigger:'#page2',
        scroller:'body',
        // markers:true,
        start:'top 0%',
        end:'top -100%',
      
        scrub:2,
        pin:true,
    }
})




















// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,

// })
// gsap.from("#page2 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger:'#page2 #box',
//         scroller:'body',
//         markers:true,
//         start:'top50%',
//          end:'top30%',

//         pine:true
//     }
// })
// gsap.from("#page3 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,

// })