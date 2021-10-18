let canShake = false, has10Sides = false;

input.onButtonPressed(Button.A, function () {
    canShake = true;
    basic.showIcon(IconNames.Yes);
});

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    has10Sides = !has10Sides;
    basic.showString(has10Sides ? "X" : "6");
});

input.onGesture(Gesture.Shake, function () {
    if (canShake) {
        let rnd = randint(1, has10Sides ? 10 : 6);

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
