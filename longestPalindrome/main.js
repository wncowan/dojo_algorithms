"use strict";
console.log('hello  world')

function removeAt(arr, index){
  for(let i = index; i < arr.length - 1; i++){
      arr[i] = arr[i+1]
  }
  arr.pop()
  console.log(arr)
  return arr
}

function lowercase_crunched_unpunc(str){
  let arr = str.split("")
  for(let i = 0; i < arr.length; i++){
    while(arr[i] == " " || arr[i] == "." || arr[i] == "?" || arr[i] == "!"){
      arr = removeAt(arr, i)
    }
  }
  for(let j = 0; j < arr.length; j++){
    arr[j] = arr[j].toLowerCase()
  }
  str = arr.join("")
  return str
}

function isPalindrome(str){
  for(let i = 0; i < str.length/2; i++){
    if(str[i] != str[str.length - 1 - i]){
      return false
    }
  }
  return true
}

function longestPalindrome(str){
  str = lowercase_crunched_unpunc(str)
  var sub_string = ""
  var longest_palindrome = ""
  var longest_palindrome_length = 0
  for(let i = 0; i < str.length; i++){
    for(let j = str.length - 1; j > i; j--){
      sub_string = str.slice(i, j+1)
      if(isPalindrome(sub_string) && sub_string.length > longest_palindrome_length){
        longest_palindrome = sub_string
        longest_palindrome_length = sub_string.length
      }
    }
  }
  return longest_palindrome
}
console.log(longestPalindrome('Hot puree eruption!'));
