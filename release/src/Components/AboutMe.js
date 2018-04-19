import React, {Component} from "react";
import "../App.css";
import { Container, Row, Col } from 'reactstrap';

  class AboutMe extends Component {
  render(){
    return(
      <Container className="aboutMeContainer">
      <Row className = "RowAboutMe">
          <Col xl="6" className = "firstCol">
          <h1>About me!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit turpis eu viverra rutrum.
           Vivamus porta non erat in aliquam. Donec eget nibh orci. Aliquam quis pharetra dolor.
           Integer pretium tellus diam, volutpat pellentesque metus ornare ac. Mauris ut efficitur orci.
            Curabitur placerat consequat erat vitae elementum. Curabitur interdum leo et dignissim facilisis.
             Duis vulputate lectus sed accumsan vestibulum.
             Cras rutrum lobortis neque, vel commodo mauris rhoncus ac.
             Sed pulvinar erat eget est suscipit congue. Cras efficitur tellus justo, a bibendum ex facilisis sed.
              Vestibulum porta nisl ut neque varius faucibus.
              Nullam lobortis lorem metus, sit amet congue mi mollis et. Suspendisse orci nulla, varius in leo a, pellentesque rhoncus libero.
               Integer ultrices, justo sed aliquet tempor, tortor orci volutpat lacus, ac sodales mi magna et ligula.
               </p>
          </Col>
          <Col xl="6" className = "secondCol">
          <h1>My skills</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit turpis eu viverra rutrum.
           Vivamus porta non erat in aliquam. Donec eget nibh orci. Aliquam quis pharetra dolor.
           Integer pretium tellus diam, volutpat pellentesque metus ornare ac. Mauris ut efficitur orci.
            Curabitur placerat consequat erat vitae elementum. Curabitur interdum leo et dignissim facilisis.
             Duis vulputate lectus sed accumsan vestibulum.
             Cras rutrum lobortis neque, vel commodo mauris rhoncus ac.
             Sed pulvinar erat eget est suscipit congue. Cras efficitur tellus justo, a bibendum ex facilisis sed.
              Vestibulum porta nisl ut neque varius faucibus.
              Nullam lobortis lorem metus, sit amet congue mi mollis et. Suspendisse orci nulla, varius in leo a, pellentesque rhoncus libero.
               Integer ultrices, justo sed aliquet tempor, tortor orci volutpat lacus, ac sodales mi magna et ligula.
               </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default AboutMe
