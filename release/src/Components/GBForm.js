import React from "react";
class GBForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        author: 'Your name',
        body: 'Your comment'
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
        //console.log(target.value);
      }

    handleSubmit(event) {
        fetch('https://carlbrunn-portfolio-api.herokuapp.com/comment',
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({author: this.state.author, body: this.state.body})
      })
      .then(function(res){ console.log(res) })
      .catch(function(res){ console.log(res) })

      alert('A message by: ' + this.state.author + ' has been posted and it contained: ' + this.state.body);
      window.location.reload(true);
      event.preventDefault();
    }

    render() {
      return (
        <form className="GuestbookContainers" onSubmit={this.handleSubmit}>
        <label>
          <h4>Name:</h4>
          <input name="author" type="text" value={this.state.value} onChange={this.handleInputChange} />
        </label><br />
          <label>
            <h4>Comment:</h4>
            <textarea name="body" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>

      );
    }
  }

  export default GBForm;
