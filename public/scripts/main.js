
//const Midi = Tone.Midi;
const Synth = Tone.Synth;
var synth = new Synth().toMaster();
var notes = getMinorPentatonic(c4);

function playnote (index) {
    console.log("Pressed.")
    // Play middle 'C'
    if(index>= 7){ synth.triggerAttackRelease(notes[index%7]*2, "8n");}
    else{ synth.triggerAttackRelease(notes[index], "8n"); }
}
