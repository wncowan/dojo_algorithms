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

function zipIt(arr1, arr2){
    let min_length
    let max_length
    let new_arr = []

    if(arr1.length < arr2.length){
        min_length = arr1.length
        max_length = arr2.length
    }
    else{
        min_length = arr2.length
        max_length = arr1.length
    }
    for(let i = 0; i < min_length; i++){
        new_arr.push(arr1[i])
        new_arr.push(arr2[i])
    }
    for(let j = min_length; j < max_length; j++){
        new_arr.push(arr2[j])
    }

    console.log('new arr:', new_arr)
}

zipIt([1,2,3],[4,5,6,7,8,9])