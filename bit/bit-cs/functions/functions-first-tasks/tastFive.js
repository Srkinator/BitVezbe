function printStr(arry) {
    var newStr = "";
    for (var i = 0; i < arry.length; i++) {
        newStr += arry[i] + " ";
    }
    console.log(newStr);
}
printStr(['1', 'A', 'B', "c", "r", true, NaN, undefined]);