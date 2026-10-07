let initailPath = `M 10 100 Q 250 100 490 100`

let finalPath = `M 10 100 Q 250 100 490 100`
let string  = document.querySelector("#string")

string.addEventListener('mousemove',function(dets){
    initailPath = `M 10 100 Q ${dets.x} ${dets.y} 490 100`
    gsap.to("svg path",{
        attr:{c:initailPath},
        attr:{d:initailPath},
        duration:0.2,
        ease:'power3.out'
        
    })
})
string.addEventListener('mouseleave',function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
         duration:1.5,
         ease:'elastic.out(1,0.2)'

    })
})