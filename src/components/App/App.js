import React, { Component } from "react";
import Header from "../Header/Header.js";
import Chart from "../Chart/Chart.js";

class App extends Component {
  render() {
    return (
      <div className="body-content">
        <header className="header-content">
          <Header />
        </header>
        <main>
          <Chart />
        </main>
      </div>
    );
  }
}

export default App;
