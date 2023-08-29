import React from "react";
import { Col } from "react-bootstrap";
import classes from "./CategoryCard.module.css";
const CategoryCard = ({ img, title,color }) => {
  return (
   
      <Col
        lg="2"
        md="4"
        sm="6"
        xs="6"
        className="d-flex my-4"
      >
        <div className={classes.all_card}>
          <div className={classes.category_card} style={{backgroundColor:color}}>
            <img src={img} alt="clothe" className={classes.categoty_card_img} />
          </div>
          <div>{title}</div>
        </div>
      </Col>
  );
};

export default CategoryCard;
