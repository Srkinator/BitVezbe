import React from "react";
import PropTypes from "prop-types";

const Post = function (props) {
    return (
        <div>
            {/* <img width="100%" src ="http://a.espncdn.com/photo/2017/0214/r180742_1600x800cc.jpg"/> */}
            <h3>{props.title}</h3>
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