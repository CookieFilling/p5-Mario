const canvasSize = 500; // Side length for canvas. Perfect square.

/*
    This function controls the game setup phase.
    It is automatically run ONCE when the game starts.
*/
function setup() {
    createCanvas(canvasSize, canvasSize);
}

/*
    This function controls all of the game logic.
    It is run ONCE every FRAME UPDATE; essentially, it is
    an update loop to draw our game.
*/
function draw() {
    if (mouseIsPressed) {
        let randomNum = Math.round(Math.random() * 40) + 40;
        ellipse(mouseX, mouseY, randomNum, randomNum);
    }
}