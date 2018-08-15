const controller = document.querySelector('#controller');
const temperature = document.querySelector('.temperature');

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
  let minAngle = 150;
  let maxAngle = 205;
  let rect = this.getBoundingClientRect();
  let x = rect.left + rect.width / 2;
  let y = rect.top + rect.height / 2;

  let mouseX = event.pageX;
  let mouseY = event.pageY;

  let degree = vec2ang(mouseX - x, mouseY - y) + 90;
  if (degree >= minAngle && degree <= maxAngle) {
    return;
  }

  drawNotch(degree);
  this.style.transform = `rotate(${degree}deg)`;
}

function moveControllerTouch(event) {
  event.preventDefault();
  let minAngle = 150;
  let maxAngle = 205;
  let rect = this.getBoundingClientRect();
  let x = rect.left + rect.width / 2;
  let y = rect.top + rect.height / 2;

  let mouseX = event.changedTouches[0].pageX;
  let mouseY = event.changedTouches[0].pageY;

  let degree = vec2ang(mouseX - x, mouseY - y) + 90;
  if (degree >= minAngle && degree <= maxAngle) {
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
  ctx.strokeStyle = '#808080';
  ctx.strokeStyle = '#F8C46D';

  for (let i = 0; i < lineCount; i++) {
    let t = i * (360 / lineCount);
    let tr = degToRad(t - 90) % 360;

    if (t > 330 || t < 30) continue;
    let fromX = canvas.width / 2 + radius * Math.cos(tr);
    let fromY = canvas.height / 2 + radius * Math.sin(tr);

    let toX = canvas.width / 2 + (radius + lineHeight) * Math.cos(tr);
    let toY = canvas.height / 2 + (radius + lineHeight) * Math.sin(tr);

    t - 185 > degree
      ? (ctx.strokeStyle = '#808080')
      : (ctx.strokeStyle = '#F8C46D');

    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
  }
}

function vec2ang(x, y) {
  let angleInRadians = Math.atan2(y, x);
  let angleInDegrees = (angleInRadians / Math.PI) * 180;
  return angleInDegrees;
}

function radToDeg(rad) {
  return rad * (180 / Math.PI);
}
function degToRad(deg) {
  return deg * (Math.PI / 180);
}
