import React, { Component } from "react";
import bb from "billboard.js";
import "billboard.js/dist/billboard.css";

class Chart extends Component {
  componentDidMount() {
    this._renderChart();
  }

  _renderChart() {
    bb.generate({
      bindto: "#chart",
      data: {
        type: "bar",
        columns: [
          ["Democrats", 30, 200, 100, 170, 150, 250],
          ["Republicans", 130, 100, 140, 35, 110, 50]
        ],
        colors: {
          Democrats: "red",
          Republicans: "green"
        }
      },
      size: {
        width: 300,
        height: 300
      }
    });
  }

  render() {
    return <div id="chart" />;
  }
}

export default Chart;
