import React from "react";
import './HourlyForecast.css';

class Forecast extends React.Component {
  render() {
    return (
      <div>
        <div className="card mb-2 hourlyForecast-card">
        <div className="card-img-top">
          <img src={this.props.hourlyDataUpdate.icon} alt="" />
          </div>
          <div className="card-body">
            <p>Time: {this.props.hourlyDataUpdate.time}</p>
            <p>Temperature: {this.props.hourlyDataUpdate.temp_min}°C/{this.props.hourlyDataUpdate.temp_max}°C</p>
            <p> Description: {this.props.hourlyDataUpdate.description}</p>
          </div>
          </div>
      </div>
    );
  }
}

export default Forecast;
