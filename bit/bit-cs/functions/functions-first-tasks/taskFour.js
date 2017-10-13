function sumProd(array) {
    var sum = 0;
    var product = 1;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
        product *= array[i];
    }
    console.log(product);
}
sumProd([2, 3, 3]);