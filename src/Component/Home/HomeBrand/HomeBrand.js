import React from "react";
import { Container, Row } from "react-bootstrap";

import Brand from "../../Brand/Brand";
import brand1 from "../../../images/brand1.png";
import brand2 from "../../../images/brand2.png";
import brand3 from "../../../images/brand3.png";
import SubTitle from "../../Utility/SubTitle/SubTitle";
const HomeBrand = () => {
  return (
    <Container>
      <SubTitle title="أشهر الماركات" btn_title="المزيد" />
      <Row className={`d-flex my-3 justify-content-around align-items-center `}>
        <Brand img={brand1} />
        <Brand img={brand2} />
        <Brand img={brand3} />
        <Brand img={brand1} />
        <Brand img={brand2} />
        <Brand img={brand3} />
      </Row>
    </Container>
  );
};

export default HomeBrand;
