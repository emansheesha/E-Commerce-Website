import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTitle from "../../Utility/SubTitle/SubTitle";
import CategoryCard from "../../Category/CategoryCard/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../../redux/actions/categoryAction";
import { colors } from "../../../colors";

const HomeCategory = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allCategory);
  


  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  return (
    <Container>
      <SubTitle title="التصنفيات" btn_title="المزيد" />
      <Row className="d-flex my-3">
        {/* slice(0,5) to show first 6 items only */}
        {data.loading ? (
          <Spinner animation="border" role="status" className="mx-auto">
         
          </Spinner>
        ) : data.category ? (
          data.category.data.map((item, index) => {
            return (
              // change background color based on colors array
              <CategoryCard img={item.image} title={item.name} key={index} color={colors[Math.floor(Math.random()*5)+1]}/>
            );
          })
        ) : (
          <p>لا يوجد تصنيفات</p>
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
