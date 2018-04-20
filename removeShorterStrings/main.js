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

function removeShorterStrings(arr, min_length){

    for(let i = 0; i < arr.length; i++){
        while(arr[i].length < min_length){
            arr = removeAt(arr, i)
        }
    }
    console.log('arr:', arr)
    return arr
}

removeShorterStrings(['a','ab', 'aassd', 'aaaa'], 4)
//[4, 5, 1, 2, 3]


//Test cases:
//[]
//!array
//