import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../../images/slider1.png";
import slider4 from "../../../images/slider4.png";
import classes from "./Slider.module.css";
const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item className={classes.slider}>
        <img className="d-block w-100" src={slider1} alt="First slide" />
        <Carousel.Caption>
          <h3 className={classes.slider_title}>First slide label</h3>
          <p className={classes.slider_text}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={classes.slider}>
        <img className="d-block w-100" src={slider4} alt="Second slide" />

        <Carousel.Caption>
          <h3 className={classes.slider_title}>Second slide label</h3>
          <p className={classes.slider_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={classes.slider}>
        <img
          className="d-block w-100"
          src={slider4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className={classes.slider_title}>Third slide label</h3>
          <p className={classes.slider_text}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
