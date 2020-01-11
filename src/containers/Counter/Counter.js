import React, { Component } from 'react';
import {connect} from "react-redux"

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}  />
                <hr />
                <button onClick={this.props.onStoreData}>Store data</button>
                <ul>
                    {this.props.strResult.map(result =>{
                        return(
                            <li key={result.id} onClick={() => this.props.onDeleteData(result.id)}>{result.value}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ctr: state.counter,
    strResult: state.result
})

const mapDispatchToProps = (dispatch) => ({
    onIncrementCounter: () => dispatch({type: "INCREMENT"}),
    onDecrementCounter: () => dispatch({type: "DECREMENT"}),
    onAddCounter: (value) => dispatch({type: "ADD", value}),
    onSubtractCounter: (value) => dispatch({type: "SUB", value}),
    onStoreData: () => dispatch({type: "STORE_RESULT"}),
    onDeleteData: (resultId) => dispatch({type: "DELETE_RESULT", resultId})
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);