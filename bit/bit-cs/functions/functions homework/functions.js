"use strict";


// 1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

/*
   "My random string", "JS " -> "JS My random string"
   "My random string", "JS ", 10 -> "My random JS string"
*/

function insertString(sentence, word, position) {
    position = position || 1;

    var str1 = '';
    var str2 = '';
    var strFinal = '';

    for (var i = 0; i < position - 1; i++) {
        str1 += sentence[i];
    }

    for (var i = position - 1; i < sentence.length; i++) {
        str2 += sentence[i];
    }

    strFinal = str1 + word + str2;

    return strFinal;
}

// console.log(insertString("Bacite pogled", "sta pise", 14));

// 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

function joinString(arr) {
    var joint = '';

    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'undefined' || arr[i] == null || arr[i] == 'NaN' || arr[i] == 'Infinity') {
            continue;
        } else {
            joint += arr[i];
        }
    }

    return joint;
}

// console.log(joinString([11, false, "Song", undefined, null, Infinity, NaN, "Singer"]));

// 3. Write a program to filter out falsy values from the array.

function falsey(arr) {
    var newFalsey = [];
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        if (!!arr[i] === true) {
            newFalsey[i - counter] = arr[i];
        } else {
            counter++;
        }
    }

    return newFalsey;
}

// console.log(falsey([10, '', true, false, 10, null]));

// 4. Write a function that reverses a number. Result must be of type number.

function reverseMe(num) {
    var newStr = '';
    var str = String(num);

    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    var result = parseInt(newStr);

    return result;
}

// console.log(reverseMe(5299));

// 5. Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

function lastElements(arr, count) {
    count = count || 1;
    var result = [];

    for (var i = arr.length - count; i < arr.length; i++) {
        result[i - (arr.length - count)] = arr[i];
    }

    return result;
}

// console.log(lastElements([5, 10, 15, 20, 25, 30, 35], 5))

// 6. Write a function to create a specified number of elements with pre-filled numeric value array.

function copy(times, item) {
    var arr = [];

    for (var i = 0; i < times; i++) {
        arr[i] = item;
    }

    return arr;
}

// console.log(copy(7, "undefined"));

// 7. Write a function which says whether a number is perfect.

function perfectNum(num) {
    var div = 0;
    for (var i = 0; i < num; i++) {
        if (num % i === 0) {
            div += i;
        }
    }
    if (num === div) {
        console.log("Number is perfect," + num)
    }
}
// perfectNum(28);

// 8.Write a function to find a word within a string.

function findWorder(str, word) {
    var data = '';
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (word[0] == str[i]) {
            for (var j = 0; j < word.length; j++) {
                if (word[j] == str[i + j]) {
                    data += word[j];
                    if (data == word) {
                        count++;
                        data = '';
                    }
                }
            }
        }
    }
    return (word + " se ponavlja " + count + " puta");
}

//console.log(findWorder("The quick fox brofoxwn ffffffffox", "fox"));

//9.Write a function to hide email address.

function emailHider(mail) {
    var hiddenMail = "";
    var newMail =""
    var result = '';
    for (var i = mail.length - 1; i>=0 ; i--) {
        hiddenMail += mail[i];
        if (mail[i] == '@') {
            hiddenMail+= "...";
            break;
        } 
    }

    for(var j=hiddenMail.length -1 ;j>=0; j--){
        newMail+=hiddenMail[j];
    }
    result = mail[0] + mail[1] + mail[2] + newMail;

    return result;
}   


//console.log(emailHider("novakdjokovic@srb.com"));

// 10. Write a program to find the most frequent item of an array.

function mostCommon(array) {
    var min = 0;
    var max = 0;
    var item = '';

    for (var i = 0; i < array.length; i ++) {
        for (var j = 0; j < array.length; j ++) {
            if (array[i] == array[j]) {
                min++;
            }
        }
        if (min >= max) {
            max = min;
            item = array[i];
        }
        min = 0;
    }
    return "Najcesce se javlja item: " + item + " i ponavlja se " + max + " puta."
}

console.log(mostCommon([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2,3,3,3, 4, 9, 3]));