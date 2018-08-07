import { Draggable } from 'gsap/draggable'

const rect = document.querySelector('#controller')

rect.addEventListener('mousedown', function (event) {
    console.log('sdfj')
})

Draggable.create('#controller', {
    type: "rotation",
    throwProps: true,
    trigger: "#knob",
    bounds: { maxRotation: 135, minRotation: -135 },
    onClick: function () {
        console.log("clicked");
    },
    onThrowComplete: function () {
        console.log(this.rotation);
    }
})