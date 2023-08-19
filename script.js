const crsr=document.querySelector(".cursor");
const main=document.getElementById("main"); 
function cursor(){
document.addEventListener("mousemove",function(dets){
          crsr.style.left=dets.x+20+"px"    
          crsr.style.top=dets.y+20+"px"    
})
const video=document.querySelector("video");
video.addEventListener("mouseenter",function(dets){
              crsr.innerHTML="sound on" 
              crsr.style.width="100px"  
})
video.addEventListener("mouseleave",function(dets){
              crsr.innerHTML="" 
              crsr.style.width="20px"  
})
}
cursor()

let boxes=document.querySelectorAll(".box")
function seePhoto(){
  boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      let img=elem.getAttribute("data-image");
      crsr.style.width="300px"
      crsr.style.height="200px"
      crsr.style.backgroundColor="transparent"
      crsr.style.backgroundImage=`url(${img})` 
    elem.addEventListener("mouseleave",function(){
      crsr.style.width="20px"
      crsr.style.height="20px"
      crsr.style.backgroundColor="pink"
      crsr.style.backgroundImage=`none`
    })
    })
  })
}
seePhoto();
 
const init=()=>{
              gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init();

  st=gsap.timeline({
              scrollTrigger:{
                            trigger:".page1 h1",
                            scroller:"#main",
                            // markers:true,
                            start:"top 27%",
                            end:"top 0",
                            scrub:3
                   }   
 })
st.to(".page1 h1",{
     x:-80  
},"lib")
st.to(".page1 h2",{
     x:100  
},"lib")

st.to(".page1 video",{
     width:"80%"  
},"lib")

st1=gsap.timeline({
              scrollTrigger:{
                            trigger:".page1",
                            scroller:"#main",
                            start:"top -115%",
                            end:"top -120%",
                            // markers:true,
                            scrub:3
                   }   
 })
st1.to("#main",{
     background:"white",
     color:"black"
},"lib")

st2=gsap.timeline({
  scrollTrigger:{
                trigger:".page1 h1",
                scroller:"#main",
                start:"top -280%",
                end:"top -300%",
                scrub:3
       }   
})
st2.to("#main",{
  background:"#0f0d0d",
},"lib")

st3=gsap.timeline({
  scrollTrigger:{
                trigger:".page1 h1",
                scroller:"#main",
                start:"top -580%",
                end:"top -600%",
                scrub:3
       }   
})
st3.to("#main",{
  background:"pink",
},"lib")


let list=document.querySelectorAll("#nav li");
let pple=document.querySelector(".purple");
let h1=document.getElementById("h1");
list.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
        pple.style.display="block";
  })
  elem.addEventListener("mouseleave",function(){
        pple.style.display="none"
  })
})

list[0].addEventListener("mouseenter",function(){
  h1.innerHTML="HOME  HOME  HOME  HOME"
})
list[1].addEventListener("mouseenter",function(){
  h1.innerHTML="ABOUT  ABOUT  ABOUT  ABOUT"
})
list[2].addEventListener("mouseenter",function(){
  h1.innerHTML="STUDIO  STUDIO  STUDIO  STUDIO"
})
list[3].addEventListener("mouseenter",function(){
  h1.innerHTML="WORK  WORK  WORK  WORK"
})