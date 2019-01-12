var synth = new Tone.Synth().toMaster();

function playC () {
console.log("Pressed.")
// Play middle 'C'
synth.triggerAttackRelease("C4", "8n");
}
