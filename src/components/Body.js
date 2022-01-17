import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";

const Body = () => {
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <SectionLeft />
        </Col>
        <Col lg={4}>
          <SectionRight />
        </Col>
      </Row>
    </Container>
  );
};

export default Body;
