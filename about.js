const animatedTags = document.querySelectorAll("h1,h2,h3,p,.text1 a")

// fade out on load
animatedTags.forEach(tag => {
  tag.style.opacity = 0
})

const fadeIn = function () {
  // look through all the animated tags and see
  // with the getBoundingClientRect if it's in the window
  let delay = 0.25  
  
  animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom
    
    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadein 1s ${delay}s both`
      delay = delay + 0.25
    } else {
      tag.style.opacity = 0
      tag.style.animation = ""
    }
  })
}

// on load, run fadeIn
fadeIn()

// on scroll, run fadeIn
document.addEventListener("scroll", function () {
  fadeIn()
})

// on browser resize, run fadeIn
window.addEventListener("resize", function () {
  fadeIn()
})
   


const starsTag = document.querySelector(".star6 img")
console.log(starsTag)

document.addEventListener("scroll",function(){
    const distance = scrollY;

    console.log(distance)


    starsTag.style.transform = `rotate(${distance*0.05}deg)`;
 
        }
)


const starsTag2 = document.querySelector(".star5 img")
console.log(starsTag)

document.addEventListener("scroll",function(){
    const distance = scrollY;

    console.log(distance)


    starsTag2.style.transform = `rotate(${distance*0.1}deg)`;
 
        }
)


const starsTag3 = document.querySelector(".star1 img")
console.log(starsTag)

document.addEventListener("scroll",function(){
    const distance = scrollY;

    console.log(distance)


    starsTag3.style.transform = `rotate(${distance}deg)`;
 
        }
)


const starsTag4 = document.querySelector(".star2 img")
console.log(starsTag)

document.addEventListener("scroll",function(){
    const distance = scrollY;

    console.log(distance)


    starsTag4.style.transform = `rotate(${distance}deg)`;
 
        }
)


const starsTag5 = document.querySelector(".star3 img")
console.log(starsTag)

document.addEventListener("scroll",function(){
    const distance = scrollY;

    console.log(distance)


    starsTag5.style.transform = `rotate(${distance}deg)`;
 
        }
)