import React from "react";
import classes from "./ProductDiscount.module.css";
import labtops from "../../../images/laptops.png";
const ProductDiscount = () => {
  return (
    <div
      className={`d-flex justify-content-around ${classes.discount_container}`}
    >
      <div className={`d-flex align-items-center ${classes.discount_text}`}>أستمتع الان بخصم يصل الي 30%</div>
      <div className={`d-flex align-items-center`}>
        <img
          src={labtops}
          style={{
            height: "120px",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default ProductDiscount;
