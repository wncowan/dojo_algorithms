"use strict";
console.log('hello  world')


function nthToLast(arr, n){
    if(arr.length < n){
        console.log('too short')
        return null
    }
    let my_value = arr[arr.length - n]
    console.log('my_val:', my_value)
    return my_value
}

nthToLast([-11, 1 , 10, 2 , 3], 30)
//[4, 5, 1, 2, 3]


//Test cases:
//[]
//!array
//