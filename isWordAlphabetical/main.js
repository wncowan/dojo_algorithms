"use strict";
var test = 'a' < 'b'
console.log('test:', test)


function lowercase_str(str){
  let arr = str.split("")
  for(let j = 0; j < arr.length; j++){
    arr[j] = arr[j].toLowerCase()
  }
  str = arr.join("")
  return str
}

function is_alph(str){
  str = lowercase_str(str)
  for(let i = 0; i < str.length-1; i++){
    if(str[i] > str[i+1]){
      return false
    }
  }
  return true
}

console.log(is_alph('AbcdEFg'));
