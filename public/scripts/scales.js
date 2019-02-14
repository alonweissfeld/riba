const Midi = Tone.Midi;

/**
 * Validate a MIDI note.
 */
function validateMidiNote (note) {
    if (!note) {
        throw new Error('Note is null.')
    }

    // Convert a string representation of a note to a MIDI value.
    if (typeof(note) == 'string') {
        note = Midi(note).toMidi();
    }

    // Chceck range correctness.
    if (note < 24 || note > 105) {
        throw new Error('Given is not in valid range.')
    }

    return note;
}

/**
 * Convert a given MIDI scale to frequencies.
 */
function convertToFreq(scale) {
    for (var i = 0; i < scale.length; i++) {
        scale[i] = Midi(scale[i]).toFrequency();
    }

    return scale;
}

/**
 * Genereate a minor pentatoc scale for a given MIDI note.
 * Returns an array of frequencies representing that scale.
 */
function getMajorPentatonic(note) {
    note = validateMidiNote(note);

    var scale = [
        note - 3,
        note,
        note + 2,
        note + 3,
        note + 4,
        note + 7,
        note + 9
    ]

    return convertToFreq(scale);
}

/**
 * Genereate a Major Pentatoc/Blues scale for a given MIDI note.
 * Returns an array of frequencies representing that scale.
 */
function getMinorPentatonic(note) {
    note = validateMidiNote(note);

    var scale = [
        note,
        note + 3,
        note + 5,
        note + 6,
        note + 7,
        note + 10,
        note + 12
    ]

    return convertToFreq(scale)
}
