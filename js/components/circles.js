/*
    Purpose: When the mouse is pressed, this script creates a
    circle of a random size at the mouse cursor.

    Called: During every update in the draw() function.
*/

export { main as circlesMain };

function main() {
    if (mouseIsPressed) {
        let randomNum = Math.round(Math.random() * 40) + 40;
        ellipse(mouseX, mouseY, randomNum, randomNum);
    }
}