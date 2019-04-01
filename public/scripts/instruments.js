/**
 * Configures different OSC and ENV parameters to determine different
 * synths sounds.
 */
var instruments = [
    {
        oscillator: {
            type: 'fatcustom',
            partials : [0.2, 1, 0, 0.5, 0.1],
            spread : 40,
            count : 3
        },
        envelope: {
            attack: 0.001,
            decay: 1.6,
            sustain: 0.03,
            release: 1.6
        }
    },
    {
        oscillator: {
            type: 'triangle8'
        },
        envelope: {
            attack: 2,
            decay: 1,
            sustain: 0.4,
            release: 4
        }
    },
]
