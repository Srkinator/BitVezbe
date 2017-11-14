import React from "react";
import Post from "./post";
// import data from "../data";


class Authors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authors: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(result => result.json())
            .then(result => {
                this.setState({
                    authors: result
                });
            });
    }

    render() {
        const numberOfAuthors =  this.state.authors.length
        return (
            <div className="container">
                <div className="row">
                <h1 style={{ textAlign: "center", marginBottom: "100px"}}>AUTHORS ({numberOfAuthors})</h1>
                    {this.state.authors.map((item) => <Author name={item.name} key={item.id} />)};
                </div>
            </div>
        );
    }
}

const Author = function (props) {
    return (
        <div>
            <p>{props.name}</p>
            <hr/>
        </div>
    );
};

export default Authors;