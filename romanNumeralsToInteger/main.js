"use strict";
console.log('hello  world')
// let x = 'heeey'
// console.log('test:', x[0])

function removeAt(arr, index){
    for(let i = index; i < arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr.pop()
    console.log(arr)
    return arr
}

function convertRomanToInteger(str) {

    var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    var my_integer = 0;
    let roman2 = ''
    let roman1 = ''
  
    for(var i = 0; i < str.length-1; i++){
      roman2 = str[i] + str[i+1]
      roman1 = str[i]
      console.log('roman1:', roman1)
      console.log('roman2:', roman2)
      for(let j = 0; j < romanNumeral.length; j++){
        if(roman2 == romanNumeral[j]){
          my_integer += decimalValue[j]
          i++
          console.log('entered 2')
          console.log('added:', decimalValue[j])
          break;
        }
        else if(roman1 == romanNumeral[j]){
          my_integer += decimalValue[j]
          console.log('entered 1')
          console.log('added:', decimalValue[j])
        }
      }
    }
    
    console.log('my_integer', my_integer)
    return my_integer;
  }

convertRomanToInteger('MXDII');

//[4, 5, 1, 2, 3]


//Test cases:
//[]
//!array
//