import React from "react";
import "./Matrix.css";
const shortid = require("shortid");

const Matrix = ({ props, onInc, onMouseEnter, onClearShowCell }) => {
  const { matrix, idShowCell, percCell, m , n} = props;
  return (
    <ul
      className="matrix"
      style={{ width: 96 * n + "px", height: 96 * m + "px" }}
    >
      {matrix.map((groupElem, idxRow) => {
        return groupElem.map((elem, idxCol) => {
          return (
            <li
              key={shortid()}
              className={"cell " + (idShowCell.includes(elem.id) ? "show" : "")}
              onClick={onInc}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onClearShowCell}
              id={elem.id}
              data-id-row={idxRow}
              data-id-col={idxCol}
            >
              {percCell.id === idxRow
                ? percCell.cells[idxCol] + "%"
                : elem.amount}
              <span
                className="perc-cell"
                style={{
                  height:
                    (percCell.id === idxRow ? percCell.cells[idxCol] : 0) +
                    "px",
                }}
              ></span>
            </li>
          );
        });
      })}
    </ul>
  );
};

export default Matrix;
