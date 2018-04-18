import React, {Component} from "react";
import "./App.css";
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
  render(){
    return(
      <Container className="FooterContainer">
      <Row className = "RowFooter">
          <Col xl= "12" className = "ColFooter">
          <h3>Previous Work 1</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Footer
