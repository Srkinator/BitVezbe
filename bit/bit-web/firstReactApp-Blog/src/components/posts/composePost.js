import React, { Component } from 'react';
import Form from "./form";

class CreatePost extends Component {
    constructor(props) {
        super(props);

        this.collectedInfo = this.collectedInfo.bind(this);
    }

    handleStorage(post) {

        post.id = 101;

        //setovanje praznog niza u local storage
        if (!localStorage.getItem("posts")) {
            localStorage.setItem("posts", JSON.stringify([]));
        }

        let array = localStorage.getItem("posts")
        //parsiranje praznog niza
        let parseArray = JSON.parse(array);

        //dodavanje razlitog ID za svaki novi post 
        if (parseArray.length > 0) {
            post.id = Number(parseArray[parseArray.length -1 ].id) +1;
            //DRUGI I LOSIJI NACIN

            // parseArray.map(elem => {
            //     if (elem.id === post.id) {
            //         post.id++
            //     };
            // })
        }
        //setovanje novog posta u LS
        // get from stoRAGE
        parseArray.push(post);
        localStorage.setItem('posts', JSON.stringify(parseArray));
        //
    }

    collectedInfo(title, body) {

        let post = {
            title: title,
            body: body,
            userId: 99
        };
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
            headers: {
                'Accept': 'application/json , text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(response => response.json())
            .then(post => {
                return new Promise((resolve, reject) => {
                 this.handleStorage(post);
                 resolve();
                })
            })
            .then(() => (this.props.history.push('/')))
            .catch((error) => new Error(error));
    }

    render() {
        return (
            <div>
                 <p onClick={this.props.history.goBack} className="waves-effect waves-light btn"> Back </p>
                <h1>Create new form</h1>
                <Form handler={this.collectedInfo} />
            </div>
        );
    }
}

export default CreatePost;