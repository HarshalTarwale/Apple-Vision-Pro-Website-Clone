function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();

// PAGE 2 ANIMATIONS -------------------------------------------------------------------------------------------

var t1 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page2`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        // 
        pin:true
    }
})

t1.to(".p2-h2-c",{
    top:`-51%`
})

// PAGE 3 ANIMATIONS -------------------------------------------------------------------------------------------

gsap.from(".button-white", {
y: 60,
opacity: 0,
duration: 1,
ease: "power3.out",
scrollTrigger: {
trigger: ".button-white",
scroller: "#main", // important because Locomotive controls #main
start: "top 95%", // when button top reaches 80% of viewport
end : "top 85%",
scrub: 2
}
});

// PAGE 4 ANIMATIONS -------------------------------------------------------------------------------------------

var t4 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page4`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        // 
        pin:true
    }
})

t4.to(".p4-h2-c",{
    top:`-27%`
})

gsap.to("#page4", {
  scale: 0.92,
  yPercent: -9, 
  ease: "none",
  scrollTrigger: {
    trigger: "#page5",
    scroller: "#main",
    start: "top 95%", 
    end: "top 20%",   
    scrub: true,
    
  }
});

// PAGE 6 ANIMATIONS -------------------------------------------------------------------------------------------

var t6 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page6`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        // 
        pin:true
    }
})

t6.to(".p6-h2-c",{
    top:`-27%`
})

gsap.to("#page6", {
  scale: 0.92,
  yPercent: -9, 
  ease: "none",
  scrollTrigger: {
    trigger: "#page7",
    scroller: "#main",
    start: "top 95%", 
    end: "top 20%",   
    scrub: true,
    
  }
});

// PAGE 8 ANIMATIONS -------------------------------------------------------------------------------------------

var t8 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page8`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        // 
        pin:true
    }
})

t8.to(".p8-h2-c",{
    top:`-27%`
})

gsap.to("#page8", {
  scale: 0.92,
  yPercent: -9, 
  ease: "none",
  scrollTrigger: {
    trigger: "#page9",
    scroller: "#main",
    start: "top 95%", 
    end: "top 20%",   
    scrub: true,
    
  }
});

// PAGE 10 ANIMATIONS -------------------------------------------------------------------------------------------

var t10 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page10`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        // 
        pin:true
    }
})

t10.to(".p10-h2-c",{
    top:`-27%`
})

gsap.to("#page10", {
  scale: 0.92,
  yPercent: -9, 
  ease: "none",
  scrollTrigger: {
    trigger: "#page11",
    scroller: "#main",
    start: "top 95%", 
    end: "top 20%",   
    scrub: true,
    
  }
});

// PAGE 12 ANIMATIONS -------------------------------------------------------------------------------------------

var t12 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page12`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        // 
        pin:true
    }
})

t12.to(".p12-h2-c",{
    top:`-27%`
})

gsap.to("#page12", {
  scale: 0.92,
  yPercent: -9, 
  ease: "none",
  scrollTrigger: {
    trigger: "#page13",
    scroller: "#main",
    start: "top 95%", 
    end: "top 20%",   
    scrub: true,
    
  }
});

// PAGE14 ANIMATIONS -------------------------------------------------------------------------------------------

var t14 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page14`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        // 
        pin:true
    }
})

t14.to(".p14-h2-c",{
    top:`-27%`
})

gsap.to("#page14", {
  scale: 0.92,
  yPercent: -9, 
  ease: "none",
  scrollTrigger: {
    trigger: "#page15",
    scroller: "#main",
    start: "top 95%", 
    end: "top 20%",   
    scrub: true,
    
  }
});

// PAGE 17 ANIMATION --------------------------------------------------------------------------------------------------------------------

const page17Video = document.querySelector("#page17 video");

ScrollTrigger.create({
  trigger: "#page17",
  scroller: "#main",
  start: "top 30%",
  end: "bottom 30%",
  onEnter: () => page17Video.play(),
  onLeave: () => page17Video.pause(),
  onEnterBack: () => page17Video.play(),
  onLeaveBack: () => page17Video.pause(),
});

