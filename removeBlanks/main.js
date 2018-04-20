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

function removeBlanks(str){
    let arr = str.split("")
    console.log('my_arr:', arr)
    for(let i=0; i < arr.length; i++){
        while(arr[i] == " "){
            arr = removeAt(arr, i)
        }
    }
    str = arr.join("")
    console.log('my_string:', str)
    return str
}

removeBlanks('s h  u t  u p')
//[4, 5, 1, 2, 3]


//Test cases:
//[]
//!array
//