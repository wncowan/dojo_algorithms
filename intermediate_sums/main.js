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

function intermediateSums(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        count++
        if(count == 10){
            count = 0
            let sum = 0
            for(let j = i - 9; j <= i; j++ ){
                sum += arr[j]
            }
            arr = insertAt(arr, i+1, sum)
            i++
        }
    }
    let sum = 0
    for(let k = arr.length - count; k<arr.length; k++){
        sum += arr[k]
    }
    arr = insertAt(arr, arr.length, sum)
    console.log('arr:', arr)
}

intermediateSums([1,0,2,0,2,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,2,0,1,0,1,0,1,0,2,0,1,0,2,0,1])