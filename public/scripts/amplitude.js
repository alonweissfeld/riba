/**
 * Modifies the amplitude of a random note, by setting a random Volume
 * value on a random bubble, making it bigger on screen as well.
 */
function runAmpChange() {
    // Our random volume value is in decibles.
    // Decibels are a logarithmic unit of measurement which is
    // useful for volume because of the logarithmic way that we
    // perceive loudness. 0 decibels means no change in volume.
    // -10db is approximately half as loud and 10db is twice is loud.
    let val = getRandomInt(-10, 10);
    let idx = getRandomInt(0, bubbles.length);

    let per = (val / 10);
    let vel = bubbles[idx].vel;
    bubbles[idx].vel = (per * VELOCITY) + VELOCITY;
    bubbles[idx].diam = 0.2 * (per * DIAMETER) + DIAMETER;
}

/**
 * Reset all notes velocity and update their size.
 */
function resetVelocities() {
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].vel = VELOCITY;
        bubbles[i].diam = DIAMETER;
    }
}
