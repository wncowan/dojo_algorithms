"use strict";
console.log('hello  world')

function countNonSpace(str){
    let count = 0
    let arr = str.split("")
    console.log('my_arr:', arr)
    for(let i = 0; i < arr.length; i++){
        if(arr[i].charCodeAt(0) != 32){
            count++
        }
    }
    console.log('count:', count)
    return count
}

countNonSpace('aa ss dddd  ff')
//[4, 5, 1, 2, 3]


//Test cases:
//[]
//!array
//