import React,{Component} from "react";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import NavBar from "./Components/NavBar";
import PreviousWork from "./Components/PreviousWork";
import Footer from "./Components/Footer";
import WeatherApp from "./WeatherApp";
import {BrowserRouter,Router,Link} from "react-router-dom";
import Route from "react-router-dom/Route";



class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <div>
      <NavBar/>
      <Header/>
      <AboutMe/>
      <PreviousWork/>
      <WeatherApp/>
       // <Route exact path="/WeatherApp/" component={WeatherApp}/>
      <Footer/>
      </div>
    </BrowserRouter>
    );
  }
}
export default App
