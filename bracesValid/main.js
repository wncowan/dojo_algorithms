"use strict";
console.log('hello  world')

function bracesValid(str) {

  var braces_array = ['(', 0, ')', 0, '[', 0, ']', 0, '{', 0, '}', 0]

  for(let i = 0; i < str.length; i++){
    for(let j=0; j< braces_array.length; j = j + 2){
      if(str[i] == braces_array[j]){
        braces_array[j+1]++
      }
    }
    for(let k = 1; k < braces_array.length; k = k + 4){
      if(braces_array[k] < braces_array[k+2]){
        console.log('more close than open')
        return false
      }
    }
  }
  for(let m = 1; m < braces_array.length; m = m + 4){
    if(braces_array[m] != braces_array[m+2]){
      console.log('more opening than closing')
      return false
    }
  }

  console.log('braces_array:', braces_array)
  return true
}
console.log(bracesValid('(((((][))))){{{}}}[[]]'));
