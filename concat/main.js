"use strict";
console.log('hello  world')

function concat(arr1, arr2){

    let input_type1 = typeof(arr1)
    let input_type2 = typeof(arr2)
    if(input_type1 == 'object' && input_type2 == 'object'){
        let arr3 = []
        for(let i = 0; i < arr1.length; i++){
            arr3.push(arr1[i])
        }
        for(let i = 0; i < arr2.length; i++){
            arr3.push(arr2[i])
        }
        console.log('arr3:', arr3)       
    }
    else{
        console.log('input error')
    }
}

concat([1, 1, 2, 3, 4, 4, 5], [])
//[4, 5, 1, 2, 3]


//Test cases:
//[]
//!array
//