"use strict";
console.log('hello  world')

function stringReverse(str){
    let arr = str.split("")
    console.log('my_arr:', arr)
    for(let i = 0; i < arr.length/2; i++){
        let temp = arr[i]
        arr[i] = arr[arr.length -1 - i]
        arr[arr.length -1 - i] = temp
    }
    str = arr.join('')
    console.log('str:', str)
    return str
}

stringReverse('checkitout')
//[4, 5, 1, 2, 3]


//Test cases:
//[]
//!array
//