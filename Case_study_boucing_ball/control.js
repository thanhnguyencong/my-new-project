class Control {
    constructor(hand, game) {
        document.addEventListener("keydown", event => {
            switch (event.keyCode) {
                case 37:
                    hand.moveLeft()
                    break;

                case 39:
                    hand.moveRight();
                    break;

                case 27:
                    game.togglePause();
                    break;

                case 32:
                    game.start();
                    break;
            }
        });

        document.addEventListener("keyup", event => {
            switch (event.keyCode) {
                case 37:
                    if (hand.speed < 0)
                        hand.stop();
                    break;

                case 39:
                    if (hand.speed > 0)
                        hand.stop();
                    break;
            }
        });
    }
}
