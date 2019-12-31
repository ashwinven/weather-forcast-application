import React from "react";
import Forecast from "./Forecast";
import Form from "./Form";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weather.css';
const API_KEY = "5266598105c300896c4a1ec2a44060c6";

class Weather extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    forecastDays: undefined,
    error: undefined
  };


  getWeather = async e => {
    
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    
    const data = await api_call.json();
    console.log(data);
    var dayArray=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var forecastDays = [];
    var hourlyData = [];

    var imgUrl = "https://openweathermap.org/img/w/";

    if (city && country) {
      for (var i = 0; i <= 32; i = i + 8) {
        for (var j = i + 1; j < i + 7; j++) {
          hourlyData.push({
            time: data.list[j].dt_txt.substring(11, 19),
            temp_min: data.list[j].main.temp_min,
            temp_max: data.list[j].main.temp_max,
            description: data.list[j].weather[0].description,
            icon: imgUrl + data.list[j].weather[0].icon + ".png"
          });
        }
        forecastDays.push({
          day: dayArray[new Date((data.list[i].dt_txt.substring(0, 10))).getDay() + 1],
          time: data.list[i].dt_txt.substring(11, 19),
          temp_min: data.list[i].main.temp_min,
          temp_max: data.list[i].main.temp_max,
          description: data.list[i].weather[0].description,
          icon: imgUrl + data.list[i].weather[0].icon + ".png",
          hourlyData: hourlyData
        });
        hourlyData = [];
      }
      console.log(forecastDays);
      console.log(JSON.parse(JSON.stringify(forecastDays)));

      this.setState({
        city: data.city.name,
        country: data.city.country,
        forecastDays: forecastDays,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        forecastDays: undefined,
        error: "Please enter a value"
      });
    }
  };
  render() {
    return (
      <div>
        <Form getWeather = {this.getWeather}/>
        {this.state.error && <p>{this.state.error}</p>}
        <div className="row forecast-container">
        {this.state.forecastDays &&
          this.state.forecastDays.map(
            ({ day, time, temp_min,temp_max, description, icon, hourlyData }) => {
              return (
                <Forecast
                  day={day}
                  time={time}
                  temp_min={temp_min}
                  temp_max={temp_max}
                  description={description}
                  icon={icon}
                  hourlyData={hourlyData}
                />
              );
            }
          )}
          </div>
      </div>
    );
  }
}

export default Weather;
