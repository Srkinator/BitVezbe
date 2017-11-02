var dataControler = (function () {
    // data that will be our return
    var data = {
        movies: [],
        programs: [],
        totalMoviesLength: 0
    };
    // Movie constructor
    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    Movie.prototype.getInfo = function () {
        return 'movie: ' + this.title + ", duration: " + this.length + "min, genre: " + this.genre;
    }

    // Program constructor
    function Program(date) {
        this.date = new Date(date).getDate() + '. ' + new Date(date).getMonth() + '. ' + new Date(date).getFullYear() + '.';
        this.listOfMovies = [];
    }

    function calculateTotalLength() {
        var total = 0;

        // Iterate trough movies and calculate length
        data.movies.forEach(function (currentMovie) {
            total += currentMovie.length;
        });

        // Set our new total to our data object
        data.totalMoviesLength = total;
    }

    function getTotalLength() {

        // calculate total data before returning
        calculateTotalLength();

        return data.totalMoviesLength;
    }

    //function to be exported to the public
    function addMovie(title, length, genre) {
        var movie = new Movie(title, parseFloat(length), genre);

        data.movies.push(movie);

        return movie;
    }

    function addProgram(date) {
        var program = new Program(date);

        data.programs.push(program);

        return program;
    }

    return {
        addMovie: addMovie,
        addProgram: addProgram,
        getTotalLength: getTotalLength
    }

})()

var UIControler = (function () {

    function collectMovieInput() {
        var titleElement = document.querySelector('.movie-title');
        var lengthElement = document.querySelector('.movie-length');
        var genreSelectElement = document.querySelector('.genre-select');

        var result = {
            title: titleElement.value,
            length: lengthElement.value,
            genre: genreSelectElement.value,
        }

        return result;
    }

    function collectProgramInput() {
        var dateElement = document.querySelector('.program-date');

        var result = {
            date: dateElement.value
        }

        return result;
    }

    function displayMovieListItem(movie) {
        var containerForMovies = document.querySelector('.movie-list');

        var parag = document.createElement('p');
        var data = document.createTextNode(movie.getInfo());

        parag.appendChild(data);
        containerForMovies.appendChild(parag);
    }

    function displayProgramListItem(program) {
        var containerForPrograms = document.querySelector('.program-list');

        var parag = document.createElement('p');
        var data = document.createTextNode(program.date);

        parag.appendChild(data);
        containerForPrograms.appendChild(parag);
    }

    function displayAddedMovie(movie) {
        var movieSelectElement = document.querySelector('.movie-select');

        var optionElement = document.createElement('option');
        var dataNode = document.createTextNode(movie.title);

        optionElement.appendChild(dataNode);
        movieSelectElement.appendChild(optionElement);

    }

    function displayAddedProgram(program) {
        var programSelectElement = document.querySelector('.program-select');

        var optionElement = document.createElement('option');
        var dataNode = document.createTextNode(program.date);

        optionElement.appendChild(dataNode);
        programSelectElement.appendChild(optionElement);

    }

    function displayMovieError(input) {
        var error = "Unknown error";

        if (!input.title) {
            error = 'Please, insert title!';
        } else if (!input.length) {
            error = 'Please, insert length!';
        } else if (!input.genre) {
            error = 'Please, insert genre!';
        }

        var containerForError = document.querySelector('.movie-error');
        containerForError.textContent = error;
    }

    function displayProgramError(input) {
        var error = 'Insert date!';

        var containerForError = document.querySelector('.program-error');
        containerForError.textContent = error;
    }

    function clearFormInputs() {
        document.querySelector('form').reset();

    }

    function displayTotalLength(tLength) {

        // If length is not passed set default value
        tLength = tLength || '-';

        document.querySelector('.total-length span').textContent = String(tLength);
    }

    return {
        getMovieInput: collectMovieInput,
        getProgramInput: collectProgramInput,
        displayTotalLength: displayTotalLength,
        clearFormInputs: clearFormInputs,
        displayMovieListItem: displayMovieListItem,
        displayProgramListItem: displayProgramListItem,
        displayMovieError: displayMovieError,
        displayProgramError: displayProgramError,
        displayAddedMovie:displayAddedMovie,
        displayAddedProgram:displayAddedProgram
    };

})()

var mainControler = (function (dataCtrl, UICtrl) {

    function setupEventListeners() {

        document.querySelector('.create-movie').addEventListener('click', function () {

            ctrlAddMovieItem();

        });
        document.addEventListener('keydown', function (evt) {

            if (evt.keyCode === 13) {
                ctrlAddMovieItem();
            }
        });
        document.querySelector('.create-program').addEventListener('click', function() {

            ctrlAddProgramItem();

        });
        document.querySelector('.add-movie').addEventListener('click', function() {

            ctrlAddMovieToProgram();

        })
    }

    function ctrlUpdateTotalLength() {
        // Get calculated length
        var totalLength = dataCtrl.getTotalLength();

        // Update the UI with new total length
        UICtrl.displayTotalLength(totalLength);
    }

    function ctrlAddMovieItem() {
        // 1. get form data (UI)
        var input = UICtrl.getMovieInput();

        //1.1 Validate data for errors
        if (!input.title || !input.genre || !input.length) {
            UICtrl.displayMovieError(input);
            return;
        }

        //2.  Add movie to list
        var movie = dataCtrl.addMovie(input.title, input.length, input.genre);

        //3. Clear form inputs
        UICtrl.clearFormInputs();

        //4. show list on UI
        UICtrl.displayMovieListItem(movie);

        //5. Update total length UI
        ctrlUpdateTotalLength();

        //6. Add movie to MOVIE/PROGRAM list bellow 
        UICtrl.displayAddedMovie(movie);

    }

    function ctrlAddProgramItem() {
        //1. get form data
        var input = UICtrl.getProgramInput();

        //1.1 handle errors here
        if (!input.date) {
            UICtrl.displayProgramError(input);
            return;
        }

        //2. Add program to list
        var program = dataCtrl.addProgram(input.date);

        //3. Clear form input
        UICtrl.clearFormInputs();

        //4. show list on UI
        UICtrl.displayProgramListItem(program);

        //5. Add program to MOVIE/PROGRAM list bellow
        UICtrl.displayAddedProgram(program);
    }

    function ctrlAddMovieToProgram() {
        console.log("Adding movie to the program... please wait...");
    }

    return {
        init: function () {
            setupEventListeners();
            UICtrl.clearFormInputs();
        }
    }

})(dataControler, UIControler);

mainControler.init();