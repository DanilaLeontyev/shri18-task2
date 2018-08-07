import { Draggable } from 'gsap/draggable'

Draggable.create('#controller', {
    type: "rotation",
    throwProps: true,
    bounds: { maxRotation: 135, minRotation: -135 },
    onClick: function () {
        console.log("clicked");
    },
    onThrowComplete: function () {
        console.log(this.rotation);
    }
})