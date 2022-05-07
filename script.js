gsap.to("#ccBanner", {
    scrollTrigger: {
        trigger: "#secpage",
        start: "top bottom",
        end: "top 70%",
        scrub: .5,
        delay: 1
    },
    top: "-110%",
    rotate: 50,
    ease: "Power1.out",
});

gsap.to("#cascf", {
    scrollTrigger: {
        trigger: "#secpage",
        start: "top 70%",
        end: "25% top",
        scrub: 1,
    },
    rotate: 400,
    ease: "sine.out",
});

gsap.to("#cascs", {
    scrollTrigger: {
        trigger: "#secpage",
        start: "top 70%",
        end: "25% top",
        scrub: 1,
    },
    rotate: -300,
    ease: "sine.out",
});

gsap.to("#casct", {
    scrollTrigger: {
        trigger: "#secpage",
        start: "top 70%",
        end: "25% top",
        scrub: 1,
    },
    rotate: 790,
    ease: "sine.out",
});

gsap.to("#cascen", {
    scrollTrigger: {
        trigger: "#secpage",
        start: "top 40%",
        end: "25% top",
        scrub: 1,
    },
    rotate: 120,
    scale: 5,
    ease: "easeInOut",
    opacity: 1,
});

gsap.to("#cascen h6", {
    scrollTrigger: {
        trigger: "#secpage",
        start: "top 40%",
        end: "25% top",
        scrub: 1,
    },
    ease: "easeInOut",
    opacity: 1,
});
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#third",
        start: "center center",
        end: "100% 10%",
        pin: true,
        scrub: 2,
    }
});
tl
.to("#poster-one",{
    top: "50%",
    ease: "Power0.easeIn",
    rotate: "720deg",
    duration: 1,
})
.to("#posters",{
    left: "65%",
    ease: "Power0.easeIn",
    duration: 1,
})
.to(".abcd",{
    left: "-65vw",
    stagger: 0.1,
    ease: "Power0.easeIn",
    delay: .5,
    duration: 1.2
}, "a")
.to("#third h6", {
    display: "initial"
})
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#fourth",
        start: "center center",
        pin: true,
        scrub: 2,
    }
});
tl2.to(".imgsection", {
    opacity: 1,
    stagger: .8,
    ease: Power3.easeOut,
} ,"a" )
.to(".imgsection", {
    opacity: 0,
    stagger: 1,
    ease: Power3.easeOut,

} ,"a" )

.to("#fourth h1 span", {
    y: -40,
    stagger: .8,
    ease: Power3.easeOut,
} ,"a" )
.to("#fourth h1 span", {
    y: 0,
    stagger: 1,
    ease: Power3.easeOut,

} ,"a" )

document.querySelectorAll("#pages p").forEach(function(atag){
    atag.addEventListener("mousemove" , function(dets){
        gsap.to(".imgchange" , {
            x: dets.target.dataset.index * -100 + "%",
            duration: 1.3,
        })

    });
});
document.querySelectorAll("#menub a").forEach(function(values){
    values.addEventListener("mouseover", function(dets){
        gsap.to(".menuimg" , {
            x: dets.target.dataset.id * -100 + "%",
            duration: 1.3,
        })
    });
});
ScrollTrigger.create({
    onUpdate: function(dets){
        gsap.to("#updline",{
            width: Math.floor(dets.progress * 100) + "vw",
        })
    }
});
document.querySelector("nav i").addEventListener("click", function(dets){
    document.querySelector("#menud").style.transform = "translateY(0%)";
    document.querySelector("#hero").style.display = "none";

});
document.querySelector("#close").addEventListener("click", function(dets){
    document.querySelector("#menud").style.transform = "translateY(-100%)";
    document.querySelector("#hero").style.display = "";
});