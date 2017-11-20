import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Map extends Component {
    constructor(props){
        super(props)

        this.state ={
            geo: {}
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState ({
            geo:{
                lat: nextProps.geo.lat,
                lng: nextProps.geo.lng
            }
        });
    }
    render() {
        return (
            <div>
                <iframe src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11322.276616522473!2d${this.state.geo.lat}!3d${this.state.geo.lng}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1511015802716`} width="200" height="200" frameBorder="0"allowFullScreen></iframe>
            </div>
        );
    }
}

export default Map;
