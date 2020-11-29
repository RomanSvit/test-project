import React from "react";
import "./Total.css";
const shortid = require("shortid");

const Total = ({ props, onShowPerc, onClearShowPerc }) => {
  const { eachTotal } = props;
  return (
    <ul className="block-total">
      {eachTotal.map((elem, idx) => {
        return (
          <li
            key={shortid()}
            className="cell-total"
            onMouseEnter={onShowPerc}
            onMouseLeave={onClearShowPerc}
            data-id-row={idx}
          >
            {elem}
          </li>
        );
      })}
    </ul>
  );
};

export default Total;
