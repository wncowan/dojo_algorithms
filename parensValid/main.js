"use strict";
console.log('hello  world')

function parensValid(str) {
  var open_count = 0
  var closed_count = 0 
  for(var i = 0; i < str.length; i++){
    if(str[i] == '('){
      open_count++
    }
    else if(str[i] == ')'){
      closed_count++
    }
    if(closed_count > open_count){
      console.log('more closing parens than opening')
      return false
    }      
  }
  console.log('closed:', closed_count)
  console.log('open:', open_count)
  if(open_count != closed_count){
    console.log('more open than closed')
    return false
  }
  else{
    console.log('valid parens')
    return true
  }
}
parensValid('(())((()))))))');
