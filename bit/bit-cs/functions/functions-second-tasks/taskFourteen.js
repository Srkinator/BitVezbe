function yearRetirement(yearOfBirth, currentYear, gender) {
    if (gender === "male") {
        return yearOfBirth + 65 - currentYear;
    } else if (gender === "female") {
        return yearOfBirth + 60 - currentYear;
    } else {
        return "Somethig is not right";
    }
}
console.log(yearRetirement(1993, 2017, "fema"));