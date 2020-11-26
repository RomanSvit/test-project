import React from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/actions";
const shortid = require("shortid");

class App extends React.Component {

  // handlerClick = (e) => {
  //   let data = e.target;
  //   console.log(data);
  //   this.props.onInc();
  // };
  

  render() {
    const { cell, mean, total } = this.props.state;
    const { onAddStr, onDelStr, onInc } = this.props;
    return (
      <div className="main-block">
        <ul className="matrix">
          {cell.map((elem) => {
            return (
              <li
                key={shortid()}
                className="cell"
                onClick={onInc}
              >
                {elem.amount}
              </li>
            );
          })}
        </ul>
        <span className="total">Total:{total}</span>
        <span className="mean">Mean:{mean}</span>
        <button className="add-btn" onClick={onAddStr}>
          add str
        </button>
        <button className="del-btn"  onClick={onDelStr}>
          dellete str
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = (dispatch) => ({
  onInc: () => {
    dispatch(actions.increment(1));
  },
  onAddStr: () => {
    dispatch(actions.addStr());
  },
  onDelStr: (id) => {
    dispatch(actions.delStr(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
