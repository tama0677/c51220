function 前に進む () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.analogWritePin(AnalogPin.P15, 503)
}
function 止まる () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
function 後ろに止まる () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.analogWritePin(AnalogPin.P15, 503)
}
basic.showIcon(IconNames.Square)
basic.forever(function () {
    止まる()
    basic.pause(2000)
    前に進む()
    basic.pause(2000)
    止まる()
    basic.pause(2000)
    後ろに止まる()
    basic.pause(2000)
})
