function firstNNumbers(str, num) {
    var newString = "";
    for (var i = 0; i < str.length; i++) {
        newString += str[i];
        if (i === (num - 1)) {
            return newString + "...";
        }
    }
    return newString;
}
console.log(firstNNumbers("asdfdadadadada", 7));