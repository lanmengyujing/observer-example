## Problem
A real-world work problem of creating smooth animations on low-end devices to illustrate the techniques that solve the problem.

const tasks = {
    ....{....5......2......3...}
    ............{........5....4...3}
    ........................................{5....2....4}
}

animationsAllowed = {
    ....false......................true.....false.......true
}


animationsAllowed is a simple stream that switches to false as soon as a task starts and switches to true as soon as a task ends.


## Notes
do not cancel promise, use switchLatest to solve cancellation in UI.
