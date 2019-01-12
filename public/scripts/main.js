
const Synth = Tone.Synth;
var synth = new Synth().toMaster();

function playNote (index) {
    console.log("Pressed at: " + index);
    console.log("Got scale? " + scale);
    var notes = getMinorPentatonic(scale);

    synth.triggerAttackRelease(notes[index], "8n");
}
