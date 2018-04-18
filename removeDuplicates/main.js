"use strict";
console.log('shalom world')

function removeDuplicates(arr){
    let input_type = typeof(arr)
    console.log(input_type)
    if(input_type == 'object'){

        for(let i=0; i<arr.length; i++){
            while(arr[i] == arr[i+1]){
                for(let j = i+1; j<arr.length; j++){
                    arr[j] = arr[j+1]
                }
                arr.pop()
            }
        }
        console.log('arr:', arr)
    }
    else{
        console.log('input error')
    }
}

removeDuplicates(['bill','bill','bill','larry','mary','mary','mary'])

//Test cases:
//[]
//!array
//