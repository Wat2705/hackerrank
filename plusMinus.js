'use strict';

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let sumPos = 0;
    let sumNeg = 0;
    let sumZero = 0;
    for(let i = 0; i < arr.length; i++){
        sumPos += arr[i] > 0;
        sumNeg += arr[i] < 0;
        sumZero += arr[i] == 0;
    }
    console.log(sumPos/arr.length + "\n" + sumNeg/arr.length + "\n" + sumZero/arr.length);
}

let arr = [-4, 3, -9, 0, 4, 1];

plusMinus(arr);