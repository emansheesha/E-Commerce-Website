import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./RateContainer.module.css";
import rate from "../../../images/rate.png";
import RatePost from "../RatePost/RatePost";
import RateComment from "../RateComment/RateComment";
import Pagination from "../../Utility/Pagination/Pagination";
const RateContainer = () => {
  return (
    <Container className={classes.rate_container}>
      <Row>
        <Col xs={12}>
          <div className="d-flex align-items-center">
            <h4 className="ms-2">التعليقات </h4>
            <img src={rate} alt="rate" width={25} />
            <div className={`my-2 ${classes.rate} mx-2`}>4.5</div>
            <div className={` ${classes.high_rate}`}>الأعلى تقييم</div>
          </div>
        </Col>
      </Row>
      <Row className="px-4">
        <RateComment />
      </Row>
      <Row className="px-4">
        <RatePost />
        <RatePost />
        <RatePost />
      </Row>
      <Pagination />
    </Container>
  );
};

export default RateContainer;
