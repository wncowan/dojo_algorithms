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

function dGetsJiggy(str){
  let arr = str.split("")
  console.log('initial arr', arr)
  var first_character = arr[0]
  arr = removeAt(arr, 0)
  arr[0] = arr[0].toUpperCase()
  str = arr.join('')
  str += " to the "
  str += first_character
  str += '!'
  return str
}
console.log(dGetsJiggy('Dylan'));
