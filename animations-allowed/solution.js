

/*const tasks = {
    ....{....5......2......3...}
    ............{........5....4...3}
    ........................................{5....2....4}
}
*/

tasks.map(task =>
        Observable.concat(
            Observable.of(1),
            task.filter(() => false)
                .catch(e => Observable.error(new SomeError(e))),
            Observable.of(-1))
    )
    .mergeAll()
    .scan((acc, curr) => acc + curr, 0)
    .filter((value) => value === 0)
    .distinctUntilChange()

let animsAllowed = true;
animationAllowed.subscribe(val => animsAllowed = val);


/*const tasks = {
    after filter
    ....{......................}
    ............{..................}
    ........................................{...........}
}
*/


/*const 
 after concat 
tasks = {
    ....{1......................-1}
    ............{1..................-1}
    ........................................{1...........-1}
}
*/

/*
after mergeAll
const tasks = {
    ....{1.......1...............-1..-1.......1...........-1}
}
question: how do you know when tasks are finished?
1 means task starts, -1 means task ends
*/

/*
after scan
const tasks = {
    ....{1.......2...............1..0.......1...........0}
}
*/

/*
after map
const tasks = {
    ....{F........F...............F...T......F...........T}
}
*/

/*
after map
const tasks = {
    ....{F............................T.......F...........T}
}
*/
//https://gist.github.com/jhusain/d6007e9cce59ac6f173449cd6841f9fc