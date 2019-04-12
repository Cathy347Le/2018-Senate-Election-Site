import React, { Component } from "react";
import bb from "billboard.js";
import "billboard.js/dist/billboard.css";

class BubbleChart extends Component {
  componentDidMount() {
    this.renderBubbleChart();
  }

  renderBubbleChart() {
    bb.generate({
      bindto: "#bubblechart",
      data: {
        columns: [
          ["Midterm", 45, 49, 42, 30, 30, 23, 40, 54, 61, 41, 44, 65, 63],
          ["Presidential", 63, 66, 63, 48, 47, 48, 61, 69, 71, 57, 61, 80, 81]
        ],
        type: "bubble",
        labels: true,
        colors: {
          Midterm: "gray",
          Presidential: "green"
        }
      },
      bubble: {
        maxR: 25
      },
      axis: {
        x: {
          type: "category",
          categories: [
            "Total",
            "Whites",
            "Blacks",
            "Hisp",
            "Asians",
            "18-29",
            "30-44",
            "45-64",
            "65+",
            "Noncoll men",
            "Noncoll women",
            "Coll grad men",
            "Coll grad women"
          ]
        }
      },
      size: {
        width: 800,
        height: 400
      }
    });
  }

  render() {
    return (
      <div className="bubblechart-container">
        <h4>
          Average turnout rates for midterm and presidential election years
        </h4>
        <div id="bubblechart" />
      </div>
    );
  }
}

export default BubbleChart;
