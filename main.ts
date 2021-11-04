let canShake = false, sides = 6;

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    canShake = true;
    basic.showIcon(IconNames.Yes);
});

input.onButtonPressed(Button.A, function () {
    if (sides > 2) sides--;

    basic.showNumber(sides);
});

input.onButtonPressed(Button.B, function () {
    if (sides < 32) sides++;

    basic.showNumber(sides);
});

input.onGesture(Gesture.Shake, function () {
    if (canShake) {
        canShake = false;
        let rnd = randint(1, sides);
        
        basic.showNumber(rnd);

        while (rnd--) {
            music.playTone(Note.C5, music.beat());
            basic.pause(50);
        }

    }
});
