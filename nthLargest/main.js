"use strict";
console.log('hello  world')

function nthToLast(arr, n){
    if(n > arr.length || n < 0){
        console.log('input error')
        return null
    }
    let larger_count = n - 1 
    for(let i = 0; i < arr.length; i++){
        let count = 0
        for(let j = 0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                count++
            }
        }
        if(count == larger_count){
            console.log('nth to last:', arr[i])
        }
    }
}

nthToLast([1,3,5,2,4,-1,0], 1)
//[4, 5, 1, 2, 3]


//Test cases:
//[]
//!array
//