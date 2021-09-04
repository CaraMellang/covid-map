import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";

ReactDOM.render(
  <React.StrictMode>
    {/*개발모드에서는 차트가 두번 리렌더링되는 원인일수도있음. */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
