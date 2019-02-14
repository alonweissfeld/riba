const Synth = Tone.Synth;
const synth = new Synth().toMaster();

var context;
window.onload = function() {
    context = new AudioContext();
}

// Determine starting notes.
var notes = IS_MINOR
    ? getMinorPentatonic(SCALE_NOTE)
    : getMajorPentatonic(SCALE_NOTE);

function getNote(idx) {
    var note = notes[idx % 7];
    if (idx >= 7) note *= 2;
    return note;
}

function triggerAttack(idx) {
    // According to Google's Web Audio recomendation, wait for a
    // user interaction before starting audio playback as user
    // is aware of something happening.
    context.resume();
    synth.triggerAttack(getNote(idx));
}

function triggerRelease(idx) {
    synth.triggerRelease();
}
