import React, { Component } from "react";
import usa from "./usa_icon.png";
import linkedInIcon from "./linkedin.png";
import githubIcon from "./github.png";
import emailIcon from "./email.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer-content">
        <h5 className="footer-header">About the Designer</h5>
        <div className="header-border-container">
          <div>{""}</div>
          <img src={usa} alt="usa" />
          <div>{""}</div>
        </div>
        <p>
          Cathy Le is a former political consultant from Greenberg Quinlan
          Rosner turned web developer. On her free time, she enjoys watching
          baseball and spending time with her dog named Gouda. Feel free to
          reach out if you want to chat.
        </p>
        <div className="footer-favicons">
          <a href="https://www.linkedin.com/in/cathyxle/">
            <img src={linkedInIcon} alt="" />
          </a>
          <a href="https://github.com/Cathy347Le">
            <img src={githubIcon} alt="" />
          </a>
          <a href="mailto: Cathy347Le@gmail.com">
            <img src={emailIcon} alt="" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
