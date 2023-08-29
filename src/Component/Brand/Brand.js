import React from "react";

import { Col } from "react-bootstrap";
const Brand = ({ img }) => {
  return (
    <Col lg="2" md="3" sm="6" xs="12" className="d-flex my-4">
      <img
        src={img}
        style={{
          height: "120px",
          width: "100%",
        }}
      />
    </Col>
   
  );
};

export default Brand;
