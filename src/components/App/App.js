import React, { Component } from "react";
import Header from "../Header/Header.js";

class App extends Component {
  render() {
    return (
      <div className="body-content">
        <header className="header-content">
          <Header />
        </header>
      </div>
    );
  }
}

export default App;
