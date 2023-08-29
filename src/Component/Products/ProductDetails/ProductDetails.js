import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "../ProductText/ProductText";
import RateContainer from "../../Rate/RateContainer/RateContainer";

const ProductDetails = () => {
  return (
    <>
      <Row className="my-3">
        <Col md="4" sm="5" xs="12">
          <ProductGallery />
        </Col>
        <Col md="8" sm="7" xs="12">
          <ProductText />
        </Col>
      </Row>
      <Row>
        <RateContainer />
      </Row>
    </>
  );
};

export default ProductDetails;
