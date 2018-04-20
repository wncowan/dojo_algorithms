"use strict";
console.log('hello  world')
var test_string = 'a9'
var at_0 = test_string.charCodeAt(0)
var at_1 = test_string.charCodeAt(1)
console.log('at 0:', at_0)
console.log('at 1:', at_1)

function removeAt(arr, index){
    for(let i = index; i < arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr.pop()
    console.log(arr)
    return arr
}

function getDigits(str){
    let arr = str.split("")
    console.log('my_arr:', arr)
    for(let i = 0; i < arr.length; i++){
        while(arr[i].charCodeAt(0) > 57 || arr[i].charCodeAt(0) < 48){
            arr = removeAt(arr, i)
        }
    }
    str = arr.join("")
    console.log('my_string:', str)
    return str
}

getDigits('1asdf2asdf3asdf5')
//[4, 5, 1, 2, 3]


//Test cases:
//[]
//!array
//