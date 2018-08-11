const controller = document.querySelector('#controller')
const temperature = document.querySelector('.temperature')

let minAngle = 130;
let maxAngle = 240;

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
    if (degree >= minAngle && degree <= maxAngle) {
        return;
    }

    this.style.transform = `rotate(${degree}deg)`
}

let angle = Math.PI * 2 / 3;
let rotate_x = 100;
let rotate_y = 0;



let notchContainer = document.querySelector('.notch-container')

for (let i = 0; i < 120; i++) {
    let thin = document.createElement("div");
    let x = rotate_x * Math.cos(angle) - rotate_y * Math.cos(angle);
    let y = rotate_y * Math.cos(angle) + rotate_x * Math.sin(angle);
    let r = vec2ang(x, y);
    thin.className = "thin";
    thin.style.left = 100 + x + "px";
    thin.style.top = 110 + y + "px";
    thin.style.transform = "rotate(" + r + "deg)";
    notchContainer.appendChild(thin);
    angle += (Math.PI / 720) * 10;
}


drawNotch()

function drawNotch() {
    let canvas = document.querySelector('#notch')
    let ctx = canvas.getContext('2d')

    ctx.translate(0.5, 0.5);
    let centerX = canvas.width / 2
    let centerY = canvas.height / 2

    let radiusOut = canvas.width / 2
    let radiusIn = radiusOut - 20
    angle = -4 * Math.PI / 3;
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1;

    for (let i = 0; i < 121; i++) {
        let x1 = centerX + radiusOut * Math.cos(angle)
        let y1 = centerY + radiusOut * Math.sin(angle)

        let x2 = centerX + radiusIn * Math.cos(angle)
        let y2 = centerY + radiusIn * Math.sin(angle)

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        angle += Math.PI / 360 * 5
    }
}
