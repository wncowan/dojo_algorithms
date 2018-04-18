"use strict";
console.log('shalom world')

function minToFront(arr){
    let input_type = typeof(arr)
    console.log(input_type)
    if(input_type == 'object'){
        let min_index = 0
        let min = arr[0]
        for(let i = 0; i < arr.length; i++){
            if(arr[i] < min){
                min = arr[i]
                min_index = i
            }
        }
        for(let i = min_index; i>0; i--){
            arr[i] = arr[i-1]
        }
        arr[0] = min
        console.log('arr:', arr)       
        console.log('min:', min)
        console.log('min_index:', min_index)
    }
    else{
        console.log('input error')
    }
}

minToFront([1190,121,13,4,510,60])

//Test cases:
//[]
//!array
//