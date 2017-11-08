var os = require('os');

    var observers = [];
    function run() {
        var x = Math.round(os.freemem() / 1024 / 1024);

        if (x > 0) {
            notifyAll(x);
        }
    };
    function notifyAll(x) {
        for(var i = 0; i< observers.length; i++){
           var obs = observers[i];
            console.log("RADI" + x );
        };
    };

    function subscribe(observer) {
        observers.push(observer);
    };
  
module.exports.run = run;
module.exports.subscribe = subscribe;