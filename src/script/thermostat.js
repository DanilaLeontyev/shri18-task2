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

let angle = 0;
let rotate_x = 120;
let rotate_y = 0;

function vec2ang(x, y) {
    let angleInRadians = Math.atan2(y, x);
    let angleInDegrees = (angleInRadians / Math.PI) * 180;
    return angleInDegrees;
}

let notchContainer = document.querySelector('.notch-container')

for (let i = 0; i < 60; i++) {
    let thin = document.createElement("div");
    let x = rotate_x * Math.cos(angle) - rotate_y * Math.cos(angle);
    let y = rotate_y * Math.cos(angle) + rotate_x * Math.sin(angle);
    let r = vec2ang(x, y);
    thin.className = "thin";
    thin.style.left = 127 + x + "px";
    thin.style.top = 127 + y + "px";
    thin.style.transform = "rotate(" + r + "deg)";
    notchContainer.appendChild(thin);
    angle += (Math.PI / 300) * 10;
}

function updateValue(degree) {

}