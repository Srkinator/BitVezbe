import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SinglePostInfo from "./singlePostInfo";

const Post = function (props) {
    return (
        <Link to={"/SinglePostInfo/" + props.postId}>
            <div className="hoverable">
                <h3>{props.title}</h3>
                <p>{props.body}</p>
            </div>
        </Link>
    );
};

// Post.defaultProps = {
//     post: {title: "DEFAULT TITTLE"}
// };

// Post.propTypes = {
//     title: PropTypes.string.isRequired
// };

export default Post;