import React from "react";
import { Button } from "react-bootstrap";
import classes from "./RateComment.module.css";
import rate from "../../../images/rate.png";
import { Col, Row } from "react-bootstrap";
const RateComment = () => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <div className="d-flex align-items-center">
            <h4 className="ms-2">محمد أحمد </h4>
            <img src={rate} alt="rate" width={20} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <input />
        </Col>
      </Row>
      <Row>
        <Col xs={12} className={`d-flex justify-content-end pb-3`}>
          <section className={` ${classes.underline} d-flex justify-content-end`}>
            <Button className="my-3" variant="dark">
              أضف تعليق
            </Button>
          </section>
        </Col>
      </Row>
    </>
  );
};

export default RateComment;
