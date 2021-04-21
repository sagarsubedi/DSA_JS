const times10 = (n) => {return n*10;}

console.log(`times10(9) returns: ${times10(9)}`);


const cache = {}

const memoTimes10 = (n) => {
    if (n in cache){
        console.log(`Fetching from cache ... `);
        return cache[n];
    }else{
        console.log(`Calculating result ... `);
        let result = times10(n);
        cache.n = result;
        return result;
    }
}

console.log(`Task 2 calculated value: ${memoTimes10(9)}`); // calculated
console.log(`Task 2 cached value: ${memoTimes10(9)}`);