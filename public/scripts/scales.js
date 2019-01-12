const Midi = Tone.Midi;

/**
 * Genereate a minor pentatoc sacle for a given MIDI note.
 * Returns an array of frequencies representing that scale.
 */
function getMinorPentatonic (note) {
    // Convert a string representation of a note to a MIDI value.
    if (typeof(note) == 'string') {
        note = Midi(note).toMidi();
    }

    if (!note || note < 24 || note > 105) {
        throw new Error('Given note is not valid.')
    }

    var scale = [
        note - 3,
        note,
        note + 2,
        note + 3,
        note + 4,
        note + 7,
        note + 9
    ]

    for (var i = 0; i < scale.length; i++) {
        scale[i] = Midi(scale[i]).toFrequency();
    }

    return scale;
}
