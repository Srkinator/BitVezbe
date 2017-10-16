function numberHumanizer(num) {
    if (num === 1) {
        return num + "st";
    }
    if (num === 2) {
        return num + "nd";
    }
    if (num === 3) {
        return num + "rd";
    }
    if (num != 1 && num != 2 && num != 3) {

        return num + "th";



    }
}


var x = numberHumanizer(5);
console.log(x);