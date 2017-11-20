import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import { BrowserRouter } from "react-router-dom";
import "./main.css";

import App from "./components/app";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("app")
);
