var grades = [80, 77, 88, 95, 68];
var avrGrade = 0;

for (var i = 0; i < grades.length; i++) {
    avrGrade += grades[i] / grades.length;
}

if (avrGrade < 60) {
    console.log("F");
} else if (avrGrade > 60 && avrGrade < 70) {
    console.log("D");
} else if (avrGrade > 70 && avrGrade < 80) {
    console.log("C");
} else if (avrGrade > 80 && avrGrade < 90) {
    console.log("B");
} else if (avrGrade > 90) {
    console.log("A");
} else {
    console.log("Something is not right");
}
