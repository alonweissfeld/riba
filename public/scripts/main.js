const Synth = Tone.Synth;

var synth = new Synth().toMaster();

var notes = getMinorPentatonic(c4);

function playC () {
    console.log("Pressed.")
    // Play middle 'C'
    synth.triggerAttackRelease(notes[4], "8n");
}
