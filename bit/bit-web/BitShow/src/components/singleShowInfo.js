import React, { Component } from 'react';

import CommunicationService from '../services/communicationService';

class SingleShowInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: ""
        }


        this.communicationService = new CommunicationService();

        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }


    loadData() {
        let id = this.props.match.params.id;
        let listOfShows = [];
        this.communicationService.getSingleShow((response) => {
            this.setState({
                info: response
            });
         
        }, id);
    }


    render() {
        console.log("aaaaa" , this.state.info);
        return (
            <div className ="container">
            <h3>{this.state.info.name}</h3>
            <img src ={this.state.info.image} />
            <p> Summary :{this.state.info.summary}</p>
            <p>{this.state.info.id}</p>
            <p> Genres : {this.state.info.genres}</p>
            <p>{this.state.info.embedded}</p>
            {/* <img src={this.state.info.image.medium} style={{width:"50%"}} /> */}
            


            </div>
        );
    }
}

export default SingleShowInfo;