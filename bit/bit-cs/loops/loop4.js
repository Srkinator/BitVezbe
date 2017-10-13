var strArr = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var newStr = "";

for (var i = 0; i < strArr.length; i++) {
    newStr += strArr[i] + " ";
}
console.log(newStr);