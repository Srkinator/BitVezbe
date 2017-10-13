function checkPrime(num){
    if(num % num === 0 && num % 1 === 0){
        console.log(num);
    } else {
        console.log("Its not");
    }
}
console.log(checkPrime(16));