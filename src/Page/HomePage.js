import React from "react";
import HomeCategory from "../Component/Home/HomeCategory/HomeCategory";
import Slider from "../Component/Home/Slider/Slider";
import HomeProduct from "../Component/Home/HomeProduct/HomeProduct";
import HomeBrand from "../Component/Home/HomeBrand/HomeBrand";

const HomePage = () => {
  return (
    <>
      <Slider />
      <HomeCategory />
      <HomeProduct />
      <HomeBrand />
    </>
  );
};

export default HomePage;
