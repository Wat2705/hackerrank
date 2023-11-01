function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    let maxSum = 0;
    let minSum = 0;
    for(let i = 0; i < arr.length; i++){
        maxSum += (i < arr.length - 1) ? arr[i] : 0;
        minSum += (i > 0) ? arr[i] : 0;
    }
    console.log(maxSum, minSum);
}

let arr = [539674108, 549382170, 270968351, 746219035, 140597628];

miniMaxSum(arr);

//Expected Output: 1500622257 2106243664