let subject= require('./subject');
let observer = require('./observer');


subject.subscribe(observer.notify);
subject.run();

