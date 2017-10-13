var day = 15;

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Its weekday");
        break;
    case 6:
    case 7:
        console.log("Its weekend");
        break;
    default:
        console.log("Input must be number between 1 and 7");
        break;
}