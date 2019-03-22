import React, { Component } from "react";
import axios from "axios";
const BASE_API_URL =
  "https://api.darksky.net/forecast/258cf106a6d8062f143a77565a3ad9a5/";

class Weather extends Component {
  state = {
    temp: 0,
    icon: "",
    description: ""
  };
  componentDidMount = () => {
    this.getWeather();
  };

  getWeather = () => {
    let url = `${BASE_API_URL}${this.props.latitude},${this.props.longitude}`;
    fetch(url, { headers: { mode: "no-cors" } })
      .then(response => response.json())
      .then(json => {
        let fahrenheit = (json.data.main.temp - 273.15) * (9 / 5) + 32;
        this.setState({
          temp: fahrenheit.toFixed(1),
          icon: json.data.weather[0].icon,
          description: json.data.weather[0].description
        });
      })
      .catch(err => {
        console.log("Derp", err);
      });
  };

  getWeatheraxios = () => {
    console.log(this.props);
    let url = `${BASE_API_URL}${this.props.latitude},${this.props.longitude}`;
    console.log(url);
    axios
      .get(url, { headers: { mode: "no-cors" } })
      .then(res => {
        console.log(res.data);
        let fahrenheit = (res.data.main.temp - 273.15) * (9 / 5) + 32;
        this.setState({
          temp: fahrenheit.toFixed(1),
          icon: res.data.weather[0].icon,
          description: res.data.weather[0].description
        });
      })
      .catch(e => {
        this.setState({
          temp: "Something went wrong with getting the weather... :("
        });
      });
  };

  render() {
    return (
      <div>
        <img
          alt="wicon"
          src={"http://openweathermap.org/img/w/" + this.state.icon + ".png"}
        />

        <span>{this.state.temp}</span>

        {this.state.description}
      </div>
    );
  }
}

export default Weather;
