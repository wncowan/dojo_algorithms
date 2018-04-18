"use strict";
console.log('shalom world')

function pushFront(arr, value){
    let input_type = typeof(arr)
    console.log(input_type)
    if(input_type == 'object'){
        for(let i=arr.length; i>0; i--){
            arr[i]=arr[i-1]
        }
        arr[0] = value
        console.log(arr)
    }
    else{
        console.log('input error')
    }
}

pushFront([], 0)


//Test cases:
//[]
//!array