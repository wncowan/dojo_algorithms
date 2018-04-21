"use strict";
console.log('hello  world')

function elements_equal(arr){
  for(let i = 0; i < arr.length-1; i++){
    if(arr[i] != arr[i+1]){
      return false
    }
  }
  return true
}

function shortest_str_length(arr){
  let shortest_length = arr[0].length
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length < shortest_length){
      shortest_length = arr[i].length
    }
  }
  return shortest_length
}

function commonSuffix(arr) {
  let equal = false
  let suffix_arr = []
  let shortest_length = shortest_str_length(arr)
  console.log('shortest_length: ', shortest_length)
  for(let i = shortest_length; i >=  0; i--){
    for(let j = 0; j < arr.length; j++){
      suffix_arr[j] = arr[j].slice(arr[j].length - i)
    }
    console.log()
    if(elements_equal(suffix_arr)){
      return suffix_arr[0]
    }
    console.log('suff arr:', suffix_arr)
  }
  return ''
}
console.log(commonSuffix(['dalmation', 'vacation', 'incarceration','ration']));
