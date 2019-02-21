// Amount of bubbles starting point.
const AMOUNT = 6;

// Dynamic background color.
var backgroundColor = 0;

var xCenter
var yCenter;
var bubbles = [];
var lastBubbleDeg;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    setBackground(backgroundColor)

    xCenter = windowWidth / 2;
    yCenter = windowHeight / 2;

    let margin = 0.8 * (screen.width / AMOUNT);

    let i;
    for (i = 0; i < AMOUNT; i++) {
        let x = margin * (i + 1);
        let y = yCenter;

        bubbles.push(new Bubble(x, y, i));
    }
    lastBubbleDeg = i;

    // Add more notes bubble
    let addBtn = createButton('Add');
    addBtn.position(xCenter, 0.1 * screen.width);
    addBtn.mouseClicked(addNote);

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

/**
 * Adds another note to scale, represented by a Bubble object.
 */
function addNote() {
    bubbles.push(new Bubble(xCenter, yCenter, lastBubbleDeg++));
}

function setBackground(col) {
    backgroundColor = col;
}
