const RUN_EFFECT_MS = 8000;
const ALLOW_WITH_EFFECT = 1;

const CHANGE_VELO_MS = 6000;
const RESET_VELOCITY_MS = 3000;


// Chain an effect every fixed time.
var playedWithEffect = 0;
setInterval(runEffect, RUN_EFFECT_MS);

// Modify amplitude every fixed time for each bubble.
// Also, Reset all notes velocity to default every fixed time.
setInterval(runAmpChange, CHANGE_VELO_MS);
setInterval(resetVelocities, RESET_VELOCITY_MS);
