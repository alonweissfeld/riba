// Amount of bubbles starting point.
const AMOUNT = 5;

// Dynamic starts color global setting.
var starsSettings = {
    color: 255,
    alpha: 20,
    size: 8,
}

var video;
var xCenter
var yCenter;
var bubbles = [];
var lastBubbleDeg;

/**
 * Preload a video and start playback.
 */
// function preload() {
//     video = createVideo('/assets/space-lines.mp4');
//     video.hide();
//     video.loop();
// }

function setup() {
    // Main canvas used to draw our shaped musical notes.
    canvas = createCanvas(windowWidth, windowHeight);

    // Create a p5.Renderer object to suppport off-screen graphics buffer.
    // For example, visual background effects.
    pg = createGraphics(windowWidth, windowHeight);
    pg.noStroke();

    xCenter = windowWidth / 2;
    yCenter = windowHeight / 2;

    let i;
    let dif = screen.width / (AMOUNT + 1)

    for (i = 0; i < AMOUNT; i++) {
        let x = dif * (i + 1);
        let y = yCenter;
        bubbles.push(new Bubble(x, y, i));
    }

    lastBubbleDeg = i;

    // Add more notes bubble
    let addBtn = createButton('+');
    addBtn.class('round-btn');
    addBtn.position(xCenter, 0.07 * screen.width);
    addBtn.mouseClicked(addNote);

    // canvas.mouseMoved(mouseMoved);
}

/**
 * Events
 * We return false at the end of touchStarted, touchMoved and touchEnded
 * events to prevent any default browser behaviors.
 */

function touchStarted(ev) {
    ev.preventDefault();
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].pressed();
        bubbles[i].distX = mouseX - bubbles[i].x;
        bubbles[i].distY = mouseY - bubbles[i].y;
    }

    return false;
}

function touchEnded() {
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].released();
    }

    return false;
}

function touchMoved() {
    for (var i = 0; i < bubbles.length; i++) {
        if (bubbles[i].isPressed) {
            bubbles[i].x = mouseX - bubbles[i].distX ;
            bubbles[i].y = mouseY - bubbles[i].distY;
        }
    }

    return false;
}

function draw() {
    background(0)

    // pass video frame as texture
    // pg.texture(video);
    // pg.plane(windowWidth, windowHeight);

    // Create a "night stars" effect in background.
    pg.fill(0, starsSettings.alpha);
    pg.rect(0, 0, windowWidth, windowHeight);

    pg.fill(starsSettings.color);
    pg.ellipse(random(width), random(height), starsSettings.size);
    image(pg, 0, 0);

    // Draw bubbles (notes)
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

/**
 * When we change the background stars color, something is happening.
 * E.g., an effect is turned on and we want to indicate it. Therefore,
 * The following makes a few modifications to the stars properties.
 */
function setStarsColor(col) {
    starsSettings.color = col;

    if (col != 255) {
        starsSettings.size = 14;
        starsSettings.alpha = 8;
        return;
    }

    // Default settings.
    starsSettings.size = 8;
    starsSettings.alpha = 20;
}
