"use strict";
console.log('hello  world')

function removeAt(arr, index){
    for(let i = index; i < arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr.pop()
    console.log(arr)
    return arr
}

function removeNegatives(arr){
    for(let i=0; i<arr.length; i++){
        while(arr[i] < 0){
            arr = removeAt(arr, i)
        }
    }
    console.log('arr w/o -`s:', arr)
}

removeNegatives([-11, -2, -6, 1,-3,-3,3,-2,8,-1,-2,-3])
//[4, 5, 1, 2, 3]


//Test cases:
//[]
//!array
//