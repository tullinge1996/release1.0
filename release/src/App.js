import React,{Component} from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import NavBar from "./NavBar";


class App extends Component {
  render(){
    return(
      <div>
      <NavBar/>
      <Header/>
      <AboutMe/>

      </div>
    );
  }
}
export default App
