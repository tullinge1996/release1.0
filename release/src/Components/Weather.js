import React, {Component} from "react";
import "../App.css";

class Weather extends Component {
  render(){
    return(
      <div className ="WeatherResult">
      {this.props.city && this.props.country && <p>Location: {this.props.city},{this.props.country}</p>}
      {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
      {this.props.humidity && <p>Humidity: {this.props.himidity}</p>}
      {this.props.description && <p>Conditions: {this.props.description}</p>}
      {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
};
export default Weather;
