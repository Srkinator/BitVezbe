import UserThings from './adapterUsers';
import ReposThings from './adapterRepos';

let outputElement = $('<ul>');
function run() {
    new UserThings().getThings(function (data) {

        data.forEach(function (element) {
            let listElement = $('<li>');

            let name = element.name;
            let avatar = element.avatar;
            let img = $('<img>');
            img.attr('src', avatar);
            listElement.text(name);
            listElement.append(img);
            outputElement.append(listElement);
        });

        $('div').append(outputElement);
        console.log(data);
    });

}

run();
