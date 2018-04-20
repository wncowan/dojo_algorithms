"use strict";
console.log('shalom world')


function removeAt(arr, index){
    for(let i = index; i < arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr.pop()
    console.log(arr)
    return arr
}

removeAt([1,2,3,4,6,7], 0)

//Test cases:
//[]
//!array
//