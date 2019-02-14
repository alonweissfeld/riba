const Synth = Tone.Synth;
const synth = new Synth().toMaster();

// Determine starting notes.
var notes = IS_MINOR
    ? getMinorPentatonic(SCALE_NOTE)
    : getMajorPentatonic(SCALE_NOTE);


function triggerAttackRelease(idx) {
    var note = notes[idx % 7];
    if (idx >= 7) note *= 2;

    synth.triggerAttackRelease(note, '8n');
}
