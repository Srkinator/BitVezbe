import React from "react";
import PostsFromSameAuthor from "./postsFromSameAuthor";

class SinglePostInfo extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            posts: {

            },
        };
    }

    fetchPost(postId) {
        postId = postId || this.props.match.params.id;

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(result => result.json())
            .then(result => {
                this.setState((prevState, props) => ({ posts: result }));
            });
    }

    componentDidMount() {
        this.fetchPost();
    }

    componentWillReceiveProps(nextProps) {
        this.fetchPost(nextProps.match.params.id);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <p onClick={this.props.history.goBack} className="waves-effect waves-light btn"> Back </p>
                    <h3 style={{ textAlign: "center", marginBottom: "100px" }}>{this.state.posts.title} no.{this.props.match.params.id}</h3>
                    <p style={{ textAlign: "center", marginBottom: "100px" }}>{this.state.posts.body}</p>
                    <hr />
                    <PostsFromSameAuthor authId={this.state.posts.userId} />
                </div>
            </div>
        );
    }
}
export default SinglePostInfo;

