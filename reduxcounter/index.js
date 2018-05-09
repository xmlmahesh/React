import React, {Component} from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import counter from "./reducer";
import App from "./App";
import "./index.css";

var destination = document.querySelector("#container");

var store = createStore(counter);

ReactDom.render
(
  <Provider store={store}>
    <App/>
  </Provider>,
  destination
);
