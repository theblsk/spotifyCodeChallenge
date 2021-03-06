import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { debounce } from "debounce";
import { loadState, saveState } from "./localStorage";
import rootReducer from "./reducers/rootReducer";

var persistedState = loadState();

const store = createStore(rootReducer, persistedState);

store.subscribe(
  debounce(() => {
    saveState({
      token: store.getState().token,
      name: store.getState().name,
      artistId: store.getState().artistId,
    });
  }),
  200
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
