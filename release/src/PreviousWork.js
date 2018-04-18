import React, {Component} from "react";
import "./App.css";
import { Container, Row, Col } from 'reactstrap';

class PreviousWork extends Component {
  render(){
    return(
      <Container className="PreviousWorkContainer">
      <Row className = "RowPreviousWork">
          <Col xl={{ size: "3", offset: 0}} className = "firstColPreviousWork">
          <h3>Previous Work 1</h3>
          </Col>
          <Col xl={{ size: "4", offset: 1 }} className = "secondColPreviousWork">
          <h3>Previous Work 2</h3>
          </Col>
          <Col xl={{ size: "3", offset: 1}} className = "thirdColPreviousWork">
          <h3>Previous Work 3</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default PreviousWork
