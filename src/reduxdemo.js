import React, { Component } from "react";
import { createStore } from "redux";
import allReducers from "./reducers/index";

class ReduxDemo extends Component {
  state = {};
  render() {
    //step - 1 Store: reducer and state
    const store = createStore(allReducers);
    return <div>Test</div>;
  }
}

export default ReduxDemo;
