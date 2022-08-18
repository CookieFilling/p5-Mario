/*
    Add all of our imports here. In order to make your own import,
    follow the following steps:

    1. Create your external Javascript file. (`test.js`)
    2. Write your code inside of this file inside of one function.
       You may write helper functions, but you must export one main
       function. (`export { main as testMain }`)
    3. Write a comment at the top of the file so it's clear what it 
       does.
    4. Import the exported function here. Call it inside of the setup()
       function if it should be called once at the beginning, or inside
       of the draw() function if it should be called at every update.
       Syntax looks like `import { testMain } from "./test.js"`
    5. Test and see if the game works as intended!
*/
import { circlesMain } from "./components/circles.js"

const canvasSize = 500; // Side length for canvas. Perfect square.

/*
    This function controls the game setup phase.
    It is automatically run ONCE when the game starts.
*/
window.setup = function setup() {
    createCanvas(canvasSize, canvasSize);
}

/*
    This function controls all of the game logic.
    It is run ONCE every FRAME UPDATE; essentially, it is
    an update loop to draw our game.
*/
window.draw = function draw() {
    circlesMain();
}