import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

class StatusBar extends Component {
  render() {
    return (
      <div className="statusbar-container">
        <h4>Results last updated April 9, 10:12 a.m.</h4>
        <div className="flex-container">
          <div className="side-container">
            <i className="fas fa-democrat fa-3x" />
            <p className="party-seats">47</p>
            <p className="party">Democrats</p>
          </div>
          <div className="progress-bar-container">
            <ProgressBar>
              <ProgressBar animated variant="primary" now={47} key={1} />
              <ProgressBar animated variant="danger" now={53} key={2} />
            </ProgressBar>
          </div>
          <div className="side-container">
            <i className="fas fa-republican fa-3x" />
            <p className="party-seats">53</p>
            <p className="party">Republicans</p>
          </div>
        </div>
      </div>
    );
  }
}

export default StatusBar;
