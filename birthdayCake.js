function birthdayCakeCandles(candles) {
    // Write your code here
    candles.sort((a, b) => a - b);
    let max = candles[candles.length - 1];
    let count = 1;
    for(let i = candles.length - 2; i >= 0; i--){
        if(max == candles[i]){
            count++;
        }
    }
    console.log(count);
}

birthdayCakeCandles([1, 1, 1, 1, 1]);