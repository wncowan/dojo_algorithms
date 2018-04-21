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

function isPalindrome(str) {
  let arr = str.split("")
  console.log('initial arr', arr)
  for(let k = 0; k < arr.length; k++){
    arr[k] = arr[k].toLowerCase()
  }
  console.log('loweredcase arr', arr)
  for(let j = 0; j < arr.length ; j++){
    console.log(j)
    if(arr[j].charCodeAt(0)){
      while(arr[j] == " " || arr[j] == "." || arr[j] == "?" || arr[j] == "!"){
        arr = removeAt(arr, j)
        console.log('arr', arr)
        console.log('array length', arr.length)
      }
    }
  }
  for(let i = 0; i < arr.length/2; i++){
    if(arr[i] != arr[arr.length - 1 - i]){
      return false
    }
  }
  return true
}
console.log(isPalindrome('!D ud!'));
