import React from "react";
import CategoryHeader from "../../Component/Category/CategoryProduct/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductDetails from "../../Component/Products/ProductDetails/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <div>
      <CategoryHeader />
      <Container>
        <ProductDetails />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
