import React,{Component} from "react";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import NavBar from "./Components/NavBar";
import PreviousWork from "./Components/PreviousWork";
import Footer from "./Components/Footer";



class App extends Component {
  render(){
    return(
      <div>
      <NavBar/>
      <Header/>
      <AboutMe/>
      <PreviousWork/>
      <Footer/>
      </div>
    );
  }
}
export default App
