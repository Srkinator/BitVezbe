import Request from './request';
import Structure from './structure';


let structure = new Structure();
let request = new Request();

class Index {
    constructor() {}
    
    activateListeners() {
        document.addEventListener('keypress', ({keyCode}) => {
            if (keyCode === 13) {
                request.getFormData(builderData);
            } 
            function builderData(data) {
                let single = new Structure(data.name, data.sys.country, data.main.temp, data.weather[0].description);
                console.log(single.getData());
            }
        });
    }
}

let index = new Index();
index.activateListeners();