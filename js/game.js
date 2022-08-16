/*
    This function controls the game setup phase.
    It is automatically run ONCE when the game starts.
*/
function setup() {
    createCanvas(600, 600);
}

/*
    This function controls all of the game logic.
    It is run ONCE every FRAME UPDATE; essentially, it is
    an update loop to draw our game.
*/
function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}