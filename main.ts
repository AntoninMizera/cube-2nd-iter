let canShake = false, sides = 6;

input.onButtonPressed(Button.A, function () {
    canShake = true;
    basic.showIcon(IconNames.Yes);
});

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (sides === 6) {
        sides = 10;
        basic.showString("X");
    } else {
        sides = 6;
        basic.showString("6");
    }
});

input.onGesture(Gesture.Shake, function () {
    if (canShake) {
        let rnd = randint(1, sides);

        if (rnd === 1)
            basic.showLeds(`. . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .`);
        else if (rnd === 2)
            basic.showLeds(`. . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . .`);
        else if (rnd === 3)
            basic.showLeds(`. . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . .`);
        else if (rnd === 4)
            basic.showLeds(`# . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #`);
        else if (rnd === 5)
            basic.showLeds(`# . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #`);
        else if (rnd === 6)
            basic.showLeds(`# . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #`);
        else if (rnd === 7)
            basic.showLeds(`# . . . #
                . . . . .
                # . # . #
                . . . . .
                # . . . #`);
        else if (rnd === 8)
            basic.showLeds(`# . # . #
                . . . . .
                # . . . #
                . . . . .
                # . # . #`);
        else if (rnd === 9)
            basic.showLeds(`# . # . #
                . . . . .
                # . # . #
                . . . . .
                # . # . #`);
        else if (rnd === 10)
            basic.showLeds(`# . . . #
                . # . # .
                # . . . #
                . # . # .
                # . . . #`);

        while (rnd--) {
            music.playTone(Note.C5, music.beat());
            basic.pause(50);
        }

        canShake = false;
    }
});
