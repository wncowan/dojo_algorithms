"use strict";
console.log('hello  world')

function insertAt(arr, index, value){
    let input_type = typeof(arr)
    console.log(input_type)
    if(input_type == 'object'){
        for(let i=arr.length; i>index; i--){
            arr[i] = arr[i-1]
        }
        arr[index] = value
        console.log(arr)
        return arr
    }
    else{
        console.log('input error')
    }
}

function doubleTrouble(arr){
    for(let i = 0; i < arr.length; i=i+2){
        arr = insertAt(arr, i, arr[i])
    }
    console.log('arr:', arr)
}

doubleTrouble([1,true,2,3,false])