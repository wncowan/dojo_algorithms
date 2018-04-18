"use strict";
console.log('shalom world')

function reverseArray(arr){
    for(let i = 0; i < arr.length/2; i++){
        let temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}
//TC: odd/even length, []


function popFront(arr, value){
    let input_type = typeof(arr)
    console.log(input_type)
    if(input_type == 'object'){
        reverseArray(arr)
        let first = arr[arr.length - 1]
        arr.pop()
        reverseArray(arr)
        console.log('first', first)
        console.log('arr', arr)
    }
    else{
        console.log('input error')
    }
}

popFront([1,2,3,4], 0)


//Test cases:
//[]
//!array