const AMOUNT = 6;
const AMPLITUDE = 70;

// Dynamic background color.
var backgroundColor = 0;

var xCenter
var yCenter;
var bubbles = [];

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    setBackground(backgroundColor)

    xCenter = windowWidth / 2;
    yCenter = windowHeight / 2;

    let margin = 0.8 * (screen.width / AMOUNT);

    for (var i = 0; i < AMOUNT; i++) {
        let x = margin * (i + 1);
        let y = yCenter;

        bubbles.push(new Bubble(x, y, AMPLITUDE, i));
    }

    canvas.mouseMoved(mouseMoved);
}

/**
 * Events
 */

function mousePressed() {
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].pressed();
        bubbles[i].distX = mouseX - bubbles[i].x;
        bubbles[i].distY = mouseY - bubbles[i].y;
    }
}

function mouseReleased() {
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].released();
    }
}

function mouseMoved() {
    for (var i = 0; i < bubbles.length; i++) {
        if (bubbles[i].isPressed) {
            bubbles[i].x = mouseX - bubbles[i].distX ;
            bubbles[i].y = mouseY - bubbles[i].distY;
        }
    }
}

function draw() {
    background(backgroundColor)
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].display();
    }
}

function setBackground(col) {
    backgroundColor = col;
}
