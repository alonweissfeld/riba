const AMOUNT = 6;
const AMPLITUDE = 70;

var xCenter
var yCenter;
var bubbles = [];

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    background(0);

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
        bubbles[i].clicked();
    }
}

function draw() {
    background(0);
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].display();
    }
}
