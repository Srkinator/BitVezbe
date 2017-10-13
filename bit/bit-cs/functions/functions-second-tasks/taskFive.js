function checkForChar(str, char) {
    var charRes = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            charRes++;
        }
    }
    console.log(charRes);
}

checkForChar("My randnom string", "n")