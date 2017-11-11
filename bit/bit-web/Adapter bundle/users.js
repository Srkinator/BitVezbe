import axios from 'axios';

class Users {

    getUsers(handler) {
        axios.get('http://api.github.com/search/users?q=tom')
            .then(function (response) {
                handler(response.data.items);
            });
    }
}

export default Users;
