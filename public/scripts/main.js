const Synth = Tone.Synth;
const AMOUNT = 6;
const AMPLITUDE = 70;

var synth = new Synth().toMaster();

var notes = IS_MINOR
    ? getMinorPentatonic(SCALE_NOTE)
    : getMajorPentatonic(SCALE_NOTE);

function playNote (index) {
    var note = notes[index % 7];

    if (index >= 7) {
        note *= 2;
    }

    synth.triggerAttackRelease(note, "8n");
}

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
        bubbles.push(new Bubble(x, y, AMPLITUDE));
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
