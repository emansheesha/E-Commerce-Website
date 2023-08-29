import React from "react";
import ReactImageGallery from "react-image-gallery";
import mobile from "../../../images/mobile.png";
import RightButton from "../Arrows/RightButton";
import LeftButton from "../Arrows/LeftButton";
const ProductGallery = () => {
  const images = [
    {
      original: `${mobile}`,
      //   thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: `${mobile}`,
      //   thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: `${mobile}`,
      //   thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#ffffff", borderRadius: "30px" , minWidth:"150px", minHeight:"450px"}}
    >
      <ReactImageGallery
        items={images}
        defaulImage={mobile}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        isRTL={true}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );
};

export default ProductGallery;
