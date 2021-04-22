// recursive technique for taking larger problem
// breaking into sub-problem and work to get a result

// lets implement a simple linear search
function linearSearch (arr:number[], n:number){
    for(let i:number=0; i<arr.length; i++){
        if(arr[i] === n) return "Found";
    }
    return "Not Found";
}

// console.log(linearSearch([1,2,3,4,5], 5));

// Binary Search

