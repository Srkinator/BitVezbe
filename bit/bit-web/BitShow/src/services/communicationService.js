import React, { Component } from 'react';
import axios from 'axios';

class CommunicationService extends Component {
    constructor(props) {
        super(props);
        
    }
    
    getShows(notifyGetRequest) {
        axios.get("http://api.tvmaze.com/shows")
            .then(response => {
                // console.log(response.data);
                notifyGetRequest(response.data);
            })
            .catch(error => {
                console.log(error);
                let errorMsg = error.response ? error.response.code : "Server unavailable";
                // handleError(errorMsg);
            });
    }

    getSingleShow(notifyGetRequest, id) {
        axios.get(`http://api.tvmaze.com/shows/${id}?embed=cast`)
            .then(response => {
                // console.log(response.data);
                notifyGetRequest(response.data);
            })
            .catch(error => {
                console.log(error);
                let errorMsg = error.response ? error.response.code : "Server unavailable";
                // handleError(errorMsg);
            });
    }

    searchRequest(notifyGetRequest, search) {
        axios.get(`http://api.tvmaze.com/search/shows?q=${search}`)
            .then(response => {
                // console.log(response.data);
                notifyGetRequest(response);
            })
            .catch(error => {
                console.log(error);
                let errorMsg = error.response ? error.response.code : "Server unavailable";
                // handleError(errorMsg);
            });
    }

    
}


export default CommunicationService;