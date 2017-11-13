import React from "react";

const Post = function (props) {
    return (
        <div>
            <h1>{props.post.title}</h1>
            <p>{props.post.body}</p>
            <hr/>
        </div>
    );
};

export default Post;