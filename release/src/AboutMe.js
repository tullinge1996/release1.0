import React, {Component} from "react";
import "./App.css";
import { Container, Row, Col } from 'reactstrap';

class AboutMe extends Component {
  render(){
    return(
      <Container className="aboutMeContainer">
      <Row className = "RowAboutMe">
          <Col xl="6" className = "firstCol"><h1>About me!</h1></Col>
          <Col xl="6" className = "secondCol"><h1>My skills</h1></Col>
        </Row>
      </Container>
    );
  }
}
export default AboutMe
