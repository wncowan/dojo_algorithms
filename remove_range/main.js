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

function removeRange(arr, start, end){
    let remove_count = end - start + 1
    for(let i = 0; i < remove_count; i++){
        arr = removeAt(arr, start)
    }
    console.log('arr:', arr)
    return arr
}

removeRange([4, 8, 0, 7, 9, 6], 1, 2)