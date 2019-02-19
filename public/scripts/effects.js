const effects = {
    0: new Tone.Chorus(),
    1: new Tone.PingPongDelay(),
    2: new Tone.Chebyshev(20),
    3: new Tone.Distortion(),
    4: new Tone.Reverb(),
    5: new Tone.JCReverb(),
    6: new Tone.Phaser()
}

effects.on = false;

/**
 * Route the output of the synth through one or more
 * random effects before going to master output.
 */
function runEffect () {
    // Do not trigger a new effect is a note is already pressed,
    // or if a previous effect has been initialized.
    let notePressed = bubbles.some((note) => {
        return note.isPressed;
    })

    if (effects.on || notePressed) {
        return;
    }

    let len = Object.keys(effects).length - 2;
    let idx = getRandomInt(0, len)
    let effect = effects[idx];

    // Set dry/wat value and ramp to the given value
    // over 1 seconds.
    effect.wet.value = 0.4;
    effect.wet.rampTo(0.8, 1);

    // Clean up current synth and chain the new effect.
    effects.on = true;
    polySynth.disconnect();
    polySynth.chain(effect, Tone.Master);

    // Effect "is ready" color
    setBackground(color(100, 100 ,400));
}
