import React from "react";
import Post from "./post";
// import data from "../data";


class MainContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                });
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <h1 style={{ textAlign: "center", marginBottom: "100px"}}>POSTS</h1>
                {this.state.data.slice(-5).map((item) => <Post title={item.title} body={item.body} key={item.id} />)};
                </div>
            </div>
        );
    }
}
export default MainContent;
