import React from "react";
import {Link} from "react-router-dom";
import "./Form.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends React.Component{
    render(){
        return (
            <div className="row" style={{'textAlign': 'center'}}>
            <form onSubmit={this.props.getWeather} className="form-group">
                
                <input type = "text" name = "city" placeholder = "City" />
                
                <input type = "text" name = "country" placeholder = "Country" />
                <button className="btn-weather">Get Weather</button>
            </form>
            </div>
        );
    }
}

export default Form;  