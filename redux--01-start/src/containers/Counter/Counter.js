import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../../store/actions";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.oncounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrement} />
        <CounterControl label="Add 5" clicked={this.props.addFive} />
        <CounterControl label="Subtract 5" clicked={this.props.subtractFive} />
        <hr/>
        <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul>
            {this.props.storedResults.map(x=>(
                <li key={x.id} onClick={()=>this.props.onDeleteResult(x.id)}>{x.value}</li>
            ))} 
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults:state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    oncounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrement: () => dispatch({ type: actionTypes.DECREMENT }),
    addFive: () => dispatch({ type: actionTypes.ADD, val: 10 }),
    subtractFive: () => dispatch({ type: actionTypes.SUBTRACT, val: 15 }),
    onStoreResult:(result)=>dispatch({type:actionTypes.STORE_RESULT,result:result}),
    onDeleteResult:(id)=>dispatch({type:actionTypes.DELETE_RESULT, resultEl: id}),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
