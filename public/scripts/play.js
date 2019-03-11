const Synth = Tone.Synth;
const PolySynth = Tone.PolySynth;

const MAX_VOICES = 5;

var context;
window.onload = function() {
    context = new AudioContext();
}

// Main Synth to be played.
var polySynth = new PolySynth(MAX_VOICES, Synth).toMaster();

// Determine starting notes.
var notes = IS_MINOR
    ? getMinorPentatonic(SCALE_NOTE)
    : getMajorPentatonic(SCALE_NOTE);

function getNote(idx) {
    var note = notes[idx % 7];
    if (idx >= 7) note *= 2;
    return note;
}

/**
 * Trigger's the synth attack.
 * deg - the note's degree to be played.
 * vel - the velocity of the note.
 */
function triggerAttack(deg, vel) {
    // According to Google's Web Audio recomendation, wait for a
    // user interaction before starting audio playback as user
    // is aware of something happening.
    context.resume();

    if (effects.clean) {
        // Clean effect from current node
        polySynth.disconnect();
        polySynth.toMaster();
        effects.clean = false;
    }

    polySynth.triggerAttack(getNote(deg), undefined, vel);
}

/**
 * Release the given notes
 */
function triggerRelease(deg) {
    let r = [getNote(deg)];
    polySynth.triggerRelease(r);

    // Allow only fixed number of notes with effect
    if (effects.on) playedWithEffect++;

    if (playedWithEffect == ALLOW_WITH_EFFECT) {
        // Done with current effect.
        setStarsColor(255);

        playedWithEffect = 0;
        effects.on = false;
        effects.clean = true;
    }
}
