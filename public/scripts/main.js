const Synth = Tone.Synth;

var synth = new Synth().toMaster();
var notes = getMinorPentatonic(SCALE_NOTE);

function playNote (index) {
    var note = notes[index % 7];

    if (index >= 7) {
        note *= 2;
    }

    synth.triggerAttackRelease(note, "8n");
}
