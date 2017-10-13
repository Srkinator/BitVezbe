function toHumanNum(num){
    if(num === 1){
        return (num + "st");
    } else if (num === 2){
        return (num + "nd");
    } else if (num === 3) {
        return (num + "rd");
    } else if (num != 1 && num != 2 && num != 3){
        return (num + "th");
    }
}
console.log(toHumanNum(51));