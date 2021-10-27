let grade = 0
input.onButtonPressed(Button.A, function () {
    grade = 1
})
function alarm (duration: number) {
    for (let index = 0; index < duration; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
    }
}
input.onButtonPressed(Button.B, function () {
    grade = 0
})
basic.forever(function () {
    if (input.temperature() > 35 || input.temperature() < 14) {
        if (grade == 0) {
            alarm(5)
        } else {
            alarm(randint(1, 5))
        }
    }
})
