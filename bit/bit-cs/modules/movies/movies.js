'use strict';

Genre.prototype.getData = function () {
    return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
}
Movie.prototype.getData = function () {
    var result = this.name + ', ' + this.length + ', ' + this.genre.getData();
    return result;
}

Program.prototype.combinedMovieLength = function () {
    var lengthCount = 0;
    for (var i = 0; i < this.listOfMovies.length; i++) {
        lengthCount += this.listOfMovies[i].length;
    }
    return lengthCount;
}

Program.prototype.getData = function () {
    var result = '';
    for (var i = 0; i < this.listOfMovies.length; i++) {
        result = result + '\t\t' + this.listOfMovies[i].getData() + '\n';
    }
    return '\t' + this.date + ', ' + this.combinedMovieLength() + '\n\n' + result + '\n';
}

Program.prototype.addMovie = function (movie) {
    var count = 0;
    for (var i = 0; i < this.listOfMovies.length; i++) {
        if (movie.genre.name === this.listOfMovies[i].genre.name) {
            count++;
        }
    }
    if (this.combinedMovieLength() + movie.length > 480) {
        return 'You already exceeded allowed combined movie length.';
    } else if (count > 4) {
        return 'You already have 4 movies of the same genre';
    } else {
        this.listOfMovies.push(movie);
    }
}

Festival.prototype.totalMovieNumber = function () {
    var count = 0;
    for (var i = 0; i < this.listOfPrograms.length; i++) {
        count += this.listOfPrograms[i].listOfMovies.length;
    }
    return count;
}

Festival.prototype.getData = function () {
    var result = '';
    for (var i = 0; i < this.listOfPrograms.length; i++) {
        result += this.listOfPrograms[i].getData();
    }
    if (this.totalMovieNumber() === 0) {
        return this.name + '\n\t Program to be announced';
    } else {
        return this.name + ', ' + this.totalMovieNumber() + '\n\n' + result;
    }
}

Festival.prototype.addProgram = function (program) {
    if (this.maximumMovies < this.totalMovieNumber() + program.listOfMovies.length) {
        throw new Error('You have exceded number of movies for this festival!');
    } else {
        this.listOfPrograms.push(program);
    }
}

function Genre(name) {
    this.name = name || 'none';
}

function Movie(title, genre, length) {
    this.name = title;
    this.genre = genre;
    if (length > 60 && typeof length === 'number') {
        this.length = length;
    } else {
        throw new Error('Check your movie parameters again: Title should be String, Genre - an Object, and length an integer!');
    }
}

function Program(date) {
    this.date = 'Day: ' + new Date(date).getDate() + ', Month: ' + new Date(date).getMonth() + ', Year: ' + new Date(date).getFullYear();
    this.listOfMovies = [];
    this.numberOfMovies = 0;
}

function Festival(name, maximumMovies) {
    this.name = name;
    this.listOfPrograms = [];
    this.maximumMovies = maximumMovies;
}

(function () {
    function createMovie(movieTitle, movieLength, stringGenre) {
        var genre = new Genre(stringGenre);
        var movie = new Movie(movieTitle, genre, movieLength);
        return movie;
    }

    function createProgram(date) {
        var newProgram = new Program(date);
        return newProgram;
    }


    var filmex = new Festival('Filmex Fest', 6);

    var adults = createProgram('Oct 21 2017');
    var kids = createProgram('2011 01 05');

    var titanik = createMovie('Titanik', 190, 'drama');
    var thor = createMovie('Thor', 127, 'action');
    var inception = createMovie('Inception', 180, 'sci-fi');
    var alien = createMovie('Alien', 143, 'horror');

    adults.addMovie(titanik);
    adults.addMovie(thor);
    adults.addMovie(inception);
    adults.addMovie(alien);

    kids.addMovie(titanik);
    kids.addMovie(thor);
    kids.addMovie(inception);
    kids.addMovie(alien);

    filmex.addProgram(adults);
    filmex.addProgram(kids);

    console.log(filmex.getData());
})();