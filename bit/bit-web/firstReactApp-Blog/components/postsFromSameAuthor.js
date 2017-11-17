import React, { Component } from 'react';
import Post from './post';

class PostsFromSameAuthor extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <h5> 3 more posts from same author </h5>
            </div>
        );
    }
}

export default PostsFromSameAuthor;