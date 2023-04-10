/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 *    "Step 1" will be printed first, then "Step 3" and after that, "step 2". Because "Step 2" is 
 *    inside of the snooze function, that will be printed last as there'll be a 2000 millisecond 
 *    or two second delay." Step 1" & "Step 3" aren't in the snooze function so they will run as is.
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 *    Order the steps were printed: "Step 1", "Step 3", "Step 2".
 * 
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 *    After changing the delay time to 0, the order that the steps will now be printed
 *    remains the same because it's an async function. 
 *    Async functions always return a promise. 
 *    If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

