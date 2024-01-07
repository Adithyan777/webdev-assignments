/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Promise 1 resolved.")
        },1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Promise 2 resolved.")
        },2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Promise 3 resolved.")
        },3000)
    })
    
    // throw new Error('hehehe Error')
}

function calculateTime() {
    const startTime = new Date().getTime();
    waitOneSecond()
    .then(waitTwoSecond)
    .then(waitThreeSecond)
    .then(()=>{
        console.log("All promises resolved.")
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        const endTime = new Date().getTime();
        console.log("Time Taken: "+ ((endTime-startTime)/1000));
    })
    
}

calculateTime();