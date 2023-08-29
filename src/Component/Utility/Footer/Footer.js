import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import facebook from "../../../images/facebook.png";
import instagram from "../../../images/instagram.png";
import twitter from "../../../images/twitter.png";
import phone from "../../../images/phone.png";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div
      className={`${classes.footer_background} ${classes.footer} mt-3 pt-2`}
      style={{ maxHeight: "50px" }}
    >
      <Container className="">
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm="6" className="d-flex align-items-center ">
            <div className={`${classes.footer_shroot}`}>الشروط والاحكام</div>
            <div className={`${classes.footer_shroot} mx-2`}>
              سيايه الخصوصيه
            </div>
            <div className={`${classes.footer_shroot} mx-2`}>اتصل بنا</div>
          </Col>
          <Col
            sm="6"
            className="d-flex justify-content-end align-items-center "
          >
            <div className="d-flex pt-3 mx-2">
              <img width="20px" height="20px" src={phone} alt="" />
              <p className={`${classes.footer_phone}`}>0122455346356</p>
            </div>
            <div style={{ cursor: "pointer" }}>
              <img width="20px" height="20px" src={facebook} alt="" />
            </div>
            <div style={{ cursor: "pointer" }} className="">
              <img width="20px" height="20px" src={instagram} alt="" />
            </div>
            <div style={{ cursor: "pointer" }} className="">
              <img width="20px" height="20px" src={twitter} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
