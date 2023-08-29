import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchCountDropdown from "./SearchCountDropdown";

const SearchCountResult = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-between w-100 align-items-center">
        <Col style={{ textAlign: "start" }}>600 منتج متاح</Col>
        <Col className="d-flex justify-content-end">
          <SearchCountDropdown />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchCountResult;
