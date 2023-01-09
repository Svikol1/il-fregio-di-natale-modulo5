function scanKeys () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        buildString("0")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        calculate()
    } else {
        basic.clearScreen()
    }
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        buildString("7")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        buildString("8")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        buildString("9")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        calculate()
    } else {
        basic.clearScreen()
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        buildString("4")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        buildString("5")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        buildString("6")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        calculate()
    } else {
        basic.clearScreen()
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        buildString("1")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        buildString("2")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        buildString("3")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        calculate()
    } else {
        basic.clearScreen()
    }
}
function buildString (key: string) {
    basic.showString(key)
    numberString = "" + numberString + key
}
function clear () {
    numberString = ""
}
function calculate () {
    a = parseFloat(numberString) % 5
    if (a > 3 || a == 0) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # . # . #
            # . # . #
            # # # # #
            `)
    } else if (a > 1) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . # # #
            # . . . .
            # # # # .
            `)
    } else {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # # # .
            # . # . #
            `)
    }
}
/**
 * Connect a 4x4 matrix keypad like this:
 * 
 * Rows:
 * 
 * keypad / micro:bit pin
 * 
 * 1.          0
 * 
 * 2.          1
 * 
 * 3.          2
 * 
 * 4           8
 * 
 * Columns
 * 
 * 5.         13
 * 
 * 6.         14
 * 
 * 7.         15
 * 
 * 8.         16
 */
/**
 * Questo programma permette di digitare nel keypad un numero n e - alla pressione del tasto 'B' sulla Micro:bit - restituisce l'immagine che corrisponde all' n-esima posizione nel fregio di modulo:
 * 
 * fiocco-pupazzo-pupazzo-regalo-regalo.
 * 
 * Viene richiesto di inserire il numero n della posizione scelta nel fregio
 * 
 * A button - resetta il numero
 * 
 * B button - restituisce l'immagine corrispondente
 */
let a = 0
let numberString = ""
basic.showString("DIGITA UN NUMERO")
clear()
basic.forever(function () {
    while (true) {
        scanKeys()
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("c")
            clear()
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showString(numberString)
        }
    }
})
