import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SingleAuthorInfo from "./singleAuthorInfo";


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
        const numberOfAuthors = this.state.authors.length;
        return (
            <div className="container">
                <div className="row">
                <p onClick={this.props.history.goBack} className="waves-effect waves-light btn"> Back </p>
                    <h1 style={{ textAlign: "center", marginBottom: "100px" }}>AUTHORS ({numberOfAuthors})</h1>
                    {this.state.authors.map((item) => <Author name={item.name} key={item.id} authId={item.id} />)}
                </div>
            </div>
        );
    }
}

const Author = function (props) {
    return (
        <Link to={"/SingleAuthorInfo/" + props.authId}>
            <div>
                <p>{props.name}</p>
                <hr />
            </div>
        </Link>
    );
};

export default Authors;