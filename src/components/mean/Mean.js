import React from 'react';
import "./Mean.css";
const shortid = require("shortid");

 const Mean = ({props}) => {
     const { eachMean } = props;
     return (
       <ul className="block-cell-mean">
         {eachMean.map((elem) => {
           return (
             <li key={shortid()} className="cell-mean">
               {elem}
             </li>
           );
         })}
       </ul>
     );
 }
 
 export default Mean;