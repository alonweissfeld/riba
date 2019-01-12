const Midi = Tone.Midi;
const Synth = Tone.Synth;

function playC () {
    console.log("Pressed.")
    // Play middle 'C'
    synth.triggerAttackRelease(notes[1].toFrequency(), "8n");
}
