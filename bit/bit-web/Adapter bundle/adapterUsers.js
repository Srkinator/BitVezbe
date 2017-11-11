import Users from './users';
import Things from './things';


class UserThings {

    getThings(handler) {

        new Users().getUsers(function (items) {
            var arr = [];
            for (let i = 0; i < items.length; i++) {
                let name = items[i].login;
                let avatar = items[i].avatar_url;
                let item = new Things(name,avatar);
                arr.push(item);
            }
            handler(arr);
        }

        );
    }
}

export default UserThings;