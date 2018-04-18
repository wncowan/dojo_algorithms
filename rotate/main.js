"use strict";
console.log('hello  world')

function reverseArray(arr){
    let input_type = typeof(arr)
    console.log(input_type)
    if(input_type == 'object'){
        
        for(let i = 0; i < arr.length/2; i++){
            let temp = arr[i]
            arr[i] = arr[arr.length - 1 - i]
            arr[arr.length - 1 - i] = temp
        }
        // console.log('arr:', arr)  
        return arr     
    }
    else{
        console.log('input error')
    }
}

function rotateArray(arr, shiftBy){
    console.log(arr)
    let input_type = typeof(arr)
    console.log(input_type)
    if(input_type == 'object'){
        let length0 = arr.length
        let pop_count = 0
        for(let i = 0; i < length0 - 1; i++){
            let new_index = i + shiftBy
            if(new_index < length0){
                pop_count++
                arr.push(arr[i])
            }
        }
        arr = reverseArray(arr)
        for(let i = 0; i < pop_count; i++){
            arr.pop()
        }
        arr = reverseArray(arr) 
        console.log('arr:', arr)       
    }
    else{
        console.log('input error')
    }
}

rotateArray([1, 2, 3, 4, 5], 2)
//[4, 5, 1, 2, 3]


//Test cases:
//[]
//!array
//