

var tl=gsap.timeline();

tl.from('#nv',{
    y:-70,
    ease:Expo.easeInOut,
    duration:1

})
.from("#main",{

    y:600,
    duration:1
    
})


.from("#lftupr",{
    y:-10,
    duration:0.5,
    opacity:0,
    
})

.from("#lftlower",{
    y:15,
    duration:0.5,
    opacity:0,
    
})
.from("#right2",{
    x:20,
    duration:0.5,
    opacity:0,
    


})
.from("#right1",{
    y:20,
    duration:2,
    opacity:0,
    
    

})

