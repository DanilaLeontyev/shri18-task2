import { Draggable } from 'gsap/draggable'

// Draggable.create('#controller', {
//     type: "rotation",
//     throwProps: true,
//     bounds: { maxRotation: 135, minRotation: -135 },
//     onClick: function () {
//         console.log("clicked");
//     },
//     onThrowComplete: function () {
//         console.log(this.rotation);
//     }
// })

const controller = document.querySelector('#controller')
const temperature = document.querySelector('.temperature')
let minAngle = 130;
let maxAngle = 230;

controller.addEventListener('mousedown', function () {
    this.addEventListener('mousemove', moveController)
    this.addEventListener('mouseup', function () {
        this.removeEventListener('mousemove', moveController)
    })
})

function moveController(event) {
    let rect = this.getBoundingClientRect();

    let x = rect.left + rect.width / 2
    let y = rect.top + rect.height / 2

    let mouseX = event.pageX
    let mouseY = event.pageY

    let radians = Math.atan2(mouseX - x, mouseY - y)
    let degree = (radians * (180 / Math.PI) * -1) + 180;

    if (degree >= minAngle && degree <= maxAngle) {
        return;
    }

    this.style.transform = `rotate(${degree}deg)`
    console.log(degree)
}

function updateValue(degree) {

}