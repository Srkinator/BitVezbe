function multipleHa(str, num) {
    var newHa = "";
    for (var i = 0; i < num; i++) {
        newHa += str;
    }
    return newHa;
}
console.log(multipleHa("Ha", 3));