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
        type: "pie",
        labels: true
      },
      pie: {
        padding: 2
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
        <h4>How America participated in the election</h4>
        <div id="piechart" />
      </div>
    );
  }
}

export default PieChart;
