import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Student from "./Student";
const COMMENT_API = 'http://localhost:8080/comment'

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
        comment: []
        }
      }

      componentDidMount() {
          fetch(COMMENT_API)
          .then(response => response.json())
          .then(data => this.setState({ comment: data }));


      }

    render() {
        console.log(this.refs)
        return (
            <HashRouter>
                <div className="content">
                  <h1>Guest Book</h1>
                        <Route  render={() => <Student comment={this.state.comment} />} />

                </div>

            </HashRouter>
        );
    }
}

export default Main;
