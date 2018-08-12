const controller = document.querySelector('#controller')
const temperature = document.querySelector('.temperature')

let minAngle = 146;
// let maxAngle = 246;

controller.addEventListener('mousedown', function () {
    this.addEventListener('mousemove', moveController)
    this.addEventListener('mouseup', function () {
        this.removeEventListener('mousemove', moveController)
    })
})

function vec2ang(x, y) {
    let angleInRadians = Math.atan2(y, x);
    let angleInDegrees = (angleInRadians / Math.PI) * 180;
    return angleInDegrees;
}

function moveController(event) {
    let rect = this.getBoundingClientRect();

    let x = rect.left + rect.width / 2
    let y = rect.top + rect.height / 2

    let mouseX = event.pageX
    let mouseY = event.pageY

    let degree = vec2ang(mouseX - x, mouseY - y) + 90
    // if (degree >= minAngle && degree <= maxAngle) {
    //     return;
    // }

    this.style.transform = `rotate(${degree}deg)`
}


// function drawNotch() {
//     let canvas = document.querySelector('#notch')
//     let ctx = canvas.getContext('2d')

//     ctx.translate(0.5, 0.5);
//     let centerX = canvas.width / 2
//     let centerY = canvas.height / 2

//     let radiusOut = canvas.width / 2
//     let radiusIn = radiusOut - 23
//     angle = -4 * Math.PI / 3;
//     ctx.strokeStyle = 'black'
//     ctx.lineWidth = 1;

//     for (let i = 0; i < 121; i++) {
//         let x1 = centerX + radiusOut * Math.cos(angle)
//         let y1 = centerY + radiusOut * Math.sin(angle)

//         let x2 = centerX + radiusIn * Math.cos(angle)
//         let y2 = centerY + radiusIn * Math.sin(angle)

//         ctx.beginPath();
//         ctx.moveTo(x1, y1);
//         ctx.lineTo(x2, y2);
//         ctx.stroke();
//         angle += Math.PI / 360 * 5
//     }
// }
