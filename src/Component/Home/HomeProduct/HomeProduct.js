import React from "react";
import { Container, Row } from "react-bootstrap";
import item from "../../../images/item.png";
import labtop from "../../../images/labtop.png";
import ProductCard from "../../Products/ProductCard/ProductCard";
import ProductDiscount from "../../Products/ProductDiscount/ProductDiscount";
import SubTitle from '../../Utility/SubTitle/SubTitle';
const HomeProduct = () => {
  return (
    <Container>
      <SubTitle title="الأكثر مبيعا" btn_title="المزيد" />
      <Row className="d-flex my-3">
        <ProductCard img={item} price={"880 جنية"} rate_no={"4.5"} />
        <ProductCard img={item} price={"880 جنية"} rate_no={"4.5"} />
        <ProductCard img={labtop} price={"880 جنية"} rate_no={"4.5"} />
        <ProductCard img={item} price={"880 جنية"} rate_no={"4.5"} />
      </Row>
      <ProductDiscount />
    </Container>
  );
};

export default HomeProduct;
