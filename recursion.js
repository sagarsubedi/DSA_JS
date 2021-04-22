// Recursion in JS
// can help us keep DRY
// fancy way of looping

// factorial
function getFactorial(n){
    if(n<=1) return 1;
    else if(n==2) return 2;
    else{
        return n * getFactorial(n-1);
    }
}

console.log(getFactorial(4));

