function sumMultyNums(maxNum, minNum) {

    var sum = 0;
    minNum = minNum || 0;
    if (minNum > maxNum) {
        var temp = 0;
        temp = minNum;
        minNum = maxNum;
        maxNum = temp;
    }
    for (var i = minNum; i <= maxNum; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            sum += i;
        }
    }
    console.log(sum);
}
sumMultyNums(100, 1000);