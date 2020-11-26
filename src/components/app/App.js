import React from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/actions";
const shortid = require("shortid");

class App extends React.Component {
  render() {
    const { matrix, mean, total } = this.props.state;
    const { onAddStr, onDelStr, onInc } = this.props;

    console.log(matrix);
    return (
      <div className="main-block">
        <ul className="matrix">
          {matrix.map((groupElem) => {
            return groupElem.map((elem) => {
              return (
                <li
                  key={shortid()}
                  className="cell"
                  onClick={onInc}
                  id={elem.id}
                >
                  {elem.amount}
                </li>
              );
            });
          })}
        </ul>
        <span className="total">Total:{total}</span>
        <span className="mean">Mean:{mean}</span>
        <button className="add-btn" onClick={onAddStr}>
          add str
        </button>
        <button className="del-btn" onClick={onDelStr}>
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
  onInc: (e) => {
    dispatch(actions.increment(e));
  },
  onAddStr: () => {
    dispatch(actions.addStr());
  },
  onDelStr: (id) => {
    dispatch(actions.delStr(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
 