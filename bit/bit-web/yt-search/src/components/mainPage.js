import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { API_KEY } from "../constants";
import VideoDTO from "./entities/videoDTO";

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: "",
            newVideos: [],
            previousVideo: {}
        }

    }

    componentDidMount() {
        this.loadData("");
    }

    loadData = (term) => {

        const options = { term, key: API_KEY };

        YTSearch(options, (videos) => {

            const newVideos = [];

            videos.map((video) => {
                const id = video.id.videoId;
                const channelTitle = video.snippet.channelTitle;
                const title = video.snippet.title;
                const imageUrl = video.snippet.thumbnails.high.url;
                const newVideo = new VideoDTO(id, channelTitle, title, imageUrl);
                newVideos.push(newVideo);
            });
            this.setState({
                newVideos
            })
        });
    }

    dispatchSearch = (event) => {
        event.preventDefault();
        const term = this.state.searchTerm;

        if (!term) {
            return;
        }

        this.loadData(term);
        this.setState({
            searchTerm: ""
        });
    }

    handleInputChange = (event) => {
        const searchString = event.target.value;

        this.setState({
            searchTerm: searchString
        });
    }

    handleClick = (event) => {
        const splittedVideoTitle = event.target.title.split(" ");

        if (splittedVideoTitle.length >= 12) {
            const videoTitle = splittedVideoTitle.slice(0, (splittedVideoTitle.length - 11)).join(" ");
            this.loadData(videoTitle);
        }
        this.loadData(event.target.title);
        this.setState({
            previousVideo: this.state.newVideos[0]
        });
    }

    processVideoUrl = (video) => {
        return (
            <div>
                <iframe width="90%" height="615" src={`https://www.youtube.com/embed/${video.id}`} frameBorder="0" allowFullScreen></iframe>
                <p title={video.title}>{video.title}</p>
                <p title={video.title}>{video.channelTitle}</p>
            </div>
        );
    }

    processVideoThumbnail = (video) => {
        return (
            <div key={video.id} title={video.title}>
                <img src={video.imageUrl} style={{ width: "200px" }} title={video.title} />
                <p title={video.title}>{video.title}</p>
                <p title={video.title}>{video.channelTitle}</p>
            </div>
        );
    }

    render() {

        if (this.state.newVideos.length === 0) {
            return <p>Loading...</p>;
        }

        console.log(this.state.previousVideo);

        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-12">
                            <form className="form-inline">
                                <input className="form-control" style={{ width: "90%" }} onChange={this.handleInputChange} value={this.state.searchTerm} type="text" placeholder="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.dispatchSearch}>Search</button>
                            </form>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-9">
                            {this.processVideoUrl(this.state.newVideos[0])}
                            <div>
                                <h1>Prevous video</h1>
                                {this.processVideoThumbnail(this.state.previousVideo)}
                            </div>
                        </div>


                        <div className="col-3">

                            <div onClick={this.handleClick}>
                                {this.state.newVideos.slice(1).map((video) => {
                                    return this.processVideoThumbnail(video);
                                })}
                            </div>
                        </div>
                    </div>

                </div >
            </div>
        );
    }
}

export default MainPage;