function suffix(arr){
  reverse_arr = []
  for(var i = 0; i < arr.length; i++){
    str_arr = arr[i].split("")
    rev_str_arr = str_arr.reverse()
    rev_str = rev_str_arr.join("")
    reverse_arr.push(rev_str)
  }
  max_length = max(arr)
  rev_suffix = cutdown(reverse_arr, max_length)

  for(var i = 0; i < rev_suffix.length; i++){
    rev_suffix_arr = arr[i].split("")
    forward_suffix_arr = str_arr.reverse()
    forward_suffix_str = rev_str_arr.join("")
    return forward_suffix_str
  }
  return forward_sufix
}

function cutdown(arr, index){
  match_arr = []
  
  for(var i = 0 ; i < reverse_arr.length; i++){
    match_arr.push(reverse_arr[i].slice(0, index))
  }
  if(equal(match_arr) == false){
    // console.log(equal(match_arr))
    index--
    cutdown(arr, index)
  }
  if(equal(match_arr) == true){
    return match_arr[0]
  }
}

function equal(arr){
  is_equal = true
  for(var i = 0; i < arr.length - 1; i++){
    if(arr[i] != arr[i+1]){
      is_equal = false
    }
  }
  return is_equal
}

function max(arr){
  max_length_i = 0
  for(var i = 0 ; i < arr.length; i++){
    if(arr[i].length > arr[max_length_i].length){
      max_length_i = i
    }
  }
  max_length = arr[max_length_i].length
  return max_length
}

suffix(['summation', 'dalmation', 'mation']);