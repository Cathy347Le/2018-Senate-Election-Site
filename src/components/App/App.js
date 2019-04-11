import React, { Component } from "react";
import Header from "../Header/Header.js";
import Chart from "../Chart/Chart.js";
import Map from "../Map/Map.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header-content">
          <Header />
        </header>
        <main>
          <div className="map-content">
            <Map />
          </div>
          <div className="graphs-content">
            <Chart />
          </div>
        </main>
      </div>
    );
  }
}

export default App;

{
  /* 
class App extends Component {
  render() {
    return (
      <div>
        <div className="map-content">
          <Map />
        </div>
      </div>
    );
  }
} */
}
