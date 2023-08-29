import React from "react";
import before from "../../../images/prev.png";
const RightButton = ( onClick, onDisable ) => {
  return (
    <img
      src={before}
      alt=""
      width={35}
      height={35}
      onClick={onClick}
      onDisable={onDisable}
      style={{ float: "right", cursor: "pointer", marginTop: "220px" }}
    />
  );
};

export default RightButton;
