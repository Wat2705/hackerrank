function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appDis = new Array(apples.length);
    let oraDis = new Array(oranges.length);
    let countApple = 0;
    let countOrange = 0;
    for(let i = 0; i < apples.length; i++){
        appDis[i] = apples[i] + a;
        if(appDis[i] >= s && appDis[i] <= t){
            countApple++;
        };
    };
    for(let i = 0; i < oranges.length; i++){
        oraDis[i] = oranges[i] + b;
        if(oraDis[i] >= s && oraDis[i] <= t){
            countOrange++;
        };
    };
    console.log(countApple + "\n" + countOrange);
}

countApplesAndOranges(2, 3, 1, 5, [2], [-2]);