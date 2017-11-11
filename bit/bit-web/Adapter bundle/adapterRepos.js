import Repos from './repos';
import Things from './things';

class ReposThing {
    getThings(handler) {

        new Repos().getRepos(function (items) {
            var arr = [];
            for (let i = 0; i < items.length; i++) {
                let name = items[i].name;
                let avatar = items[i].owner.avatar_url;
                let item = new Things(name, avatar);
                arr.push(item);
            }
            handler(arr);
        });
    }
}
export default ReposThing;
