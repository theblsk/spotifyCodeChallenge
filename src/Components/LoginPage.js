import React from "react";

import connectAuth from "../storedFunctions/connect";

import "../ComponentCss/LogPage.css";

export default function LoginPage() {
  return (
    <React.Fragment>
      <div className="logPage">
        <div className="logButton">
          <button className="btn btn-primary" onClick={connectAuth}>
            Login <i className="bi bi-spotify"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
