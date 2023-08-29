import React from "react";
import classes from "./RatePost.module.css";
import rate from "../../../images/rate.png";
import { Col, Row } from "react-bootstrap";
const RatePost = () => {
  return (
    <>
        <Row>
          <Col xs={12}>
            <div className="d-flex align-items-center">
              <h4 className="ms-2">محمد أحمد </h4>
              <img src={rate} alt="rate" width={20} />
              <div className={`my-2 ${classes.rate} mx-2`}>4.5</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className={`pb-3`}>
            <section className={`${classes.rate_post} pb-3`}>
              منتتج رائع
            </section>
          </Col>
        </Row>
     
    </>
  );
};

export default RatePost;
