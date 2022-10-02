const a =()=>{
   console.log("hi");
}

// gsap.to(".parent",{
//     x:500,
//     scrollTrigger:{
//         trigger:".parent",
//         markers:true,
//         start:"top center",
//         end:"100% center ",
      
//         // onEnter:a,
//         onLeave:a,
//         // end :()=>`console.log('hi')`
//         toggleActions: "restart pause none none",
//     }
// })
// gsap.registerPlugin(ScrollTrigger)
// const t = gsap.timeline(
//     {
//         scrollTrigger:{
//             trigger:".parent",
//             scrub:1,
//             markers:true,
//             pin:true
//             // toggleActions:"restart pause pause pause"
//         }
//     }
// )
// t.to(".parent",{
//     duration:2,
   
//     x:200
// })
// .to(".parent",{
//     duration:2,
//     y:500,
//     scale:3
// })
// .to(".parent",{
//  x:900,
//  opacity:0,

// })



// new try


const t = gsap.timeline(
    {
        scrollTrigger:{
            trigger:".parent",
            scrub:1,
            markers:true,
            pin:true,
            end:"200% 0%",
            onLeave:()=>{document.querySelector(".parent").style.opacity=0}
            // toggleActions:"restart pause pause pause"
        }
    }
)

t.to(".parent",{
    rotate:"-10deg",
    // y:400,
    // y:"900%"
    // scrollTrigger:{
    //     trigger:".parent",
    //     markers:true,
    //     start:"top 30%",
    //     end:"888% 0%",
    //     scrub:true,
    //     pin:true,
       
    // }
})
.to(".parent",{
   scale:0.5
   
})








// .to(".parent",{
//     onEnter: () =>{ gsap.killTweensOf(t)}
// })

// use  onEnter and  onLeave to execute a function