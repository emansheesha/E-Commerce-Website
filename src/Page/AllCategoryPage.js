import React, { useEffect, useState } from "react";
import CategoryContainer from "../Component/Category/CategoryContainer/CategoryContainer";
import Pagination from "../Component/Utility/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../redux/actions/categoryAction";

const AllCategoryPage = () => {
  const [category,setCategory] = useState({})
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allCategory);
  let numberOfPages = 0;
  // when we re-render Component, numberOfPages equals undefined as component didn't get data from backend yet
  if (data.category.paginationResult)
    numberOfPages = data.category.paginationResult.numberOfPages;

  useEffect(() => {
    dispatch(getAllCategory(2));
  }, []);
  useEffect(() => {
   setCategory(data)
  }, [data]);
  
  return (
    <>
      <CategoryContainer data={category} />
      {numberOfPages > 1 ? <Pagination numberOfPages={numberOfPages} /> : null}
    </>
  );
};

export default AllCategoryPage;
