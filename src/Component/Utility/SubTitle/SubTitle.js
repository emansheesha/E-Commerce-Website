import React from "react";
import classes from "./SubTitle.module.css";
import { Link } from "react-router-dom";
import ButtonDetaials from "./ButtonDetaials";
const SubTitle = ({ title, btn_title }) => {
  return (
    <div className="d-flex justify-content-between mt-5 mb-3">
      <div className={` ${classes.sub_title}`}>{title}</div>
      {btn_title ? (
        title == "التصنفيات" ? (
          <Link to="allcategory">
            <ButtonDetaials btn_title={btn_title} />
          </Link>
        ) : title == "أشهر الماركات" ? (
          <Link to="allbrand">
            <ButtonDetaials btn_title={btn_title} />
          </Link>
        ) : title="الأكثر مبيعا"?
        <Link to="products">
           <ButtonDetaials btn_title={btn_title} />
        </Link>:
        (
          <ButtonDetaials btn_title={btn_title} />
        )
      ) : null}
    </div>
  );
};

export default SubTitle;
