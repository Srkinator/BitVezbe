import React from "react";
import Post from "./post";
import data from "../data";

const divStyle = {
    color: 'blue',
    background: 'red'
};
const MainContent = function () {
    return (
        <div style = {divStyle}>
            {data.posts.map((item) => {
                return <Post post={item} key={item.id} />;
            })}
        </div>
    );
};

export default MainContent;