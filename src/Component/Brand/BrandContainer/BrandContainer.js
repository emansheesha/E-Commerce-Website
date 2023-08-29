import React from "react";
import { Container, Row } from "react-bootstrap";
import Brand from "../Brand";
import brand1 from "../../../images/brand1.png";
import brand2 from "../../../images/brand2.png";
import brand3 from "../../../images/brand3.png";
const BrandContainer = () => {
  return (
    <Container>
      <h3 style={{ textAlign: "start" }} className="fs-2 my-4">
        كل الماركات
      </h3>
      <Row className="d-flex my-3">
        <Brand img={brand1} />
        <Brand img={brand2} />
        <Brand img={brand3} />
        <Brand img={brand1} />
        <Brand img={brand2} />
        <Brand img={brand3} />
        <Brand img={brand1} />
        <Brand img={brand2} />
        <Brand img={brand3} />
        <Brand img={brand1} />
        <Brand img={brand2} />
        <Brand img={brand3} />
        <Brand img={brand1} />
        <Brand img={brand2} />
        <Brand img={brand3} />
        <Brand img={brand1} />
        <Brand img={brand2} />
        <Brand img={brand3} />
        <Brand img={brand1} />
        <Brand img={brand2} />
        <Brand img={brand3} />
        <Brand img={brand1} />
        <Brand img={brand2} />
        <Brand img={brand3} />
      </Row>
    </Container>
  );
};

export default BrandContainer;
