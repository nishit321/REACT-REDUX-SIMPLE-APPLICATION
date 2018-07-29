import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppComponent from "./components/appComponent";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById("root")
);
