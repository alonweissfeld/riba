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
}

function mousePressed() {
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].pressed();
    }
}

function mouseReleased() {
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].released();
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
