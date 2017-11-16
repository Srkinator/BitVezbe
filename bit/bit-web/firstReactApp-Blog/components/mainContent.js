import React from "react";
import Post from "./post";
import Search from "./search";
// import data from "../data"; import Timer from "./timer";

class MainContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            filteredPosts: []
        };

        this.catchSearch = this.catchSearch.bind(this);
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(result => result.json())
            .then(result => {
                this.setState({ posts: result, filteredPosts: result });
            });
    }

    catchSearch(searchString) {

        if (!searchString) {
            this.setState({ filteredPosts: this.state.posts });
            return;
        }

        const filteredPosts = this.state.posts.filter((post) => {
            return (post.title.indexOf(searchString) > -1);
        });

        this.setState({ filteredPosts });
    }

    renderPosts() {
        return this.state.filteredPosts.map((item) => {
            return (<Post title={item.title} body={item.body} key={item.id} postId={item.id} userId={item.userId} />);
        });
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <h1 >POSTS</h1>
                    <Search dispatch={this.catchSearch} /> {this.renderPosts()}
                </div>
            </div>
        );
    }
}
export default MainContent;
