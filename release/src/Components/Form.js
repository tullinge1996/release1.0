import React, {Component} from "react";
import "../App.css";

class Form extends Component {
  render(){
    return(
      <form onSubmit={this.props.getWeather}>
      <input type="text" name ="city" placeholder="City..."/>
      <input type="text" name ="country" placeholder="Country..."/>
      <button>Submit</button>

      </form>
    );
  }
}
export default Form
