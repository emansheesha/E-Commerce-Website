import React from "react";
import CategoryHeader from "../../Component/Category/CategoryProduct/CategoryHeader";
import SearchCountResult from "../../Component/Utility/SearchCountResult/SearchCountResult";
import SideFilter from "../../Component/Utility/SideFilter/SideFilter";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../Component/Products/ProductCard/ProductCard";
import item from "../../images/item.png";
import labtop from "../../images/labtop.png";
import Pagination from "../../Component/Utility/Pagination/Pagination";
const ShopProductPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <SearchCountResult />
      <br />
      <Container>
        <Row>
          <Col lg="2" sm="4" xs="4" className="my-4">
            <SideFilter />
          </Col>
          <Col lg="10"  sm="8" xs="8">
            <Row>
              <ProductCard img={item} price={"880 جنية"} rate_no={"4.5"} />

              <ProductCard img={item} price={"880 جنية"} rate_no={"4.5"} />

              <ProductCard img={labtop} price={"880 جنية"} rate_no={"4.5"} />

              <ProductCard img={item} price={"880 جنية"} rate_no={"4.5"} />
              <ProductCard img={item} price={"880 جنية"} rate_no={"4.5"} />
            </Row>
          </Col>
        </Row>
      </Container>
      <Pagination />
    </div>
  );
};

export default ShopProductPage;
