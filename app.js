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

gsap.from("#aboutus img,.about-us-in",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:3

    }
})
gsap.from(".cards",{
    scale:0.4,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1

    }
})

gsap.from(".page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }

})





function media() {
    if (window.matchMedia("(max-width: 600px)").matches) {
      alert("The website is not ready for mobile view please use a Laptop or Desktop for better Experience.")
    }
  }

media()

window.addEventListener("resize",media)

