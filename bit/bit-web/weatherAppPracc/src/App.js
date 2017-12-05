import React, { Component } from 'react';
import './App.css';
// import { Switch, Route } from "react-router-dom";
// import SingleCity from "../src/components/singleCity";
// // import FeedFrame from "../src/common/feedFrame";
// import Search from "../src/common/search";
import { fetchData } from "./services/fetchData";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";
import MyMapComponent from "./components/googleMap";

const style = {
  height: "100%"
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      cityData: null,
      cityCord: ""

    }
    this.handleChange = this.handleChange.bind(this);
    this.searchClick = this.searchClick.bind(this);
    this.searchClick = this.searchClick.bind(this);
  }

  componentDidMount() {
    fetchData.getData("forecast", "Belgrade", (response) => {

      this.setState({
        cityData: response.data.list,
        cityCord: response.data.city.coord
      });

    });

  }

  handleChange(event) {
    const searchString = event.target.value;
    this.setState({
      searchTerm: searchString
    });

  }

  dispatchSearchOnEnter(){
    document.getElementById('search').onkeydown = function(e){
      if(e.keyCode == 13){
        this.searchClick();
      }
   };
  }

  searchClick() {
    fetchData.getData("forecast", this.state.searchTerm, response => {
      this.setState({

        cityData: response.data.list,
        cityCord: response.data.city.coord
      });
    });
  }

  render() {
    console.log(this.state.cityData);
    if (this.state.cityData == null) {
      return <p>loading...</p>
    }
    const temperatureHourlie = [];
    this.state.cityData.map((hour) => {
      temperatureHourlie.push(hour.main.temp)

    });

    const humidityHourlie = [];
    this.state.cityData.map((hum) => {
      humidityHourlie.push(hum.main.humidity)
    });

    const pressureArray = [];
    this.state.cityData.map((pressure) => {
      pressureArray.push(pressure.main.pressure)
    });

    const windArray = [];
    this.state.cityData.map((wind) => {
      windArray.push(wind.wind.speed)
    });

    const forecastArray = [];
    this.state.cityData.map((fc) => {
      forecastArray.push(fc.weather)
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 id="title">Weather Search</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <div className="input-group">
              <input id= "search" type="text" className="form-control" placeholder="Search for..." onChange={this.handleChange} value={this.state.searchTerm} />
            </div>
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-primary" onClick={this.searchClick}>Search</button>
          </div>
        </div>
        <div className="row">
          <div className="col-8 extra">
            <div id="map">
              <MyMapComponent cityCord={this.state.cityCord}
                isMarkerShown={true}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
            </div>
            <div className= "col-4 extra">
              <h4>Average temperature :{temperatureHourlie[1]}</h4>
              <h4>Average humidity :{humidityHourlie[1]}</h4>
              <h4>Average pressure : {pressureArray[1]}</h4>
              <h4>Average wind speed :{windArray[1]}</h4>
            </div>
          </div>
          <div className="row">
          <div className="col-md 6 extra">
          <h4>Temperature</h4>
            <Sparklines data={temperatureHourlie}>
              <SparklinesLine style={style} color="red" />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
          </div>
          <div className="col-md 6 extra">
          <h4>Humidity</h4>
            <Sparklines data={humidityHourlie}>
              <SparklinesLine style={style} color="blue" />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            </div>
          </div>
          <div className="row">
          <div className="col-md 6 extra">
          <h4>Pressure</h4>
            <Sparklines data={pressureArray}>
              <SparklinesLine style={style} color="yellow" />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
          </div>
          <div className="col-md 6 extra">
          <h4>Wind speed</h4>
            <Sparklines data={windArray}>
              <SparklinesLine style={style} color="green" />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
