"use strict";
console.log('shalom world')

function swapPairs(arr, index){
    let input_type = typeof(arr)
    console.log(input_type)
    if(input_type == 'object'){
        for(let i=0; i<arr.length; i=i+2){
            if(arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
            }
        }
        console.log('arr:', arr)
    }
    else{
        console.log('input error')
    }
}

swapPairs([1,2,3,4,6,7])

//Test cases:
//[]
//!array
//