import React from "react";
import classes from './ProductText.module.css';
import { Button } from "react-bootstrap";
const ProductText = () => {
  return (
    <div style={{ textAlign: "start" }}>
      <div className={`my-2 ${classes.header}`}>الكترونيات</div>
      <div>ايفون xr بسعة تصل الي 128 جيجا بايت </div>
      <div className={`my-2 ${classes.rate}`}>4.5</div>
      <div className="d-flex my-2 ">
        <div className={`${classes.header} ms-2`}>الماركه</div>{" "}
        <div>سامسونج</div>
      </div>
      <div className="d-flex">
        <div className={classes.color1}>.</div>
        <div className={`${classes.color2} mx-2`}>.</div>
        <div className={classes.color3}>.</div>
      </div>
      <div className={`my-2 ${classes.header}`}>المواصفات</div>
      <div className={classes.details}>
        مواصفات تليفون سامسونج من فئه الكترونيات ايفون xr بسعة تصل الي 128 جيجا
        بايت
        مواصفات تليفون سامسونج من فئه الكترونيات ايفون xr بسعة تصل الي 128 جيجا
        بايت
        مواصفات تليفون سامسونج من فئه الكترونيات ايفون xr بسعة تصل الي 128 جيجا
        بايت

      </div>
      <Button className="ms-2 my-3" variant="outline-secondary">13000جنيه </Button>
      <Button className="my-3" variant="dark">أضف الي العربة</Button>
    </div>
  );
};

export default ProductText;
