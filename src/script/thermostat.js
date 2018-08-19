const controller = document.querySelector('#controller');
const temperature = document.querySelector('.temperature');
let minAngle = 30;
let maxAngle = 330;

controller.addEventListener('mousedown', function() {
  this.addEventListener('mousemove', moveController);
  this.addEventListener('mouseup', function() {
    this.removeEventListener('mousemove', moveController);
  });
});

controller.addEventListener('touchstart', function() {
  this.addEventListener('touchmove', moveControllerTouch);
  this.addEventListener('touchend', function() {
    this.removeEventListener('touchmove', moveControllerTouch);
  });
});

drawNotch();

function moveController(event) {
  event.preventDefault();

  let rect = this.getBoundingClientRect();
  let x = rect.left + rect.width / 2;
  let y = rect.top + rect.height / 2;
  let mouseX = event.pageX;
  let mouseY = event.pageY;
  let degree = vec2ang(mouseX - x, mouseY - y);

  if (degree <= minAngle || degree >= maxAngle) {
    return;
  }
  console.log(degree);
  drawNotch(degree);
  this.style.transform = `rotate(${degree}deg)`;
}

function moveControllerTouch(event) {
  event.preventDefault();
  let rect = this.getBoundingClientRect();
  let x = rect.left + rect.width / 2;
  let y = rect.top + rect.height / 2;
  let mouseX = event.changedTouches[0].pageX;
  let mouseY = event.changedTouches[0].pageY;
  let degree = vec2ang(mouseX - x, mouseY - y);
  if (degree <= minAngle || degree >= maxAngle) {
    return;
  }
  drawNotch(degree);
  this.style.transform = `rotate(${degree}deg)`;
}

function drawNotch(degree) {
  let canvas = document.querySelector('.testCircle');
  let ctx = canvas.getContext('2d');
  let radius = 85;
  let lineHeight = 22;
  let lineCount = 360 / 2.5;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 1;

  for (let i = 0; i < lineCount; i++) {
    let t = i * (360 / lineCount);
    let tr = degToRad(t - 90) % 360;

    if (t <= minAngle || t >= maxAngle) {
      continue;
    }
    let fromX = canvas.width / 2 + radius * Math.cos(tr);
    let fromY = canvas.height / 2 + radius * Math.sin(tr);

    let toX = canvas.width / 2 + (radius + lineHeight) * Math.cos(tr);
    let toY = canvas.height / 2 + (radius + lineHeight) * Math.sin(tr);

    t > degree ? (ctx.strokeStyle = '#808080') : (ctx.strokeStyle = '#F8C46D');

    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
  }
}

function vec2ang(x, y) {
  let angleInRadians = Math.atan2(y, x) - Math.PI / 2;
  let angleInDegrees = radToDeg(angleInRadians);
  if (angleInRadians < 0) {
    angleInDegrees += 360;
  }
  return angleInDegrees;
}

function radToDeg(rad) {
  return rad * (180 / Math.PI);
}
function degToRad(deg) {
  return deg * (Math.PI / 180);
}
