"use strict";
console.log('hello  world')
console.log('test:', Math.floor(Math.random() * 7))

function shuffle(arr){
    for(let i = 0; i < arr.length; i++){
        let random_index = Math.floor(Math.random() * arr.length)
        let temp = arr[i]
        arr[i] = arr[random_index]
        arr[random_index] = temp
    }
    console.log('arr:', arr)
}

shuffle([4, 8, 0, 7, 9, 6, 0, 3, 0, 4, 1, 4 , 8, 9, 5, 4])