import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { firebaseContexts } from "./store/firebaseContext";
import {app} from './firebase/config'
import Context from "./store/firebaseContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <firebaseContexts.Provider value={{app}}>
    <Context>
    <App />
    </Context>
  </firebaseContexts.Provider>
);


reportWebVitals();
