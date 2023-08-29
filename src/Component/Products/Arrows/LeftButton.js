import React from "react";
import next from "../../../images/next.png";
const LeftButton = ( onClick, onDisable ) => {
  return (
    <img
      src={next}
      alt=""
      width={35}
      height={35}
      onClick={onClick}
      onDisable={onDisable}
      style={{ float: "left", cursor: "pointer", marginTop: "220px" }}
    />
  );
};

export default LeftButton;
