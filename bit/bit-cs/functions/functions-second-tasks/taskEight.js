function convToArray(str) {
    var output = [];
    var blankSpace = " ";
    for (var i = 0; i < str.length; i++) {
        output[i] =  str[i];
    }
    return output;
}
console.log(convToArray("random"));