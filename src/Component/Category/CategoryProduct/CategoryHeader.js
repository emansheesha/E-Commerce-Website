import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CategoryHeader = () => {
  return (
    <div className="category-header d-flex align-items-center">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start title-container">
            <div >الكل</div>
            <div >الكترونيات</div>
            <div >ملابس</div>
            <div >كهربيه</div>
            <div >تخفيضات</div>
            <div >تخفيضات</div>
            <div >تخفيضات</div>
            <div >المزيد</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;
