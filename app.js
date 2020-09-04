var animationWheel1 = document.getElementById("wheel1")
var animationWheel2 = document.getElementById("wheel2")
var animationTrack = document.getElementById("track")
var animationTree = document.getElementById("tree")
var animationSky = document.getElementById("sky")
var audio = document.createElement("audio")

audio.setAttribute("src", "./Imagesandsound/sound.mp3")
audio.loop=true
let car = document.querySelector("#car")
// function soundPlay() {
//     audio.play()
// }
// car.addEventListener("click", soundPlay)

// let sky = document.querySelector("#sky")
// function soundStop() {
//     audio.pause()   
// }
// sky.addEventListener("click", soundStop)

function Animation() {
    animationWheel1.animate([
        { transform: "rotate(360deg)" },
    ], {
        duration: 300,
        iterations: Infinity
    })
    animationWheel2.animate([
        { transform: "rotate(360deg)" },
    ], {
        duration: 300,
        iterations: Infinity
    })
    animationTrack.animate([
        { transform: "translateX(-500vw)" },
    ], {
        duration: 500,
        iterations: Infinity
    })
    animationTree.animate([
        { transform: "translateY(4vh)" },
    ], {
        direction: "alternate-reverse",
        duration: 3000,
        iterations: Infinity
    })
    animationSky.animate([
        { transform: "translateY(-4vh)" },
    ], {
        direction: "alternate-reverse",
        duration: 3000,
        iterations: Infinity
    })
    audio.play()

}
document.addEventListener("click", Animation)

function AnimationStop() {
    var stop = [
        audio, 
        animationWheel1, 
        animationWheel2, 
        animationTrack, 
        animationTree,
        animationSky,
    ]
    for (let i = 0; i <= stop.length; i++) {
        stop[i].pause()
    }
}
document.addEventListener("dblclick", AnimationStop)
