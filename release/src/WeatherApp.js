import React, {Component} from "react";
import Form from "./Components/Form"
import Titles from "./Components/Titles"
import Weather from "./Components/Weather"
import { Container, Row, Col } from 'reactstrap';

const API_KEY ="2fb6350dd708ac940b3f51c456707909";

class WeatherApp extends Component {
  state = {
    temperature:undefined,
      city:undefined,
        country:undefined,
          humidity:undefined,
            description:undefined,
            error:undefined


  }
getWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
  const data = await api_call.json();
if (city && country){
  console.log(data);
  this.setState({
    temperature: data.main.temp,
    city: data.name,
    country: data.sys.country,
    himidity: data.main.humidity,
    description: data.weather[0].description,
    error:""

});
}else{
  this.setState({
    temperature: undefined,
    city: undefined,
    country: undefined,
    himidity: undefined,
    description: undefined,
    error:"Please enter values."
  });
}
}
  render(){
    return(
      <Container className ="WeatherContainer">
        <Row className ="WeatherRowContainer">
        <Col xl = "12" className="firstColWeather">
      <Titles/>
      <Form getWeather = {this.getWeather}/>
      <Weather
       temperature = {this.state.temperature}
       city={this.state.city}
       country={this.state.country}
       humidity={this.state.humidity}
       description={this.state.description}
       error={this.state.error}
      />
  </Col>
  </Row>
  </Container>
    );
  }
}
export default WeatherApp
