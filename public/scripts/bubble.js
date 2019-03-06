// Defaults
const VELOCITY = 0.5;
const DIAMETER = 70;

/**
 * A Bubble object. This ellipse shape bubble represents a note and
 * determined by it's (x,y) postiion and by it's diameter representing
 * the amplitutde of the note (Bigger circles = more amp).
 */
function Bubble(x, y, p) {
    this.x = x;
    this.y = y;
    this.degree = p;

    // Dtermines the distance from mouse location.
    this.distX = 0;
    this.distY = 0;
    this.isPressed = false;

    // Determines the velocity of the note (range: [0,1]).
    // The diameter is the size of the bubble as used in
    // drawning an p5 ellipse.
    this.vel = VELOCITY;
    this.diam = DIAMETER;

    // Determines the coloring starting point.
    this.c = 40;
    this.col = color(this.c, 100);

    this.display = function() {
        stroke(255);
        fill(this.col);
        ellipse(this.x, this.y, this.diam);
    }

    this.pressed = function() {
        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d < this.diam / 2) {
            triggerAttack(this.degree, this.vel);
            this.isPressed = true;
        }
    }

    this.released = function () {
        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d < this.diam) {
            this.brighten();
            triggerRelease(this.degree);
            this.isPressed = false;
        }
    }

    this.brighten = function () {
        this.c += 8;
        this.col = color(this.c, 100);
    }

    this.move = function() {
        this.x = this.x + random(-0.5, 0.5);
        this.y = this.y + random(-0.5, 0.5);
    }
}
