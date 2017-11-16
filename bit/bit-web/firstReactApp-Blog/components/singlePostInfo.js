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
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    posts: result
                });
            });
    }

    render(){
        return (
            <div className ="container">
                <div className = "row">
                    <h3 style={{ textAlign: "center", marginBottom: "100px"}}>{this.state.posts.title} no.{this.props.match.params.id}</h3>
                    <p style={{ textAlign: "center", marginBottom: "100px"}}>{this.state.posts.body}</p>
                    <hr />
                    <PostsFromSameAuthor/>
                </div>
            </div>
        );
    }
}
export default SinglePostInfo;

