import React, {Component} from "react";
import "../App.css";
import { Container, Row, Col } from 'reactstrap';
import Images from "../IMAGES/Images"
var {fbLogga, googlePlusLogga, linkedinLogga, twitterLogga} = Images

class Footer extends Component {
  render(){
    return(
      <Container className="FooterContainer">
      <Row className = "RowFooter">
          <Col xl= "6" className = "ColFooter">
          <ul>
          <li><a href ="https://twitter.com/Brunniz?lang=sv"><img src={twitterLogga}alt="Twitterlogo"/></a></li>
          <li><a href =""><img src={googlePlusLogga}alt="GooglePlusLogo"/></a></li>
          <li><a href ="https://www.linkedin.com/in/carl-brunng%C3%A5rd-b9a7a3159/"><img src={linkedinLogga}alt="LinkedInLogo"/></a></li>
          <li><a href ="https://www.facebook.com/carl.brunngard"><img src={fbLogga} alt="FaceBookLogo"/></a></li>
          </ul>
          </Col>
          <Col xl= "6" className = "ColFooter2">
          <h4>Get In Touch</h4>
          <p>If you have any questions, please feel free to Email me at <strong>carl.brunngard@student.kyh.se</strong> and I<br></br> will get back to you as soon as I can.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Footer
