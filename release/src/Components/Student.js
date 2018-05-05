import React, { Component } from "react";
import GBForm from "./GBForm";

class Student extends Component {
  componentDidMount() {
    fetch('http://localhost:8080/comment',)
      .then(function(res){ console.log(res) })
      .catch(function(res){ console.log(res) })

  }


  render() {
    return (
      <div>
        <GBForm />
        { this.props.comment.map((value) => {
          return (<p key={value.id}>{value.author}: {value.body}</p>);

        }) }

      </div>
    );
  }
}

export default Student;
