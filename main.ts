input.onButtonPressed(Button.A, function () {
    manipulerPince(5)
})
function manipulerPince (num: number) {
    pince += num
    if (pince < 60) {
        pince = 60
    } else if (pince > 130) {
        pince = 130
    }
    pins.servoWritePin(AnalogPin.P16, pince)
}
input.onButtonPressed(Button.B, function () {
    manipulerPince(-5)
})
let droite = 0
let gauche = 0
let base = 0
let servoMoteur = 0
let pince = 0
led.enable(false)
pince = 95
let valeur_pince = pins.analogReadPin(AnalogPin.P3)
manipulerPince(0)
basic.forever(function () {
    servoMoteur = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 180)
    pins.servoWritePin(AnalogPin.P13, servoMoteur)
    basic.pause(10)
})
basic.forever(function () {
    servoMoteur = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 180, 0)
    pins.servoWritePin(AnalogPin.P13, servoMoteur)
    basic.pause(10)
})
basic.forever(function () {
    if (base != Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 180, 0)) {
        base = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 180, 0)
        pins.servoWritePin(AnalogPin.P13, base)
    }
    if (gauche != Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 20, 160)) {
        gauche = Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 20, 160)
        pins.servoWritePin(AnalogPin.P14, gauche)
    }
    if (droite != Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 60, 160)) {
        droite = Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 60, 160)
        pins.servoWritePin(AnalogPin.P15, droite)
    }
    if (pins.analogReadPin(AnalogPin.P3) < valeur_pince) {
        manipulerPince(2)
    } else if (pins.analogReadPin(AnalogPin.P3) > valeur_pince) {
        manipulerPince(-2)
    }
    basic.pause(10)
})
