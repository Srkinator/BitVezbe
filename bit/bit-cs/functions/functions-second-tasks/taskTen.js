function changeSpace(str, dash) {
    var newstr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            newstr += dash;
        } else {
            newstr += str[i];
        }
    }
    return newstr;
}
console.log(changeSpace("My random string", "#"));