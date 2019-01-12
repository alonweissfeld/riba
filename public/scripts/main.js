const Synth = Tone.Synth;

var synth = new Synth().toMaster();

var notes = getMajorPentatonic(c4);

function playC () {
    console.log("Pressed.")
    // Play middle 'C'
    synth.triggerAttackRelease(notes[3], "8n");
}
