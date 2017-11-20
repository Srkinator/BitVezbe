import React from "react";
import Post from "./post";
import Search from "../common/search";
import Timer from "../common/timer";

class MainContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newPosts: [],
            posts: [],
            filteredPosts: [],
            searchString: ''
        };
        this.catchSearch = this.catchSearch.bind(this);
        this.filterResults = this.filterResults.bind(this);
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(result => result.json())
            .then(result => {
                let newPosts = localStorage.getItem('posts');
                if (newPosts) {
                    let parsed = JSON.parse(newPosts);
                    let parsedPosts = parsed.reverse();
                    this.setState({ posts: result, filteredPosts: result, newPosts: parsedPosts });
                }
                else {
                    this.setState({ posts: result, filteredPosts: result })
                }
            });
    }

    filterResults() {
        return [...this.state.newPosts, ...this.state.posts].filter((post) => {
            return post.title.includes(this.state.searchString);
        });

        this.setState({ filteredPosts });
    }

    catchSearch(searchString) {
        this.setState({ searchString });
    }

    renderPosts() {
        return this.filterResults().map((item) => {
            return (<Post title={item.title} body={item.body} key={item.id} postId={item.id} userId={item.userId} />);
        });

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Timer />
                    <p onClick={this.props.history.goBack} className="waves-effect waves-light btn"> Back </p>
                    <h1 style={{ textAlign: "center" }}>POSTS</h1>
                    <Search dispatch={this.catchSearch} instant={true} /> {this.renderPosts()}
                </div>
            </div>
        );
    }
}
export default MainContent;
