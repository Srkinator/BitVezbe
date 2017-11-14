import React from "react";
import PropTypes from "prop-types";

const Post = function (props) {
    return (
        <div>
            <img width="100%" src ="http://a.espncdn.com/photo/2017/0214/r180742_1600x800cc.jpg"/>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <hr />
        </div>
    );
};

// Post.defaultProps = {
//     post: {title: "DEFAULT TITTLE"}
// };

// Post.propTypes = {
//     title: PropTypes.string.isRequired
// };

export default Post;