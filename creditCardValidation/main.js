"use strict";
console.log('hello  world')

function isCreditCardValid(digitArr){
    if(digitArr.length < 13 || digitArr.length > 19){
        console.log('invalid card (too few or too many digits)')
        return null
    }
    let last_digit = digitArr[digitArr.length - 1]
    digitArr.pop()
    console.log(digitArr)
    for(let i = digitArr.length - 1; i >= 0; i = i-2){
        digitArr[i] *= 2
        if(digitArr[i] > 9){
            digitArr[i] -= 9
        }
    }
    let sum = 0
    for(let i=0; i<digitArr.length; i++){
        sum += digitArr[i]
    }
    sum += last_digit
    if(sum % 10 == 0){
        console.log('valid cc')
        return true
    }
    else{
        console.log('invalid cc')
        return false
    }
}

isCreditCardValid([4, 8, 0, 7, 9, 6, 0, 3, 0, 4, 1, 4 , 8, 9, 5, 4])