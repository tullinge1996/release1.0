import React,{Component} from "react";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import NavBar from "./Components/NavBar";
import PreviousWork from "./Components/PreviousWork";
import Footer from "./Components/Footer";
import WeatherApp from "./WeatherApp";
import Main from "./Components/Main";




class App extends Component {
  render(){
    return(

      <div>
      <NavBar/>
      <Header/>
      <AboutMe/>
      <PreviousWork/>
      <WeatherApp/>
      <Main/>
      <Footer/>
      </div>
    );
  }
}
export default App
     // <Route exact path="/WeatherApp/" component={WeatherApp}/>
