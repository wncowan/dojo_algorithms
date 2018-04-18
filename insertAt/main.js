"use strict";
console.log('shalom world')

function insertAt(arr, index, value){
    let input_type = typeof(arr)
    console.log(input_type)
    if(input_type == 'object'){
        for(let i=arr.length; i>index; i--){
            arr[i] = arr[i-1]
        }
        arr[index] = value
        console.log(arr)
    }
    else{
        console.log('input error')
    }
}

insertAt([1,2,3,4,5], 1, 9)


//Test cases:
//[]
//!array