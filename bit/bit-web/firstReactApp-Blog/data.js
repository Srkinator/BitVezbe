import React from "react";

class Data {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    getData() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(result => result.json()).then(result => {
                this.setState({ data: result });
            });
    }
}
export default Data;