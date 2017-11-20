import React, { Component } from 'react';
import Post from '../posts/post';
import { Link } from "react-router-dom";

class PostsFromSameAuthor extends Component {
    constructor(props) {
        super(props);

        console.log('bla: ', props);
        this.state = {
            posts: []
        }
    }
    
    componentWillReceiveProps(nextProps){
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${nextProps.authId}`)
        .then(result => result.json())
        .then(result => {
            this.setState({
                posts: result
            });
        });
    }
    
    render() {
        return (
            <div>
                <h5> 3 more posts from same author </h5>
                {this.state.posts.slice(-3).map((item) => <AuthPosts title={item.title} key={item.id} postId={item.id} />)}
            </div>
        );
    }
}

const AuthPosts = function (props) {
    return (
        <Link to={"/SinglePostInfo/" + props.postId}>
            <div>
                <p>{props.title}</p>
            </div>
        </Link>
    );
};

export default PostsFromSameAuthor;