let grade = 0
input.onButtonPressed(Button.A, function () {
    grade = 1
})
function alarm (duration: number) {
    music.ringTone(262)
    basic.pause(duration * 1000)
    music.rest(music.beat(BeatFraction.Whole))
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
