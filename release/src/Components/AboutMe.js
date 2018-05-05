import React, {Component} from "react";
import "../App.css";
import { Container, Row, Col, Progress } from 'reactstrap';

  class AboutMe extends Component {
  render(){
    return(
      <Container className="aboutMeContainer">
      <Row className = "RowAboutMe">
          <Col xl="6" className = "firstCol">
          <h1>About me!</h1>
          <p> Hello! My name is Carl Brunngård and I'm 21 years old  from Stockholm Sweden.
            I am currently studying to become a Front-End developer at KYH Stockholm.
            This course is stretching over 2 years and I'm just about to finish my first year.
            During this first year i have managed to gather a good amount of experience within several
            programming languages. This means that I'm on my way to become a well-rounded Front-End developer.
            Before i decided to hop on this course i had never touched code in my life, so far it has been a bit of a challenge
            to get into coding since It's very new to me. But I like to learn which i think is key for everyone who is
            thinking about getting into coding.
            Down below you can see screenshots of my previous projects.
            Also feel free to leave a comment in my Guestbook if you like.
               </p>
          </Col>
          <Col xl="6" className = "secondCol">
          <h1>My skills</h1>
            <p>As a student at KYH Stockholm I've learned the basics of HTML and CSS from day one, later in my first year of studying
              i started getting more into Javascript. My lastest framework i picked up was React which this portfolio is built in.
                 </p>

          <div className="text-center">HTML 75%</div>
          <Progress value={75} />
          <div className="text-center">CSS 75%</div>
          <Progress value={75} />
          <div className="text-center">JS 50%</div>
          <Progress value={50} />
          <div className="text-center">REACT.JS 35%</div>
          <Progress value={35} />


          </Col>
        </Row>
      </Container>
    );
  }
}
export default AboutMe
