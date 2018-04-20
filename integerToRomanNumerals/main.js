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

function convertToRoman(num) {

    var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    var romanized = '';
  
    while(num > 0){
      for(var i = 0; i < decimalValue.length; i++){
        while(num >= decimalValue[i]){
          romanized += romanNumeral[i];
          num -= decimalValue[i];
        }
      }
    }
    console.log(romanized)
    return romanized;
  }
  
convertToRoman(999);

//[4, 5, 1, 2, 3]


//Test cases:
//[]
//!array
//