import React, { Component } from 'react';

import CommunicationService from '../services/communicationService';

class SingleShowInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: "",
            imdb: "",
        }

        this.communicationService = new CommunicationService();

    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        let id = this.props.match.params.id;

        this.communicationService.getSingleShow((response) => {
            console.log(response);
            this.setState({
                info: response,
                imdb: response.externals.imdb,

            });

        }, id);
    }

    render() {
        let counterForMap = 1;
        if (!this.state.info) {
            return <p>Loading....</p>
        }

        return (
            <div className="container">
                <h2 style={{ textAlign: "center" }}>{this.state.info.name}</h2>
                <h5 style={{ textAlign: "center", marginBottom: "50px" }}>{this.state.info.genres[0]}, {this.state.info.genres[1]}, {this.state.info.genres[2]} </h5>
                <div className="row">
                    <div style={{ padding: 0 }} className="col-lg-6 col-sm-12">
                        <img className="mx-auto" src={this.state.info.image.original} style={{ width: "100%" }} />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        {<p style={{textAlign:"center"}} id="collapseExample"><h5>Summary</h5><br></br>{this.state.info.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>}
                        <a target="_blank" href={`http://www.imdb.com/title/${this.state.imdb}`}>Check out details on IMDB</a>
                    </div>
                </div>
                <div className="row">
                    <div id="accordion" className="col-12" role="tablist">
                        <div className="card">
                            <div className="card-header" role="tab" id="headingOne">
                                <h5 className="mb-0">
                                    <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Cast</a>
                                </h5>
                            </div>
                            <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="list-group"style={{padding:0}}>
                                            {this.state.info._embedded.cast.map((actor) => {
                                                console.log(actor);
                                                let personImg = actor.person.image;
                                                let characterImg = actor.character.image;

                                                if (!personImg) {
                                                    personImg = "http://via.placeholder.com/100x150"
                                                }
                                                if (!characterImg) {
                                                    characterImg = "http://via.placeholder.com/100x150"
                                                }

                                                return (
                                                    <div className="list-group-item list-group-item-action">
                                                        <p className="col-6"><img style={{ width: "20%", paddingRight: "10px" }} src={personImg.original ? personImg.original : "http://via.placeholder.com/100x150"} />{actor.person.name}</p>
                                                        <p className="col-6"><img style={{ width: "20%", paddingRight: "10px" }} src={characterImg.original ? characterImg.original : "http://via.placeholder.com/100x150"} />{actor.character.name}</p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleShowInfo;