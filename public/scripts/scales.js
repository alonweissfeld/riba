const Midi = Tone.Midi;

/**
 * Genereate a minor pentatoc sacle for a given note.
 * Returns an array of frequency.
 */
function getMinorPentatonic (note) {
    if (!note || note < 24 || note > 105) {
        throw new Error('')
    }
    // var base = 
}
