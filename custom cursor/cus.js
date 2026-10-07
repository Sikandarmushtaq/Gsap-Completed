const main = document.querySelector("#main")
const cursor = document.querySelector("#cursor")
const image = document.querySelector("#image")


main.addEventListener('mousemove',(dets)=>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
    })
})
image.addEventListener('mouseenter',()=>{
    cursor.innerHTML  = "View More"
    gsap.to(cursor,{
        scale:3,
     backgroundColor: "#ffffff8a",
    })
})

image.addEventListener('mouseleave',()=>{
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff",
    })
})