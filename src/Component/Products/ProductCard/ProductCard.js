import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import classes from "./ProductCard.module.css";
import favoff from "../../../images/fav-off.png";
import rate from "../../../images/rate.png";
import { Link } from "react-router-dom";
const ProductCard = ({ img, price, rate_no }) => {
  return (
    <Col lg="3" md="4" sm="6" xs="12" className="d-flex my-4">
      <Card style={{ width: "18rem" }} className={classes.card}>
        <Link to={`/products/id`}>
          <Card.Img
            variant="top"
            src={img}
            style={{
              height: "200px",
              width: "100%",
            }}
            className="p-2"
          />
        </Link>
        <Card.Body>
          <div className="d-flex justify-content-end mx-2">
            <img
              src={favoff}
              alt=""
              style={{
                height: "24px",
                width: "26px",
              }}
            />
          </div>
          <Card.Text className={classes.text}>
            هيدفون لسماع أحدث التراكات بأعلي جوده
          </Card.Text>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <img className="" src={rate} alt="" height="16px" width="16px" />{" "}
              <span className={classes.rate}>{rate_no}</span>
            </div>
            <div>{price}</div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
