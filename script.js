function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

locomotiveAnimation()

function navbarAnimation(){
    gsap.to("#nav-part1 svg",{
        transform : "translateY(-100%)",
        scrollTrigger : {
            trigger : "#page1",
            scroller : "#main",
            // markers : true,
            start : "top 0",
            end : "top -5%",
            scrub : true
        }
    })
    gsap.to("#nav-part2 #links",{
        // transform : "translateY(-100%)",
        opacity : 0,
        scrollTrigger : {
            trigger : "#page1",
            scroller : "#main",
            // markers : true,
            start : "top 0",
            end : "top -5%",
            scrub : true
        }
    })
}

navbarAnimation()

function videoconAnimation(){
    let videocon = document.querySelector("#video-container");
let playbtn = document.querySelector("#play");

videocon.addEventListener("mouseenter", function(){
    gsap.to(playbtn, {
        opacity : 1,
        scale : 1
    })
})
videocon.addEventListener("mouseleave", function(){
    gsap.to(playbtn, {
        opacity : 0,
        scale : 0
    })
})
videocon.addEventListener("mousemove", function(eve){
    gsap.to(playbtn, {
        left : eve.x-70,
        top : eve.y-80
    })
})
}

videoconAnimation();

function loadingAnimation(){
    gsap.from("#page1 h1",{
        y : 100,
        opacity : 0,
        delay : 0.5,
        duration : 0.9,
        stagger : 0.3
    })

    gsap.from("#page1 #video-container",{
        opacity : 0,
        scale : 0.9,
        delay : 1.3,
        duration : 0.5,
    })
}

loadingAnimation();

function movableCursor(){
    document.addEventListener("mousemove", function(eve){
        gsap.to("#cursor",{
            left : eve.x,
            top : eve.y
        })
    })
    
    // document.querySelector("#child1").addEventListener("mouseenter",function(){
    //     gsap.to("#cursor",{
    //         transform: "translate(-50%,-50%) scale(1)"
    //     })
    // })
    // document.querySelector("#child1").addEventListener("mouseleave",function(){
    //     gsap.to("#cursor",{
    //         transform: "translate(-50%,-50%) scale(0)"
    //     })
    // })
    
    document.querySelectorAll(".child").forEach(function(eve){
        eve.addEventListener("mouseenter",function(){
            gsap.to("#cursor",{
                transform: "translate(-50%,-50%) scale(1)"
            })
        })
        eve.addEventListener("mouseleave",function(){
            gsap.to("#cursor",{
                transform: "translate(-50%,-50%) scale(0)"
            })
        })
    })
}

movableCursor()
