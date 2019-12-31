import React from "react";
import HourlyForecast from "./HourlyForecast";
import { Link } from "react-router-dom";
import "./Forecast.css";
class Forecast extends React.Component {
  state = {
    flag: false,
    selectedDate: undefined
  };
 

  showHourlyUpdate(e) {

    this.setState({
      flag: !this.state.flag,
      hourlyDataUpdate: this.props.hourlyData
    });
  }

  render() {
    return (
      
        <div className="forecast-data">
          <div className="card mb-2 forecast-card">
            <div className="card-img-top">
              <Link to={`/${this.props.day}-hourly-update`}>
                <img
                  src={this.props.icon}
                  alt=""
                  onClick={e => this.showHourlyUpdate(e)}
                />
              </Link>
            </div>
            <div className="card-body">
              <h4>{this.props.day}</h4>
              <p>{this.props.time}</p>
              <p>{this.props.temp_min}°C/{this.props.temp_max}°C</p>
              <p>{this.props.description}</p>
            </div>
          </div>
          {this.state.flag &&
            this.state.hourlyDataUpdate.map(entry => {
              return <HourlyForecast hourlyDataUpdate={entry} />;
            })}
        </div>
    );
  }
}

export default Forecast;
