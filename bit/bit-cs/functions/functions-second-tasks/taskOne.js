function checkString(input) {
    if (typeof input === "string") {
        console.log(true);
    } else if (typeof input === "number") {
        console.log(false);
    } else {
        console.log("Something is not right");
    }
}
checkString(2);