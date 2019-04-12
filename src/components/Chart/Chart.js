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
        columns: [
          ["Democrats", 75, 23, 34, 70],
          ["Republicans", 23, 75, 63, 29]
        ],
        type: "bar",
        labels: true,
        colors: {
          Democrats: "blue",
          Republicans: "red"
        }
      },
      axis: {
        x: {
          type: "category",
          categories: ["Health care", "Immigration", "Economy", "Gun policy"]
        }
      },
      size: {
        width: 400,
        height: 400
      }
    });
  }

  render() {
    return <div id="chart" />;
  }
}

export default Chart;
