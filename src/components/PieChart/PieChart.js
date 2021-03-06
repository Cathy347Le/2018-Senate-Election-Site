import React, { Component } from "react";
import bb from "billboard.js";
import "billboard.js/dist/billboard.css";

class PieChart extends Component {
  componentDidMount() {
    this.renderPieChart();
  }

  renderPieChart() {
    bb.generate({
      bindto: "#piechart",
      data: {
        columns: [
          ["Voted Clinton", 19.8],
          ["Voted Trump", 19.5],
          ["Didn't vote", 29.9],
          ["Ineligible to vote", 28.6],
          ["Voted other", 2.2]
        ],
        type: "pie"
      },
      legend: { show: false },
      pie: {
        padding: 2,
        label: {
          ratio: 1.2,
          format: (value, ratio, id) => `${id}\n ${(ratio * 100).toFixed(1)}%`
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
      <div className="piechart-container">
        <h4>How America participated in the 2018 election</h4>
        <div id="piechart" />
      </div>
    );
  }
}

export default PieChart;
