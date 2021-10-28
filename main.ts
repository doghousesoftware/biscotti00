function alarm (duration: number) {
    for (let index = 0; index < duration; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
    }
}
basic.forever(function () {
    if (input.temperature() > 35 || input.temperature() < 14) {
        alarm(randint(1, 5))
    }
})
