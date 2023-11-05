function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if(v1 > v2){
        if((x2 - x1) / (v1 - v2) % 1 === 0){
            return "YES";
        }
    };
    return "NO";
}

console.log(kangaroo(0, 2, 5, 3));