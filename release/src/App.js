import React,{Component} from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import NavBar from "./NavBar";
import PreviousWork from "./PreviousWork";
import Footer from "./Footer";



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
