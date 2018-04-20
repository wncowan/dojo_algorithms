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

function acronym(str){
    let arr = str.split(" ")
    console.log('my_arr:', arr)
    for(let i = 0; i < arr.length; i++){
        while(arr[i] == ""){
            arr = removeAt(arr, i)
        }
    }
    console.log('my_arr:', arr)
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase()
    }
    str = arr.join("")
    console.log('my_string:', str)
    return str
}

acronym(' check, check, check - it out')
//[4, 5, 1, 2, 3]


//Test cases:
//[]
//!array
//