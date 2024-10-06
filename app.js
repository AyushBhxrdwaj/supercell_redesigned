let cursor = document.querySelector("#cursor")
let cursor_blr = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",(dets)=>{
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
})
document.addEventListener("mousemove",(dets)=>{
    cursor_blr.style.left = dets.x - 150 + "px"
    cursor_blr.style.top = dets.y - 150 + "px"
})




gsap.to("#nav",{
    
    backgroundColor:"#000",
    height:"120px",
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})