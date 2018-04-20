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

function skyline(arr){
    let input_type = typeof(arr)
    if(input_type == 'object'){
        for(let k=0; k<arr.length; k++){
            while(arr[k] < 0){
                arr = removeAt(arr, k)
            }
        }
        console.log('arr w/o neg:', arr)
        let max = arr[0]
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i]
                for(let j=i+1; j<arr.length; j++){
                    while(arr[j] <= max){
                        arr = removeAt(arr, j)
                    }
                }
            }     
        }
        console.log('final skyline:', arr)  
    }   
    else{
        console.log('input error')
    }
}
skyline([-11, -2, -6, 1,3,3,3,2,8,1,2,3])
//[4, 5, 1, 2, 3]


//Test cases:
//[]
//!array
//