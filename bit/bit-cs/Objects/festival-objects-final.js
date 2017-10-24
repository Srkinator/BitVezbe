"strict mode";

(function () {

    console.log("Hi!");

    function createMovie(title, length, genre) {
        // if (typeof(length) == "number") {throw new Error("eror again!")}
        
        var movie = new Movie(title, genre, length);
        return movie;
        
    };

    function createProgram(date) {
        var program = new Program(date);
        return program;
    };

    var fest = new Festival("FEST");

    var pg1 = createProgram(new Date("Oct 24, 2017"));
    var pg2 = createProgram(new Date("Oct 25, 2017"));
    
    var scream = createMovie("Scream", 120, "SF");
    var gg = createMovie("sdfsdfsdfs", 111, "SF");
    var gggg = createMovie("kjkjhkkh", 111, "SF");
    var matrix = createMovie("Matrix", 130, "SF");
    var tito = createMovie("Tito i ja", 95, "SF");
    var snatch = createMovie("Snatch", 101, "SF");
   



    pg1.addMovie(matrix);
    pg1.addMovie(tito);
    pg1.addMovie(snatch);
    pg1.addMovie(scream);
    pg1.addMovie(gg);
    pg1.addMovie(gggg);



    // pg2.addMovie(matrix);
    // pg2.addMovie(tito);
    // pg2.addMovie(snatch);
    // pg2.addMovie(scream);

    fest.addProgram(pg1);
    fest.addProgram(pg2);

    console.log(fest.getData());
})();

function Genre(name) {
    this.name = name;
    this.getData = function () {
        var output = this.name.charAt(0) + this.name.charAt(name.length - 1);
        var result = output.toUpperCase();
        return result;
    };
}

function Movie(title, genre, length) {
    this.title = title;
    this.genre = new Genre(genre);
    this.length = length;
    this.getData = function () {
        var result = this.title + ", " + this.length + ", " + this.genre.getData();
        return result;
    };



}

function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.numberOfMovies = 0;
    var programLength = 0;
    this.getData = function () {
       
        var output = "";
        for (var i = 0; i < this.listOfMovies.length; i++) {
            var movie = this.listOfMovies[i];
            programLength += movie.length;
            if (programLength >400){
                throw new Error("TOTAL LENGTH EXCEEDED")
            }
            output += movie.getData() + "\n";
        }
        var result = this.date + ", Length of all movies: " + programLength + "\n" + output;
        return result;
    };
    this.addMovie = function (movie) {
        var counter = 1;
        for (var i = 0; i < this.listOfMovies.length; i++) {
          
            if (movie.genre.name === this.listOfMovies[i].genre.name) {
                counter++;
            }
        }
      
        // var totLength
        // for () {
        //     totLength = totLength + movie.length
        // }
        

       

        if (counter <= 4) {
           var maxNumberOfMovies = 3; 
            this.numberOfMovies++;
            if(typeof(maxNumberOfMovies) != "number"){
                throw new Error("OMG ERROR")
            }
            
             if(this.numberOfMovies>maxNumberOfMovies){
                console.log("Maximum number of movies exceeded")
            }
            else{
            this.listOfMovies.push(movie);
            }
        
    } 

    if (this.numberOfMovies > 3) {}


    }
}


function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numberOfPrograms = 0;
    this.getData = function () {
        var totalNoOfMovies = 0;
        var output = "";
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            var program = this.listOfPrograms[i];
            totalNoOfMovies += program.numberOfMovies;
            output += program.getData() + "\n";
        }
        var result = this.name + ", Total number of movies: " + totalNoOfMovies + "\n" + output;
        return result;
    };
    this.addProgram = function (program) {
        this.listOfPrograms.push(program);
        this.numberOfPrograms++;
        //this.listOfPrograms =[];

    } 
    if(this.listOfPrograms == false ){
        console.log("Program will be announced")
    }
}
