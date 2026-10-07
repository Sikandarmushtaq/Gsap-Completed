var tl = gsap.timeline()

tl.from("nav h1,nav h4, nav button",{
y:-30,
opacity:0,
duration:0.7,
delay:1,
stagger:0.15,

})
tl.from('.center-part1 h1',{
    x:-150,
    duration:0.5,
    opacity:0,
   
})
tl.from('.center-part1 p',{
    x:-100,
    duration:0.4,
    opacity:0,
   
})
tl.from('.center-part1 button',{
   
    duration:0.4,
    opacity:0,
   
})
tl.from('.center-part2 img',{
   opacity:0,
    duration:0.3,
    x:200
  
    
   
},"-=1")



gsap.from(".section1bottom img",{
    x:500,
       opacity:0,
       duration:0.5,
       delay:0.5,
    scrollTrigger:{ 
        trigger:'.section1bottom',
        scroller:'body',
        // markers:true,
        start:'top 100%',
     
        scrub:1
       
      
      
    }
})
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.section2',
        scroller:'body',
        // markers:true,
        scrub:2,
        start:'top 70%',
        end:'top -50%',

    }
})
tl2.from('.services',{
    x:-150,
    opacity:0,
    duration:0.3,
})
tl2.from('.container .right',{
    x:600,
    opacity:0,
})
tl2.from('.container .left',{
    x:-600,
    opacity:0,
})