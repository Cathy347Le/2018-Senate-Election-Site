import React, { Component } from "react";
import bb from "billboard.js";
import "billboard.js/dist/billboard.css";

class Chart extends Component {
  componentDidMount() {
    this.renderBarChart();
  }

  renderBarChart() {
    bb.generate({
      bindto: "#barchart",
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
    return (
      <div className="barchart-container">
        <h4>Most important issue facing the country</h4>
        <div id="barchart" />
      </div>
    );
  }
}

export default Chart;
