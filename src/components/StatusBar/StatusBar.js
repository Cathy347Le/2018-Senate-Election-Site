import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

class StatusBar extends Component {
  render() {
    return (
      <div className="statusbar-container">
        <h4>Results last updated April 9, 10:12 a.m.</h4>
        <ProgressBar>
          <ProgressBar animated variant="primary" now={47} key={1} />
          <ProgressBar animated variant="danger" now={53} key={2} />
        </ProgressBar>
      </div>
    );
  }
}

export default StatusBar;
