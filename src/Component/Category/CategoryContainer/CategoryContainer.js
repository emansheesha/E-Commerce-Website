import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "../../Category/CategoryCard/CategoryCard";
import { colors } from "../../../colors";

const CategoryContainer = ({ data }) => {
  console.log(data)
  return (
    <Container>
      <h3 style={{ textAlign: "start" }} className="fs-2 my-4">
        كل التصنيفات
      </h3>
      <Row className="d-flex my-3">
        {/* slice(0,5) to show first 6 items only */}
        {data.loading ? (
          <Spinner
            animation="border"
            role="status"
            className="mx-auto"
          ></Spinner>
        ) : data.category ? (
          data.category.data.map((item, index) => {
            return (
              <CategoryCard
                img={item.image}
                title={item.name}
                key={index}
                color={colors[Math.floor(Math.random() * 5) + 1]}
              />
            );
          })
        ) : (
          <p>لا يوجد تصنيفات</p>
        )}
      </Row>
    </Container>
  );
};

export default CategoryContainer;
