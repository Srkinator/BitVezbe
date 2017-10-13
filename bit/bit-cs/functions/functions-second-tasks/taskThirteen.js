function arrayToStringConvertor(array) {
    var nums = [];
    for (i = 0; i < array.length; i++) {
        if (!isNaN(parseFloat(array[i]))) {
            nums[i] = parseFloat(array[i]);
        }
    }
    return nums;
}

console.log(arrayToStringConvertor(["2", "5", "asd", "12", "52.25", true]));