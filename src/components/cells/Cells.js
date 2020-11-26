import React from "react";
import "./Cells.css";

const Cells = (props) => {
  const { value, onClick } = props;
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
export default Cells;
