//const Midi = Tone.Midi;
const Synth = Tone.Synth;

var synth = new Synth.toMaster();

function playC () {
    console.log("Pressed.")
    // Play middle 'C'
    synth.triggerAttackRelease("C4", "8n");
}
