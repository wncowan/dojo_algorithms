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

function filterRange(arr, min, max){
    console.log(arr)
    let input_type = typeof(arr)
    console.log(input_type)
    if(input_type == 'object'){
        for(let i = 0; i < arr.length; i++){
            while(arr[i] < min || arr[i] > max){
                arr = removeAt(arr, i)
            }
        }
        console.log('arr:', arr)       
    }
    else{
        console.log('input error')
    }
}

filterRange([1, 1, 2, 3, 4, 4, 5], 1, 30)
//[4, 5, 1, 2, 3]


//Test cases:
//[]
//!array
//