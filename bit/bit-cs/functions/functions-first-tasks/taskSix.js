function printNum(array){
    for( var i = 0; i< array.length; i++){
        for(var j = 0; j < array[i].length; j++){
            console.log(array[i][j]);
        }
    }
}

printNum([ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27] ]);