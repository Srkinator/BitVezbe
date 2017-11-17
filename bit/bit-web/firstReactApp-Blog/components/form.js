import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        };


        this.collectFormData = this.collectFormData.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);


    }
    collectFormData(event) {
        event.preventDefault();
        let title = this.state.title;
        let body = this.state.body;

        this.props.handler(title, body);
    }

    updateTitle({ target }) {
        this.setState({
            title: target.value
        });
    }

    updateBody({ target }) {
        this.setState({
            body: target.value
        });

    }

    render() {
        return (
            <div className="row">
                <form action="" className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                onChange={this.updateTitle}
                                onKeyUp={this.updateTitle}
                                onPaste={this.updateTitle}
                                value={this.state.title}
                                id="input_text" type="text"
                                data-length="10" />
                            <label htmlFor="input_text">Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea
                                onChange={this.updateBody}
                                onKeyUp={this.updateBody}
                                onPaste={this.updateBody}
                                value={this.state.title}
                                value={this.state.body}
                                id="textarea1"
                                className="materialize-textarea"
                                data-length="120">
                            </textarea>
                            <label htmlFor="textarea1">Post</label>
                        </div>
                    </div>
                        <button className="btn waves-effect waves-light" type="submit" onClick={this.collectFormData}>Save</button>
                </form>
            </div>
        );
    }
}

export default Form;