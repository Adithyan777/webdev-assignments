/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    console.log("Started file execution.");
    let start = new Date().getTime();
    while (new Date().getTime() - start < (seconds*1000)){
        // do nothing
    }
    console.log("Finished waiting.")
}