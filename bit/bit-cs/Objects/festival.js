(function () {
    console.log();

    var zanr = new Genre('triler');
    console.log(zanr.getData());
    var film = new Movie('Superman', zanr, 123)
    console.log(film.getData());
    var program = new Program('May 23 2005');
    console.log(program.getData());

})();

function Genre(name) {
    this.name = name;

    this.getData = function () {
        var output = this.name[0] + this.name[this.name.length - 1];
        return output.toUpperCase();
    };

}

function Movie(title, genre, length) {
    this.title = title;
    this.length = length;

    this.getData = function () {
        var output = this.title + ", " + this.length + ", " + genre.getData();
        return output;

    }
}

function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.totalNumOfMovies = 0;

    this.getData = function () {
        var output = "";
        for (var i = 0; i < listOfMovies.length; i++) {
            output += listOfMovies[i];
            return output;
        }
    }
    this.addMovie = function (movie) {
        this.listOfMovies.push(movie)
    }
}

function Festival(name, listofPrograms, numOfAllMovies) {
    this.name = name;

    this.addProgram = function (programm) {
        this.listofPrograms.push(programm);
    }
    this.getData = function (){
        
    }
}
