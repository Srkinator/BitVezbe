function sumNums(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum += i * i;
    }
    console.log(sum);
}
sumNums(2);