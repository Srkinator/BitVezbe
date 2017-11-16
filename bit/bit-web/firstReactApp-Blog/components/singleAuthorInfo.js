import React from "react";
import PostsFromSameAuthor from "./postsFromSameAuthor";

class SingleAuthorInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: {
                username: "Loading...",
                email: "Loading...",
                phone: "Loading...",
                name: "Loading...",
                address:{
                    street: "Loading...",
                    zipcode: "Loading..."
                },
                company:{
                    name: "Loading",
                    catchPhrase: "Loading"
                }
            },
        };
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(result => result.json())
            .then(result => {
                console.log(result);
                this.setState({
                    authors: result
                });
            });
    }

    render() {
        return (<div className="container">
            <div className="row">  
                <h2 style={{ textAlign: "center", marginBottom: "50px" }}>{this.state.authors.name} </h2>
                <p style={{ textAlign: "center" }}>User Name : {this.state.authors.username} </p>
                <p style={{ textAlign: "center" }}>Email : {this.state.authors.email} </p>
                <p style={{ textAlign: "center" }}>Phone : {this.state.authors.phone} </p>
                <hr />
                <h2 style={{ textAlign: "center" }}>Address</h2>
                <p style={{ textAlign: "center" }}>Street : {this.state.authors.address.street} </p>
                <p style={{ textAlign: "center" }}>ZipCode : {this.state.authors.address.zipcode} </p>
                <hr />
                <h2 style={{ textAlign: "center" }}>Company</h2>
                <p style={{ textAlign: "center" }}>Name : {this.state.authors.company.name} </p>
                <p style={{ textAlign: "center" }}>Catch Phrase : {this.state.authors.company.catchPhrase} </p>
            </div>
        </div>
        );


    }
}
export default SingleAuthorInfo;

