function staircase(n) {
    // Write your code here
    let result = new Array(n);
    result.fill(' ', 0, n);
    for(let i = n; i > 0; i--){
        result[i - 1] = "#";
        console.log(result.toString().replaceAll(',', ''));
    }
}

staircase(10);