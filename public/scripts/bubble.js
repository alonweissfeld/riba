/**
 * A Bubble object. This ellipse shape bubble represents a note and
 * determined by it's (x,y) postiion and by it's diameter representing
 * the amplitutde of the note (Bigger circles = more amp).
 */
function Bubble(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.col = color(255, 100);

    this.display = function() {
        stroke(255);
        fill(this.col);
        ellipse(this.x, this.y, this.d);
    }

    this.clicked = function() {
        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d < this.d) {
            this.col = color(255, 0, 200);
        }
    }

    this.move = function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
}
