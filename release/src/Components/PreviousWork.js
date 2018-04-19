import React, {Component} from "react";
import "../App.css";
import { Container, Row, Col } from 'reactstrap';
class PreviousWork extends Component {
  render(){
    return(
      <Container className="PreviousWorkContainer">
      <h1>My Previous Projects</h1>
      <Row className = "RowPreviousWork">
          <Col xl={{ size: "3", offset: 0}} className = "firstColPreviousWork">
          </Col>
          <Col xl={{ size: "4", offset: 1 }} className = "secondColPreviousWork">
          </Col>
          <Col xl={{ size: "3", offset: 1}} className = "thirdColPreviousWork">
          </Col>
        </Row>
      </Container>
    );
  }
}
export default PreviousWork
