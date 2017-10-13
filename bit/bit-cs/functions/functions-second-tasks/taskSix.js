function checkForIndex(str, char) {
    var charIndex = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i + 1;
        }
    }
}


console.log(checkForIndex("blabla", "b"));