import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './app/store';
const root = document.getElementById("root")

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );