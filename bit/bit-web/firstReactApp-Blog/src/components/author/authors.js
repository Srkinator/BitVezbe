import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SingleAuthorInfo from "./singleAuthorInfo";
import Search from "../common/search";


class Authors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authors: [],
            searchString: "",
            filter: []
        };

        this.renderAuthors = this.renderAuthors.bind(this);
        this.catchSearch = this.catchSearch.bind(this);
        // this.filterResults = this.filterResults.bind(this);
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

    filterResults() {
        return this.state.authors.filter((author) => {
            return author.name.toLowerCase().includes(this.state.searchString);
        });
    }

    catchSearch(searchString) {
        this.setState({ searchString });
    }

    renderAuthors() {
        return this.filterResults().map((item) => {
            return (<Author name={item.name} key={item.id} authId={item.id} />);
        });
    }

    render() {
        const numberOfAuthors = this.state.authors.length;
        return (
            <div className="container">
                <div className="row">
                    <p onClick={this.props.history.goBack} className="waves-effect waves-light btn"> Back </p>
                    <h1 style={{ textAlign: "center", marginBottom: "100px" }}>AUTHORS ({numberOfAuthors})</h1>
                    <Search dispatch={this.catchSearch} instant={true} /> {this.renderAuthors()}
                </div>
            </div>
        );
    }
}

const Author = function (props) {
    return (
        <Link to={"/SingleAuthorInfo/" + props.authId}>
            <div>
                <p style={{ fontSize: 20 }}> {props.name}</p>
                <hr />
            </div>
        </Link>
    );
};

export default Authors;