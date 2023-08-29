import React from "react";
import { Button } from "react-bootstrap";

import classes from "./SubTitle.module.css";
const ButtonDetaials = ({ btn_title }) => {
  return (
    <Button variant="outline-dark" className={classes.btn_title}>
      {btn_title}
    </Button>
  );
};

export default ButtonDetaials;
