function checkForIndex(str, char) {
    var charIndex = 0;
    for (var i = str.length; i > 0; i--) {
        if (str[i] === char) {
            return i + 1;
        }
    }
}


console.log(checkForIndex("blablac", "c"));