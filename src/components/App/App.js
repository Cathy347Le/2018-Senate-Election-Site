import React, { Component } from "react";
import Header from "../Header/Header.js";
import StatusBar from "../StatusBar/StatusBar";
import Map from "../Map/Map.js";
import BarChart from "../BarChart/BarChart.js";
import PieChart from "../PieChart/PieChart.js";
import BubbleChart from "../BubbleChart/BubbleChart.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header-content">
          <Header />`
        </header>
        <main>
          <div className="statusbar-content">
            <StatusBar />
          </div>
          <div className="map-content">
            <Map />
          </div>
          <div className="graphs-content">
            <BarChart />
            <PieChart />
            <BubbleChart />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
