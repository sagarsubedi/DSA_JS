// Recursion in JS
// can help us keep DRY
// fancy way of looping
// Patterns for recursion
// 1. Wrapper Functions
// 2. Accumulators
// Exercise:
// use iterative loop to join element
function joinElementsLoop(arr, joinString) {
    var finalString = "";
    for (var i = 0; i <= arr.length - 1; i++) {
        if (i !== arr.length - 1) {
            finalString = finalString + arr[i] + joinString;
        }
        else {
            finalString += arr[i];
        }
    }
    return finalString;
}
// console.log(joinElementsLoop(['a','b','c','d'], 'e'));
// task 1: write recursive factorial
// soln1:
function getFactorial(n) {
    if (n <= 1)
        return 1;
    else if (n == 2)
        return 2;
    else {
        return n * getFactorial(n - 1);
    }
}
// console.log(getFactorial(4));
