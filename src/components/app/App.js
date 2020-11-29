import React from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/actions";
import Total from "../total/Total";
import Matrix from "../matrix/Matrix";
import Mean from "../mean/Mean";

class App extends React.Component {
  render() {
    const {
      onAddStr,
      onDelStr,
      onInc,
      onShowCell,
      onShowPerc,
      onClearShowCell,
      onClearShowPerc,
    } = this.props;
    return (
      <div className="main-block">
        <div className="wrapper">
          <Matrix
            props={this.props.state}
            onInc={onInc}
            onMouseEnter={onShowCell}
            onClearShowCell={onClearShowCell}
          />
          <Total
            props={this.props.state}
            onShowPerc={onShowPerc}
            onClearShowPerc={onClearShowPerc}
          />
          <div className="block-btn">
            <button className="add-btn btn" onClick={onAddStr}>
              add str
            </button>
            <button className="del-btn btn" onClick={onDelStr}>
              dell str
            </button>
          </div>
        </div>
        <Mean props={this.props.state} />
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
    dispatch(actions.addStr(1));
  },
  onDelStr: (id) => {
    dispatch(actions.delStr(id));
  },
  onUpdate: () => {
    dispatch(actions.updateTotal());
  },
  onShowCell: (e) => {
    dispatch(actions.showCell(e));
  },
  onClearShowCell: () => {
    dispatch(actions.clearShowCell());
  },
  onShowPerc: (e) => {
    dispatch(actions.showPercentContribution(e));
  },
  onClearShowPerc: () => {
    dispatch(actions.clearPercentContribution());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
