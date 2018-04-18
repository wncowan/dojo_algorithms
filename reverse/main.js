"use strict";
console.log('shalom world')

function reverseArray(arr){
    let input_type = typeof(arr)
    console.log(input_type)
    if(input_type == 'object'){
        
        for(let i = 0; i < arr.length/2; i++){
            let temp = arr[i]
            arr[i] = arr[arr.length - 1 - i]
            arr[arr.length - 1 - i] = temp
        }



        console.log('arr:', arr)       
    }
    else{
        console.log('input error')
    }
}

reverseArray([1190,121,13,4,510,60])

//Test cases:
//[]
//!array
//